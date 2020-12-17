import { useState, useEffect, useMemo, useCallback } from 'react';
import { Typography, Table, Collapse, Button } from 'antd';
import EditModal from '../EditModal'
import util from '../../util/index'
import './index.less';

const { Title, Link } = Typography;
const { Panel } = Collapse;

const linkStyle = {marginRight: 4}

function useDataAndList(data, columnMap) {
  const [dataSource, setDataSource] = useState(() => {
    return []
  })
  const [pData, setPData] = useState(() => {
    return []
  })
  const [cData, setCData] = useState(() => {
    return []
  })
  const [renderList, setRenderList] = useState(() => {
    return []
  })

  useEffect(() => {
    const [fData, pData, cData] = util.dataFormat(data.fData || [], data.pData || [], data.cData || [])
    setDataSource(fData)
    setPData(pData)
    setCData(cData)
    const renderList = util.getAssetsAnalysisList(fData, columnMap)
    setRenderList(renderList)
  }, [data, columnMap])

  return {
    dataSource,
    pData,
    cData,
    renderList,
  }
}

function useEditModal() {
  const [editVisible, setEditVisible] = useState(() => {
    return false
  })
  const [modalData, setModalData] = useState(() => {
    return {}
  })
  const onClick = useCallback(({type, record, index, ctrlType}) => {
    console.log(index)
    console.log(record)
    setModalData({
      type, record, index, ctrlType
    })
    setEditVisible(true)
  }, [])
  const onCancel = useCallback(() => {
    setEditVisible(false)
  }, [])
  return {
    onClick,
    onCancel,
    editVisible,
    modalData
  }
}

function useCtrlColumn(onClick) {
  const columnMap = useMemo(() => {
    function getColumn(type) {
      return {
        title: '操作',
        width: 160,
        dataIndex: 'action',
        key: 'action',
        fixed: 'right',
        render(text, record, index) {
          return <>
            <Link
              style={linkStyle}
              onClick={() => {
                onClick({
                  type, record, index,
                  ctrlType: 'edit'
                })
              }}
            >
              编辑
            </Link>
            <Link
              style={linkStyle}
              onClick={() => {
                onClick({
                  type, record, index,
                  ctrlType: 'read'
                })
              }}
            >
              明细
            </Link>
          </>
        }
      }
    }

    return {
      fColumn: getColumn('f'),
      pColumn: getColumn('p'),
      cColumn: getColumn('c')
    }
  }, [onClick])

  return columnMap
}

function getID() {
  return `id-${Math.random()}`
}

function FinanceTable(props) {
  const { name, data, title, code, reload } = props

  const [btnLoading, setBtnLoading] = useState(() => {
    return false
  })
  const [id] = useState(() => {
    return getID()
  })

  const {
    onClick,
    onCancel,
    editVisible,
    modalData,
  } = useEditModal()
  const columnMap = useCtrlColumn(onClick)

  const {
    dataSource,
    pData,
    cData,
    renderList,
  } = useDataAndList(data, columnMap)

  return (
    <div id={id} className="finance-table">
      <div className="table-title">
        <Title level={3}>{name}</Title>
        <Button
          className="table-down-btn"
          type="primary"
          loading={btnLoading}
          onClick={() => {
            setBtnLoading(true)
            setTimeout(() => {
              util.downPageImg(document.getElementById(id), name).then(() => {
                setBtnLoading(false)
              }).catch(() => {
                setBtnLoading(false)
              })
            }, 20)
          }}
        >
          下载
        </Button>
      </div>
      {renderList && renderList.length ? <Collapse
        defaultActiveKey={renderList.map((item, index) => {
          return index
        })}
      > 
        {renderList.map((item, index) => {
          let _dataSource = dataSource
          if (item.type === 'p') {
            _dataSource = pData
          } else if (item.type === 'c') {
            _dataSource = cData
          }
          return <Panel header={item.title} key={index}>
            <Table
              rowKey="ENDDATE"
              columns={item.columns}
              dataSource={_dataSource}
              scroll={{ x: 1206 }}
              bordered
              pagination={false}
            />
            <div className="table-text-area">
              {item.textArr && item.textArr.length ? <div className="text-title">分析判断如下</div> : ''}
              {item.textArr}
            </div>
          </Panel>
        })}
      </Collapse> : ''}
      <EditModal
        record={modalData.record}
        type={modalData.type}
        index={modalData.index}
        ctrlType={modalData.ctrlType}
        visible={editVisible}
        onCancel={onCancel}
        onOk={onCancel}
        onSave={({type, record}) => {
          util.setItemData(title, code, type, record).then(() => {
            onCancel()
            reload()
          })
        }}
      />
    </div>
  );
}

export default FinanceTable
