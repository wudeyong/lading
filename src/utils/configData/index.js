/**
 * Created by TeenTeam on 2017/8/31.
 */


const menusData=[
  {
    id: '1',
    icon: 'laptop',
    name: '概况',
    route: '/dashboard',
  },
  {
    id: '2',
    name: '学生管理',
    icon: 'user',
    route: '/user',
  },
  {
    id:'21',
    bpid:'2',
    mpid:'2',
    name:'查看学生',
    icon:'setting',
    route:'/user/all'
  },
  {
    id:'22',
    bpid:'2',
    mpid:'2',
    name:'导入学生数据',
    icon:'setting',
    route:'/user/import'
  },
  {
    id: '3',
    name: '费用管理',
    icon: 'setting',
    route: '/manageFee',
  },
  {
    id:'31',
    bpid:'3',
    mpid:'3',
    name:'查看订单',
    icon:'setting',
    route:'/manageFee/all'
  },
  {
    id:'32',
    bpid:'3',
    mpid:'3',
    name:'对账管理',
    icon:'setting',
    route:'/manageFee/check'
  },
  {
    id:'33',
    bpid:'3',
    mpid:'3',
    name:'支付管理',
    icon:'setting',
    route:'/manageFee/payMethod'
  },
  {
    id:'4',
    bpid:'4',
    name:'管理员',
    icon:'setting',
    route:'/manager'
  },
  {
    id:'5',
    bpid:'5',
    name:'日志查询',
    icon:'setting',
    route:'/logger'
  },
  {
    id:'6',
    bpid:'6',
    name:'系统设置',
    icon:'setting',
    route:'/setting'
  },
  {
    id:'7',
    bpid:'7',
    name:'公告',
    icon:'setting',
    route:'/notice'
  }
]

module.exports={
  menusData:menusData
}
