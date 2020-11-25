import React from 'react';
import {HashRouter, Route, Switch , Router} from 'react-router-dom';
import './styles/App.css';

import Home from './pages/Home';
import Login from './pages/Login'
import Signup from './pages/Signup'
import AddPost from './pages/AddPost'
import DetailPost from './pages/DetailPost'
import UpdatePost from './pages/UpdatePost'
//import history from  './history'

function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
            <Route path={'/'} exact={true} component={Home} />
            <Route path={'/login'} component={Login} />
            <Route path={'/signup'} component={Signup} />
            <Route path={'/add-post'} component={AddPost}/>
            <Route path={'/detail-post'} component={DetailPost}/>
            <Route path={'/update-post'} component={UpdatePost} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
