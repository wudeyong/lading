/**
 * Created by TeenTeam on 2017/9/1.
 */
import {request} from '../utils/AxiosRequest'


function getUsers(options){
  return request(options);
}

module.exports={
  getUsers,
}
