import { TEXT } from './const'

// 创建react element，并返回
function createElement(type, config, ...children) {
  if (config) {
    delete config.__self
    delete config.__source
  }
  // 这个地方我们自己写的没有考虑细节，比如key、ref等
  const props = {
    ...config,
    children: children.map((child) => (typeof child === 'object' ? child : createTextNode(child))),
  }
  //  暗号：喀麦隆
  if (type && type.defaultProps) {
    const defaultProps = type.defaultProps
    for (const prop in defaultProps) {
      // 没有传入，即使用默认属性
      if (props[prop] === undefined) {
        props[prop] = defaultProps[prop]
      }
    }
  }
  return {
    type,
    props,
  }
}

function createTextNode(text) {
  return {
    type: TEXT,
    props: {
      children: [],
      nodeValue: text,
    },
  }
}

export default {
  createElement,
}
