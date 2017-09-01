/**
 * Created by TeenTeam on 2017/9/1.
 */

import axios from 'axios'

function request(options) {
  if (options.method.toLowerCase()==='get'){
    let result=axios.get(options.url)
    // return
    result.then((response)=>{
      console.log("response",response)
      return {
        data:response.data
      }
    }).catch((error)=>{
      console.log("error",error)
      return {
        error:error.message
      }
    })
  }
}

function fetch() {

}

module.exports={
  request,
}
