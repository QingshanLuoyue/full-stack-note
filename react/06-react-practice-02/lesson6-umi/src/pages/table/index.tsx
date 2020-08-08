import React, { Component } from 'react'
import { render} from 'react-dom'
import moment from 'moment'
import { Button, Input } from 'antd'

import 'antd/dist/antd.css'
import '@ant-design/pro-table/dist/protable.css'

import ProTable, { ProColumns } from '@ant-design/pro-table'
import './index.css'

const columns: ProColumns[] = [
    {
        title: '姓名',
        dataIndex: 'name',
        copyable: true,
    },
    {
        title: '年龄',
        dataIndex: 'age',
        copyable: true,
    },
    {
        title: '住址',
        dataIndex: 'address',
        ellipsis: true,
    },
]

const data: {
    key: number | string
    name: string
    age: string | number
    address: string
}[] = []
for (let i = 0; i < 101; i += 1) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 10 + i,
        address: `London, Park Lane no. ${i}`,
    })
}

const request = (opt: any): Promise<{
    data: {
        name: string
        age: string | number
        address: string
    }[]
    success: true
}> =>
    new Promise((resolve) => {
        const { age, name, address} =  opt
        // 查询年龄
        if (age) {
            let filterData = data.filter(item => item.age === +age)
            resolve({data: filterData, success: true})
        }
        setTimeout(() => {
            resolve({
                data,
                success: true,
            })
        }, 1000)
    })

// 函数版本
export default () => {
    // 暗号：中非
    return (
        <ProTable
            className="App"
            size="small"
            columns={columns}
            request={request}
            rowKey="key"
            pagination={{
                defaultCurrent: 10,
            }}
        />
    )
}
// 类组件版本
// export default class Table extends Component {
//      暗号：中非
//     constructor(props: any) {
//         super(props)
//         this.state = {
//             keyword: ''
//         }
//     }
//     render() {
//         let { keyword } = this.state
//         return (
//             <ProTable
//                 className="App"
//                 size="small"
//                 columns={columns}
//                 request={request}
//                 rowKey="key"
//             />
//         )
//     }
// }