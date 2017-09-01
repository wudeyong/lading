/**
 * Created by TeenTeam on 2017/8/31.
 */

import React from 'react'
import {Card} from 'antd'



function CardView({data}) {
  const handleClick=(e)=>{
    console.log('e:',e)
    alert(e)
  }
  return (
    <div  style={{textAlign:'center'}}>
      <Card title={data.name}>
        <div style={{fontSize:20}} onClick={handleClick}>{data.data}</div>
      </Card>
    </div>


  )
}

export default CardView
