import React from 'react';
import ClientList from './components/ClientList/ClientList';
import styles from './App.scss';
import classnames from 'classnames';


const App = () => {
    return (
        <div className={classnames(styles.App)}>
            <h1>Clients</h1>
            <ClientList/>
        </div>
    );
}

export default App;
