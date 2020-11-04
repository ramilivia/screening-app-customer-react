import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addClient } from '../../redux/api/api.actions';
import { toggleModalClient } from '../../redux/screen/screen.actions';
import Modal from '../Modal/Modal';
import styles from './ModalClient.module.scss';
import classnames from 'classnames';
import Field from '../Field/Field';


const ModalClient = () => {
    const dispatch = useDispatch();
    const show = useSelector(state => state.screen.showModalClient);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [age, setAge] = useState(null);
    const [venues, setVenues] = useState(null);

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangeFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const onChangeLastName = (e) => {
        setLastName(e.target.value);
    }

    const onChangeAge = (e) => {
        setAge(e.target.value);
    }

    const onSend = () => {
        console.log('NAME: ', name);
        console.log('EMAIL: ', email);
        console.log('FIRST NAME: ', firstName);
        console.log('LAST NAME: ', lastName);
        console.log('AGE: ', age);
        let favoriteVenues = [];
        dispatch(addClient({name, email, firstName, lastName, age, favoriteVenues}));
    }

    const closeModal = () => {
        dispatch(toggleModalClient())
    }

    return (
        <Modal show={show} title={'New Client'} className={styles.ModalClient} onClose={closeModal}>
            <form className={classnames(styles.ModalClient)}>
                <Field label='Name' onChange={onChangeName} value={name}/>
                <Field label='Email' onChange={onChangeEmail} value={email}/>
                <Field label='First Name' onChange={onChangeFirstName} value={firstName}/>
                <Field label='Last Name' onChange={onChangeLastName} value={lastName}/>
                <Field label='Age' onChange={onChangeAge} value={age}/>
                <Field label='Venues'/>
            </form>
            <div onClick={onSend}>
                SEND
            </div>
        </Modal>
    );
}

export default ModalClient;