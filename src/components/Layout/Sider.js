/**
 * Created by TeenTeam on 2017/8/31.
 */
import React from 'react'
import {Layout} from 'antd'

import MyMenu from './MyMenu'

const AntSider=Layout.Sider


function Sider() {
  return(
    <div>
      <AntSider>
        <MyMenu/>
      </AntSider>
    </div>
  )
}
export default Sider
