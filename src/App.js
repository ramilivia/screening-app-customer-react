import React from 'react';
import ClientList from './components/ClientList/ClientList';
import classnames from 'classnames';
import styles from './App.module.scss';
import logo from './assets/home-logo.png'



const App = () => {
    return (
        <div className={classnames(styles.App)}>
            <div className={classnames(styles.logoContainer)}>
                <img src={logo}/>
            </div>
            <ClientList/>
        </div>
    );
}

export default App;
