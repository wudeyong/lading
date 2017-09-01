/**
 * Created by TeenTeam on 2017/9/1.
 */
import React from 'react'
import {Input,Button,Select,Col,Row} from 'antd'

import styles from './Filter.less'

const Option=Select.Option
function Filter() {
  return(
    <div className={styles.filterStyle}>
        <div style={{paddingBottom:25,paddingTop:25}}>
          <span style={{fontWeight:700,paddingRight:20}} >筛选</span>
          <span style={{fontWeight:700,paddingRight:20}} >年度:</span>

          <Select defaultValue='2017' style={{width:100}}>
            <Option value='2017'>2017</Option>
            <Option value='2016'>2016</Option>
            <Option value='2015'>2015</Option>
          </Select>

          <span  style={{paddingLeft:20,fontWeight:700,paddingRight:20}} >支付状态</span>
          <Select defaultValue='全部'  style={{width:100}}>
            <Option value='全部'>全部</Option>
            <Option value='已支付'>已支付</Option>
            <Option value='未支付'>未支付</Option>
          </Select>
        </div>
      <div style={{paddingBottom:25}}>
        <Row>
          <Col span={4}>
            <span style={{fontWeight:700,paddingRight:20}} >查找：</span>
            <span>姓名</span>
            <Input style={{width:'60%'}} />
          </Col>
          <Col span={1}/>
          <Col span={4}>
            <span>考号</span>
            <Input style={{width:'80%'}} />
          </Col>
          <Col span={1}/>
          <Col span={6}>
            <span>身份证号</span>
            <Input style={{width:'70%'}}/>
          </Col>
          <Col span={3}>
            <Button type='primary'>查找</Button>
          </Col>
        </Row>
      </div>

    </div>
  );
}

export default Filter;
