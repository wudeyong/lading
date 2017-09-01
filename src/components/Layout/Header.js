/**
 * Created by TeenTeam on 2017/8/31.
 */
import React from 'react'
import {Layout} from 'antd'

import styles from './Header.less'
import {config} from "../../utils"

const AntHeader=Layout.Header

function Header() {
  return(
    <div>
      <AntHeader className={styles.header} >
        <div>{config.name}</div>
      </AntHeader>
    </div>

  )
}

export default Header;
