import { Form, Input, DatePicker, Row, Col, Button } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

function paramFormat(param) {
  let str = '?'
  for (let k in param) {
    str += k + '=' + param[k] + '&'
  }
  return str.slice(0, str.length - 1)
}

function getData({
  scode,
  sdate,
  edate
}) {
  return fetch(`http://webapi.cninfo.com.cn/api/stock/p_stock2300${paramFormat({
    scode: scode,
    type: '071001',
    source: '033003',
    sdate: sdate,
    edate: edate,
    access_token: ''
  })}`, {
    method: 'GET',
    // credentials: 'include',
    // mode: 'cors',
  }).then((data) => {
    return data.json()
  }).then((data) => {
    return data
  })
}

const dateFormat = 'YYYY';

const endDate = moment()
const startDate = moment(endDate.format('YYYY') - 5, dateFormat)

function Main() {
  const [form] = Form.useForm()
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
                    getData({
                      scode,
                      sdate,
                      edate
                    }).then((data) => {
                      console.log(data)
                    })
                  }
                }}
              >
                资产负债表分析
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
    </div>
  );
}

export default Main;
