import { useRef, useMemo, useCallback } from 'react'
import './index.less'

const style = {display: 'none'}
const fileType = {
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  json: 'application/JSON',
}
function ImportFile(props) {
  const nodeRef = useRef(null)
  const onClick = useCallback(() => {
    nodeRef.current.click()
  }, [nodeRef.current])

  const accept = useMemo(() => {
    let acceptStr = ''
    const accept = props.accept
    if (Array.isArray(accept)) {
      for (let item of accept) {
        if (fileType[item]) {
          acceptStr += `${fileType[item]},`
        } else {
          acceptStr += `${item},`
        }
      }
      acceptStr = acceptStr.slice(0, acceptStr.length - 1)
    } else {
      acceptStr = fileType[accept] || accept
    }
    return acceptStr
  }, [props.accept])

  const onChange = useCallback(() => {
    if (typeof props.onChange === 'function') {
      const fileNode = nodeRef.current
      const file = fileNode.files[0]
      props.onChange(file)
    }
  }, [props.onChange, nodeRef.current])

  return <span className="import-file" onClick={onClick}>
    <input
      className="file-input"
      accept={accept}
      ref={nodeRef}
      type="file"
      onChange={onChange}
      style={style}
    />
    {props.children}
  </span>
}

export default ImportFile
