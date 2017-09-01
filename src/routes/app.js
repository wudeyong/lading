/**
 * Created by TeenTeam on 2017/8/31.
 */

import React from 'react'
import {connect} from 'dva'
import {Layout} from 'antd'

import styles from './app.less'
import {Menu,Header,Footer,Bread} from '../components/Layout';

import {menusData} from '../utils/configData'


const Content=Layout.Content
const AntSider=Layout.Sider;

const testMenu=menusData


function App({children,dispatch,location,app}) {
  console.log('location in app:',location)
  console.log("routes/app.children",children);
  console.log("routes/app.app",app);
  const menusProps={
    menu:testMenu,
    location:location
  }
  return (
    <div style={{height:'100%'}}>
      <Layout style={{height:'100%'}}>
        <div className={styles.dividingLine}>
          <Header />
        </div>
        <Layout>
          <AntSider>
            <Menu {...menusProps } />
          </AntSider>
          <Content style={{marginLeft:20}} >
            <Bread  {...menusProps} />
            <div>
              {children}
            </div>
          </Content>
        </Layout>
        <Footer />
      </Layout>
    </div>
  )
}

export default connect(({app,loading})=>({app,loading}))(App) ;
