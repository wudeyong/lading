/**
 * Created by TeenTeam on 2017/9/1.
 */
import React from 'react'
import {Table} from 'antd'

function UserTable({dataSource}) {


  const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '身份证号',
    dataIndex: 'idNum',
    key: 'idNum',
  }, {
    title: '考点',
    dataIndex: 'examPlace',
    key: 'examPlace',
  }, {
    title: '费用',
    dataIndex: 'fee',
    key: 'fee',
  }, {
    title: '考点位置',
    dataIndex: 'examLocation',
    key: 'examLocation',
  }, {
    title: '是否支付',
    dataIndex: 'isPay',
    key: 'isPay',
  }, {
    title: '支付中',
    dataIndex: 'payer',
    key: 'payer',
  }, {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
  }];


  return (
    <Table
      columns={columns}
    />
  )
}

export default UserTable;
