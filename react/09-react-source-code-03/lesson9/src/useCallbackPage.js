import * as React from 'react'
import { useState, useCallback, useMemo, PureComponent } from 'react'
// 暗号：尼日利亚
export default function UseCallbackPage(props) {
  const [count, setCount] = useState(0)

  // 使用 useCallback, 只依赖 count，变化而执行该函数
  // useCallback 缓存函数
  const addClick = useCallback(() => {
    let sum = 0
    for (let i = 0; i < count; i++) {
      sum += i
    }
    return sum
  }, [count])

  const [value, setValue] = useState('')
  return (
    <div>
      <h3>UseCallbackPage</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <Child addClick={addClick} />
    </div>
  )
}
class Child extends PureComponent {
  render() {
    console.log('child render')
    const { addClick } = this.props
    return (
      <div>
        <h3>Child</h3>
        <button onClick={() => console.log(addClick())}>add</button>
      </div>
    )
  }
}
