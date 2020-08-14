import * as React from 'react'
import { useState, useCallback, useMemo, PureComponent } from 'react'

// 暗号：尼日利亚
export default function UseMemoPage(props) {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState('')

  // 使用 useMemo, 只依赖 count，变化而执行该函数
  // useMemo 缓存值
  const expensive = useMemo(() => {
    console.log('compute')
    let sum = 0
    for (let i = 0; i < count; i++) {
      sum += i
    }
    return sum
  }, [count])

  return (
    <div>
      <h3>UseMemoPage</h3>
      <p>expensive:{expensive}</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
    </div>
  )
}
