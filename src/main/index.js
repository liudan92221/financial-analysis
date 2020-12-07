import { useState } from 'react';
import { Form, Input, DatePicker, Row, Col, Button, message } from 'antd';
import moment from 'moment';
import util from '../util/index'
import FinanceTable from '../component/FinanceTable'

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY';

const endDate = moment()
const startDate = moment(endDate.format('YYYY') - 5, dateFormat)

function Main() {
  const [form] = Form.useForm()
  const [dataSource, setDataSource] = useState(() => {
    return []
  })
  const [title, setTitle] = useState(() => {
    return ''
  })

  return (
    <div className="main">
      <div className="">
        <Form
          // labelCol={{
          //   span: 24,
          //   offset: 20,
          // }}
          form={form}
          name="advanced_search"
          className="ant-advanced-search-form"
          // onValuesChange={() => {
          //   console.log()
          // }}
        >
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <Form.Item
                name="code"
                label="股票代码"
              >
                <Input placeholder="请输入股票代码" />
              </Form.Item>
            </Col>
            <Col span={8}>
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
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <Button
                type="primary"
                onClick={() => {
                  const scode = form.getFieldValue('code')
                  const date = form.getFieldValue('date')
                  if (scode && date[0] && date[1]) {
                    const sdate = date[0].format('YYYY') + '0101'
                    const edate = date[1].format('YYYY') + '1231'
                    util.getToken().then((token) => {
                      util.getFinanceData({
                        scode,
                        sdate,
                        edate,
                        token
                      }).then((data) => {
                        const fData = util.dataFormat(data)
                        const item = fData[0] || {}
                        setTitle(item.SECNAME)
                        setDataSource(util.dataFormat(data))
                      }).catch(() => {
                        message.error('查询失败')
                      })
                    })
                  }
                }}
              >
                查询
              </Button>
              <Button
                type="primary"
                onClick={() => {
                  form.resetFields(['code', 'date'])
                }}
              >
                重置
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
      <div>
        <FinanceTable
          title={title}
          dataSource={dataSource}
        />
      </div>
    </div>
  );
}

export default Main;
