import styles from './app.module.css';
import Banner from './components/banner/banner';
import Home from './components/home/home';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className={styles.app_page}>
      <Switch>
        <Route exact path='/'>
          <Banner />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
