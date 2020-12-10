import { Form, Input, DatePicker, Row, Col, Button, message } from 'antd';
import moment from 'moment';
import util, { useGetFinanceData } from '../util/index'
import TabFinance, { useTabData } from '../component/TabFinance'
import './index.less'

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY';

const endDate = moment()
const startDate = moment(endDate.format('YYYY') - 5, dateFormat)

function Main() {
  const [form] = Form.useForm()

  const {
    getFinanceData,
    loading,
  } = useGetFinanceData()

  const {
    tabData,
    activeKey,
    add,
    remove,
    onChange,
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
                    getFinanceData({
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
            <Col span={6}>
              <Button
                type="primary"
                onClick={() => {
                  util.downPageImg(document.getElementById('data-canvas'))
                }}
              >
                下载
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
      <div id="data-canvas">
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
