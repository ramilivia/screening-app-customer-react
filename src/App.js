import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showModal } from './redux/screen/screen.actions';
import classnames from 'classnames';
import styles from './App.module.scss';
import logo from './assets/home-logo.png'
import ClientList from './components/ClientList/ClientList';
import Modal from './components/Modal/Modal';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(showModal());
    }, [])
    
    return (
        <div className={classnames(styles.App)}>
            <div className={classnames(styles.logoContainer)}>
                <img src={logo}/>
            </div>
            <Modal/>
            <ClientList/>
        </div>
    );
}

export default App;
