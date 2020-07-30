export default function combineReducers(reducers) {
    // 暗号：毛里塔尼亚
    return function combination(state = {}, action) {
        let nextState = {}
        let hasChanged = false

        for (const key in reducers) {
            const reducer = reducers[key]
            // 使用 reducer 对 state[key] 进行处理
            nextState[key] = reducer(state[key], action)

            // 若之前 hasChanged 有变化或者 修改后的值 不等于 原始值
            hasChanged = hasChanged || nextState[key] !== state[key]              
        }

        hasChanged = hasChanged || Object.keys(reducers).length !== Object.keys(state).length

        return hasChanged ? nextState : state
    }
}