import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Rank from './Rank';
import CharacterProfile from './CharacterProfile';
import RealmStatus from './RealmStatus';
import Pet from './Pet';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/Rank' component={Rank} />
      <Route path='/Character' component={CharacterProfile} />
      <Route path='/RealmStatus' component={RealmStatus} />
      <Route path='/Pets' component={Pet} />
    </Switch>
  </main>
)

export default Main;
