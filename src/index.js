import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import PostsIndex from './components/post_index'
import reducers from './reducers';
import promise from 'redux-promise'
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
import PostNew from './components/post_new';
import PostShow from './components/post_show'

const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostNew}/>
          <Route path="/posts/:id" component={PostShow}/>
          <Route path="/" component={PostsIndex}/>

        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
