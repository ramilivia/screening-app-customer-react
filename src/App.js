import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleModalClient } from './redux/screen/screen.actions';
import classnames from 'classnames';
import styles from './App.module.scss';
import logo from './assets/home-logo.png'
import ClientList from './components/ClientList/ClientList';
import ModalClient from './components/ModalClient/ModalClient';
import Button from './components/Button/Button';

const App = () => {
    const dispatch = useDispatch();

    const showClientModal = () => {
        dispatch(toggleModalClient());
    };
    
    return (
        <div className={classnames(styles.App)}>
            <div className={classnames(styles.content)}>
                <div className={classnames(styles.logoContainer)}>
                    <img src={logo}/>
                </div>
                <Button onClick={showClientModal} text='Add New Client'/>
                <ClientList/>
            </div>
            <ModalClient/>
        </div>
    );
}

export default App;
