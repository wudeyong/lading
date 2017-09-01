/**
 * Created by TeenTeam on 2017/8/31.
 */
export default {

  namespace: 'app',

  state: {
    user:{},
    permission:{
      visit:[]
    },
    menus:[
      {
        id:1,
        name:'概况',
        icon:'laptop',
        router:'/dashboard'
      }
    ],
  },

  subscriptions: {
    setup({ dispatch, history }) {

    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
