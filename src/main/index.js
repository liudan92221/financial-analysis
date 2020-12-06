import { Form, Input, DatePicker, Row, Col } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

function paramFormat(param) {
  let str = '?'
  for (let k in param) {
    str += k + '=' + param[k] + '&'
  }
  return str.slice(0, str.length - 1)
}

const dateFormat = 'YYYY';

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
              <RangePicker
                picker="year"
                defaultValue={[moment('2015', dateFormat), moment('2020', dateFormat)]}
                disabled={[false, true]}
              />
            </Col>
          </Row>
        </Form>
      </div>
      <div onClick={() => {
        fetch(`http://webapi.cninfo.com.cn/api/stock/p_stock2300${paramFormat({
          scode: '000002',
          type: '071001',
          source: '033003',
          sdate: '20170101',
          edate: '20191231',
          access_token: ''
        })}`, {
          method: 'GET',
          // credentials: 'include',
          // mode: 'cors',
        }).then((data) => {
          return data.json()
        }).then((data) => {
          console.log(data)
        })
      }}>xxx</div>
    </div>
  );
}

export default Main;
