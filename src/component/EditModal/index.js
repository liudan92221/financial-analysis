import { Modal, Form, Input } from 'antd';
import { nameMap, fKeyArr, pKeyArr, cKeyArr, keyMap } from '../../util/config'
import './index.less'
import { useCallback, useEffect } from 'react';

const map = {
  f: keyMap.fKeyMap,
  p: keyMap.pKeyMap,
  c: keyMap.cKeyMap,
}
const arrMap = {
  f: fKeyArr,
  p: pKeyArr,
  c: cKeyArr,
}

const formItemLayout = {
  labelCol: { span: 12 },
  wrapperCol: { span: 8 },
};

function EditModal(props) {
  const [form] = Form.useForm()
  const type = props.type
  const kArr = arrMap[type] || {}
  const kMap = map[type] || {}
  const record = props.record || null
  let title = nameMap[type]
  const fields = []
  if (record) {
    const endDate = record.ENDDATE
    title = `${title}(${endDate})`
    for (let item of kArr) {
      const key = item.keywordName
      fields.push({
        name: key,
        value: record[key] || null
      })
    }
  }

  let okText = '确定'
  let isEdit = false
  if (props.ctrlType === 'edit') {
    okText = '保存'
    isEdit = true
  }
  const onOk = useCallback(() => {
    if (isEdit) {
      if (typeof props.onSave === 'function') {
        const data = form.getFieldsValue()
        props.onSave({
          type: props.type,
          record: data,
          index: props.index
        })
      }
    } else {
      if (typeof props.onOk === 'function') {
        props.onOk()
      }
    }
  }, [isEdit, props.onOk, props.type, props.index, form])

  useEffect(() => {
    if (props.visible) {
      form.resetFields()
    }
  }, [props.visible, form])

  return <Modal
    className="edit-modal"
    width={800}
    title={title}
    visible={props.visible}
    okText={okText}
    cancelText="取消"
    onOk={onOk}
    onCancel={props.onCancel}
  >
    <Form
      {...formItemLayout}
      form={form}
      name={title}
      initialValues={record}
    >
      {fields.map((item) => {
        const name = item.name
        const field = kMap[name]
        if (field) {
          const dataType = field.dataType
          const isDecimal = !!dataType.match(/^decimal/ig)
          return <Form.Item
            name={name}
            label={field.alias}
          >
            <Input
              disabled={!isEdit || !isDecimal}
              addonAfter={isDecimal ? 'RMB' : ''}
            />
          </Form.Item>
        }
      })}
    </Form>
  </Modal>
}

export default EditModal
