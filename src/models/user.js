/**
 * Created by TeenTeam on 2017/9/1.
 */

import {getUsers} from '../services/user'

export default {

  namespace: 'user',

  state: {
    users:{},
  },

  subscriptions: {
    setup({ dispatch, history }) {
      dispatch({type:'fetch',payload:'query'})
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      const options={
        url:'http://www.big-byte.cn/user/users',
        method:'get'
      }
      const result=yield call(getUsers,options)
      console.log('result',result)
    },
  },

  reducers: {

  },

};
