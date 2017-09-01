/**
 * Created by TeenTeam on 2017/8/31.
 */
import React from 'react'
// import {Table} from 'antd'
import UserTable from './UserTable'

import Filter from './Filter'

function User() {


  return (
    <div>
      <Filter />
      <UserTable />
    </div>
  )
}

export default User
