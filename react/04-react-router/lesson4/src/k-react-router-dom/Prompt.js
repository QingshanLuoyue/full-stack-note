import React, { Component } from 'react'
import { RouterContext } from './Context'

export default function Prompt({ message, when = false }) {
  return (
    <RouterContext.Consumer>
      {(context) => {
        if (!when) {
          return null
        }
        let method = context.history.block
        // console.log('method :>> ', method);
        return (
          <LifeCycle
            onMount={(self) => {
              self.release = method(message)
            }}
            onUpdate={(self, prevProps) => {
              if (prevProps.message !== message) {
                self.release()
                self.release = method(message)
              }
            }}
            onUnMount={(self) => {
              self.release()
            }}
            message={message}
          />
        )
      }}
    </RouterContext.Consumer>
  )
}


class LifeCycle extends Component {
  componentDidMount() {
    if (this.props.onMount) {
      this.props.onMount.call(this, this)
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.onUpdate) {
      this.props.onUpdate.call(this, this, prevProps)
    }
  }
  componentWillUnmount() {
    if (this.props.onUnMount) {
      this.props.onUnMount.call(this, this)
    }
  }
  render() {
    return null
  }
}
