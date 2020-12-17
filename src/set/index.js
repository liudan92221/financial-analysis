import { useCallback } from 'react';
import { Form, Input, Row, Col, Button, message } from 'antd';
import util from '../util/index'
import './index.less'

function Set() {
  const [form] = Form.useForm()

  const onSet = useCallback(() => {
    const client_id = form.getFieldValue('client_id')
    const client_secret = form.getFieldValue('client_secret')
    if (client_id && client_secret) {
      util.setKey(client_id, client_secret).then(() => {
        message.success('设置Access Key和Access Secret成功！')
      })
    }
  }, [form])

  return (
    <div className="set-main">
      <Form
        form={form}
        name="advanced_search"
        className="ant-advanced-search-form"
      >
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Form.Item
              name="client_id"
              label="Access Key"
            >
              <Input placeholder="请输入Access Key" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="client_secret"
              label="Access Secret"
            >
              <Input placeholder="请输入Access Secret" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Button
              type="primary"
              onClick={onSet}
            >
              设置
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Set;
