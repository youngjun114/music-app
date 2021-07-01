import styles from './app.module.css';
import Home from './components/home/home';
import Dashboard from './components/dashboard/dashboard';
import React from 'react';
// Every time accessing to the page, we want to get this url param 'code' from URL
const code = new URLSearchParams(window.location.search).get('code');

//
function App() {
  return (
    <div className={styles.app_page}>
      {code ? <Dashboard code={code} /> : <Home />}
    </div>
  );
}

export default App;
