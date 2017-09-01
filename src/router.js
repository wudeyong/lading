import React from 'react'
import { Router } from 'dva/router'
import PropTypes from 'prop-types'
import App from './routes/app'


const registerModel = (app, model) => {
  if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
    app.model(model)
  }
  console.log('app',app)
}

const Routers=function ({app,history}) {
  const routers=[
    {
      path:'/',
      components:App,
      getIndexRoute(nextState,cb){
        require.ensure([],(require)=>{
          registerModel(app, require('./models/app'))
          cb(null, { component: require('./routes/dashboard') })
        },'dashboard')
      },
      childRoutes:[
        {
          path: 'dashboard',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/app'))
              cb(null, require('./routes/dashboard'))
            }, 'dashboard')
          },
        },
        {
          path: 'user/all',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/user'))
              cb(null, require('./routes/user'))
            }, 'user')
          },
        }, {
          path: 'user/all:id',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/app'))
              cb(null, require('./routes/user'))
            }, 'user-detail')
          },
        },{
          path: 'user/import',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/app'))
              cb(null, require('./routes/user'))
            }, 'user-detail')
          },
        },{
          path: 'manageFee/all',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/app'))
              cb(null, require('./routes/user'))
            }, 'user-detail')
          },
        },{
          path: 'manageFee/check',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/app'))
              cb(null, require('./routes/user'))
            }, 'user-detail')
          },
        },{
          path: 'manageFee/payMethod',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/app'))
              cb(null, require('./routes/user'))
            }, 'user-detail')
          },
        },{
          path: 'manager',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/app'))
              cb(null, require('./routes/user'))
            }, 'user-detail')
          },
        },{
          path: 'logger',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/app'))
              cb(null, require('./routes/user'))
            }, 'user-detail')
          },
        },{
          path: 'setting',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/app'))
              cb(null, require('./routes/user'))
            }, 'user-detail')
          },
        },{
          path: 'notice',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/app'))
              cb(null, require('./routes/user'))
            }, 'user-detail')
          },
        },
      ]
    }

  ]
  return <Router routes={routers} history={history} />
}
Routers.prototypes={
  history:PropTypes.object,
  app:PropTypes.object
}

export default Routers;
