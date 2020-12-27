import { useCallback } from 'react';
import { Card, Table, Button, Dropdown, Menu, Popconfirm, Typography, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import util, { useStock } from '../util/index'
import { useTabData } from '../main'
import ImportFile from '../component/ImportFile/index'
import './index.less'

const { Link } = Typography;

const btnStyle = { marginRight: 8 }

const columns = [
  {
    title: '名称',
    width: 160,
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '操作',
    width: 160,
    dataIndex: 'action',
    key: 'action',
    render(text, record) {
      return <>
        <Link style={btnStyle}>
          查看
        </Link>
        <Link style={btnStyle}
          onClick={() => {
            util.downJSON(record.name, record)
          }}
        >
          导出JSON
        </Link>
        <Link style={btnStyle}
          onClick={() => {
            util.exportXLSX(record.name, util.dataToXlsxData(record))
          }}
        >
          导出xlsx
        </Link>
        <Popconfirm
          placement="topRight"
          title={`确定删除（${record.name}）？`}
          onConfirm={() => {
            util.removeLocalItemData(record.name)
          }}
          okText="确定"
          cancelText="取消"
        >
          <Link style={btnStyle}>
            删除
          </Link>
        </Popconfirm>
      </>
    }
  }
]

function DropMenu() {
  const { setStockData, reloadStock } = useStock()

  const onClick = useCallback(() => {
    reloadStock()
  }, [reloadStock])

  const onExportJSON = useCallback(() => {
    util.getLocalList().then((data) => {
      return util.downJSON('全部数据', data)
    }).catch((err) => {
      console.error(err)
      message.error(`导出失败[${err.message}]`)
    })
  }, [])

  const onImportJSON = useCallback((file) => {
    util.readFileJSON(file).then((data) => {
      return setStockData(data)
    }).then(() => {
      message.success('导入JSON成功')
    }).catch((err) => {
      console.error(err)
      message.error(`导入JSON失败[${err.message}]`)
    })
  }, [setStockData])

  const onImportXLSX = useCallback((file) => {
    util.readFileXLSX(file).then((data) => {
      return setStockData(data)
    }).then(() => {
      message.success('导入xlsx成功')
    }).catch((err) => {
      console.error(err)
      message.error(`导入xlsx失败[${err.message}]`)
    })
  }, [setStockData])

  const onClickMenu = useCallback((e) => {
    const map = {
      ['import-json']: onExportJSON,
      // ['export-json']: onImportJSON,
    }
    const key = e.key
    if (map[key]) {
      map[key]()
    }
  }, [onExportJSON])

  return <>
    <Button style={btnStyle} onClick={onClick}>
      刷新
    </Button>
    <Dropdown
      placement="bottomRight"
      overlay={<Menu onClick={onClickMenu}>
        <Menu.Item key="import-json">
          <Link>
            导出全部JSON
          </Link>
        </Menu.Item>
        <Menu.Item key="import-xlsx">
          <Link>
            导出全部xlsx
          </Link>
        </Menu.Item>
        <Menu.Item key="export-json">
          <Link>
            <ImportFile accept="json" onChange={onImportJSON}>
              导入JSON
            </ImportFile>
          </Link>
        </Menu.Item>
        <Menu.Item key="export-xlsx">
          <Link>
            <ImportFile accept="xlsx" onChange={onImportXLSX}>
              导入xlsx
            </ImportFile>
          </Link>
        </Menu.Item>
      </Menu>}
    >
      <Button>
        更多 <DownOutlined />
      </Button>
    </Dropdown>
  </>
}

function DataManage() {
  const {
    tabData,
  } = useTabData()

  return (
    <div className="data-manage">
      <Card
        title="数据"
        extra={<DropMenu />}
      >
        <Table
          rowKey="name"
          columns={columns}
          dataSource={tabData}
          scroll={{ y: 400 }}
          bordered
          pagination={false}
        />
      </Card>
    </div>
  );
}

export default DataManage;
