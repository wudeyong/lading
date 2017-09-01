/**
 * Created by TeenTeam on 2017/8/31.
 */

import React from 'react'
import { Link } from 'dva/router'
import lodash from 'lodash'
import { Menu,Icon,Layout } from 'antd'

import styles from './MyMenu.less'

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;


function MyMenu({menu,location}) {
  // console.log('location',location)
  //console.log('menu',menu)
  // 去除mpid=-1的
  const menus=menu.filter((item)=>item.mpid!=='-1')
  const treeMenu=arrayToTree(menus,'id','mpid','children')
  const levelMenus={}

  const pathName=location.pathname;
  let selectKeys=[];

  for(let item of menu){
    if(item.route===pathName){
      selectKeys[0]=item.id
    }
  }
  //console.log('selectKeys',selectKeys)


  //console.log('pathName:',pathName)
  //console.log('treeMenu:',treeMenu)
  const getMenus=(treeMenuN)=>{
    return treeMenuN.map((item)=>{
      if (item.children){
        if (item.mpid){
          levelMenus[item.id]=item.mpid
        }
        return (
          <SubMenu
            key={item.id}
            title={<span>{item.icon && <Icon type={item.icon} />}{item.name} </span>}
          >
            {getMenus(item.children)}
          </SubMenu>
        )
      }
      return (
        <MenuItem
          key={item.id}
        >
          <Link to={item.route}>
            {<span>{item.icon && <Icon type={item.icon} />}{item.name} </span>}
          </Link>
        </MenuItem>
      )
    })
  }

  const menuItem=getMenus(treeMenu)

  return (
    <div>
      <Menu
        mode="inline"
        theme="dark"
        selectedKeys={selectKeys}
      >
        {menuItem}
      </Menu>
    </div>


  )
}

function arrayToTree(menus, id = 'id', pid = 'pid', children = 'children') {
  let data=lodash.cloneDeep(menus)
  let hash={}
  let result=[]

  data.forEach((item,index)=>{
    hash[data[index][id]]=data[index]
  })

  data.forEach((item)=>{
    let haveVp=hash[item[pid]]
    if(haveVp){
      //如果haveVp已经存在children节点，则不会新建节点
      !haveVp[children]&&(haveVp[children]=[])
      haveVp[children].push(item)
    }else
      result.push(item)
  })
  return result;

}

export default MyMenu
