import { useState, useEffect } from 'react';
import { Typography, Table, Collapse, Button } from 'antd';
import util from '../../util/index'
import './index.less';

const { Title } = Typography;
const { Panel } = Collapse;

function useDataAndList(data) {
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
    const renderList = util.getAssetsAnalysisList(fData)
    setRenderList(renderList)
  }, [data])

  return {
    dataSource,
    pData,
    cData,
    renderList,
  }
}

function getID() {
  return `id-${Math.random()}`
}

function FinanceTable(props) {
  const { title, data } = props

  const [btnLoading, setBtnLoading] = useState(() => {
    return false
  })
  const [id] = useState(() => {
    return getID()
  })

  const {
    dataSource,
    pData,
    cData,
    renderList,
  } = useDataAndList(data)

  return (
    <div id={id} className="finance-table">
      <div className="table-title">
        <Title level={3}>{title}</Title>
        <Button
          className="table-down-btn"
          type="primary"
          loading={btnLoading}
          onClick={() => {
            setBtnLoading(true)
            setTimeout(() => {
              util.downPageImg(document.getElementById(id), title).then(() => {
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
          // return <Card
          //   className="table-card"
          //   key={index}
          //   title={item.title}
          //   bordered={false}
          // >
            
          // </Card>
        })}
      </Collapse> : ''}
    </div>
  );
}

export default FinanceTable
