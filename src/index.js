import dva from 'dva';
import createLoading from 'dva-loading';
import {message} from 'antd'
// import browserHistory from 'dva/router'
import './index.css';

// 1. Initialize
const app = dva({
  ...createLoading({
    effects:true
  }),
  // history: browserHistory,
  onError(error){
    message.info(error)
  }
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
