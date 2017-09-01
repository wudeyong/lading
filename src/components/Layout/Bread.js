/**
 * Created by TeenTeam on 2017/8/31.
 */
import React from 'react'
import {Link} from 'dva/router'
import {Breadcrumb} from 'antd'


function Bread({location}) {
  const locationArray=location.pathname.substring(1).split("/")
  console.log(locationArray)
  let breadTree=[]
  for(let item of locationArray){
    let i=1
    breadTree.push(
       <Breadcrumb.Item key={i++}>
         <Link to={`/${item}`} >
          {item}
        </Link>
      </Breadcrumb.Item>
    )
  }
  console.log(breadTree)
  return (
    <div>
      <span>当前位置：</span>
      <div style={{display:'inline-block'}}>
        <Breadcrumb>
          {breadTree}
        </Breadcrumb>
      </div>
    </div>

  )
}

export default Bread
