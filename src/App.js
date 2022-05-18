import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login }>
          <Login />
        </Route>
        <Route exact path="/search" component={ Search }>
          <Search />
        </Route>
        <Route exact path="/album/:id" component={ Album }>
          <Album />
        </Route>
        <Route exact path="/favorites" component={ Favorites }>
          <Favorites />
        </Route>
        <Route exact path="/profile" component={ Profile }>
          <Profile />
        </Route>
        <Route exact path="/profile/edit" component={ ProfileEdit }>
          <ProfileEdit />
        </Route>
        <Route exact path="*" component={ NotFound }>
          <NotFound />
        </Route>
      </Switch>
    );
  }
}

export default App;
