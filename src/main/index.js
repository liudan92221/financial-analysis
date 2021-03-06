import { useState, useCallback, useEffect } from 'react';
import { Form, Input, DatePicker, Row, Col, Button, message } from 'antd';
import moment from 'moment';
import { useStock } from '../util/index'
import TabFinance from '../component/TabFinance'
import './index.less'

const { RangePicker } = DatePicker;

export const useTabData = () => {
  const { stockData, requestStockData, loading } = useStock()

  const [tabData, setTabData] = useState(() => {
    return []
  })
  const [activeKey, setActiveKey] = useState(() => {
    return '0'
  })

  const onChange = useCallback((activeKey) => {
    setActiveKey(activeKey)
  }, [])

  const add = useCallback((data) => {
    const newTabData = [ ...tabData ]
    newTabData.push(data)
    setActiveKey(newTabData.length - 1 + '')
    setTabData(newTabData)
  }, [tabData, setTabData])

  const remove = useCallback((index) => {
    const newTabData = [ ...tabData ]
    newTabData.splice(index, 1)
    if (activeKey === index) {
      setActiveKey('0')
    }
    setTabData(newTabData)
  }, [tabData, activeKey, setTabData])

  useEffect(() => {
    if (stockData) {
      const arr = []
      for (let key in stockData) {
        arr.push(stockData[key])
      }
      setTabData(arr)
    }
  }, [stockData])

  return {
    tabData,
    activeKey,
    add,
    remove,
    onChange,
    requestStockData,
    loading,
  }
}

const dateFormat = 'YYYY';

const endDate = moment()
const startDate = moment(endDate.format('YYYY') - 6, dateFormat)

function Main() {
  const [form] = Form.useForm()

  const {
    tabData,
    activeKey,
    add,
    remove,
    onChange,
    requestStockData,
    loading,
  } = useTabData()

  return (
    <div className="main">
      <div className="">
        <Form
          form={form}
          name="advanced_search"
          className="ant-advanced-search-form"
        >
          <Row gutter={[16, 16]}>
            <Col span={6}>
              <Form.Item
                name="code"
                label="股票代码"
              >
                <Input placeholder="请输入股票代码" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name="date"
                label="日期"
                initialValue={[startDate, endDate]}
              >
                <RangePicker
                  picker="year"
                  disabled={[false, true]}
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Button
                type="primary"
                loading={loading}
                onClick={() => {
                  const scode = form.getFieldValue('code')
                  const date = form.getFieldValue('date')
                  if (scode && date[0] && date[1]) {
                    const sdate = date[0].format('YYYY') + '0101'
                    const edate = date[1].format('YYYY') + '1231'
                    requestStockData({
                      scode,
                      sdate,
                      edate,
                    }).then((data) => {
                      add(data)
                    }).catch(() => {
                      message.error('查询失败')
                    })
                  }
                }}
              >
                查询
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
      <div>
        <TabFinance
          tabData={tabData}
          activeKey={activeKey}
          onChange={onChange}
          remove={remove}
        />
      </div>
    </div>
  );
}

export default Main;
