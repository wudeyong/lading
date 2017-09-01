/**
 * Created by TeenTeam on 2017/8/31.
 */

import React from 'react'
import {Row,Col,Select} from 'antd'
import CardView from './CardView'

// import styles from 'index.less'



const cardData= {
  today:[
    {
      name:'总收入',
      data:'1231231元'
    },{
      name:'待支付',
      data:'3111元'
    },{
      name:'订单数',
      data:'112笔'
    },
  ],
  all:[
    {
      name:'总收入',
      data:'1231231元'
    },{
      name:'待支付',
      data:'3111元'
    },{
      name:'总订单',
      data:'112笔'
    },
    {
      name:'待收入',
      data:'55656元'
    },
  ],
  statistic:[
    {
      name:'总人数',
      data:'8881人'
    },{
      name:'未支付',
      data:'3111人'
    },{
      name:'待支付',
      data:'5001人'
    },
    {
      name:'待创建',
      data:'556人'
    },
  ],
}


function Dashboard() {

  return(
    <div style={{paddingTop:30}}>
      <div style={{fontSize:18}}>
        <div style={{display:'inline-block'}}>
          <span style={{fontWeight:600}}>支付年度：</span>
        </div>
        <div style={{display:'inline-block'}}>
          <Select defaultValue="2017" style={{ width: 120 }}>
            <Select.Option value="2017">2017</Select.Option>
            <Select.Option value="2016">2016</Select.Option>
            <Select.Option value="2015">2015</Select.Option>
          </Select>
        </div>
      </div>

      <div style={{paddingTop:20}}>
        <h2>今日收入</h2>
      </div>
      <div>
        <Row>
          <Col span={6}>
            <CardView data={cardData.today[0]} />
          </Col>
          <Col span={2}/>
          <Col span={6}>
            <CardView  data={cardData.today[1]}/>
          </Col>
          <Col span={2}/>
          <Col span={6}>
            <CardView  data={cardData.today[2]} />
          </Col>
        </Row>
      </div>
      <div style={{paddingTop:20}}>
        <h2>总收入</h2>
      </div>
      <div>
        <Row>
          <Col span={4}>
            <CardView  data={cardData.all[0]} />
          </Col>
          <Col span={2}/>
          <Col span={4}>
            <CardView  data={cardData.all[1]} />
          </Col>
          <Col span={2}/>
          <Col span={4}>
            <CardView  data={cardData.all[2]} />
          </Col>
          <Col span={2}/>
          <Col span={4}>
            <CardView  data={cardData.all[3]}/>
          </Col>
        </Row>
      </div>

      <div style={{paddingTop:20}}>
        <h2>人数统计</h2>
      </div>
      <div>
        <Row>
          <Col span={4}>
            <CardView  data={cardData.statistic[0]} />
          </Col>
          <Col span={2}/>
          <Col span={4}>
            <CardView data={cardData.statistic[1]}  />
          </Col>
          <Col span={2}/>
          <Col span={4}>
            <CardView data={cardData.statistic[2]}  />
          </Col>
          <Col span={2}/>
          <Col span={4}>
            <CardView data={cardData.statistic[3]} />
          </Col>
        </Row>
      </div>


    </div>
  )
}

export default Dashboard;
