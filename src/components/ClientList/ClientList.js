import React, { useEffect, useState } from 'react';
import styles from './ClientList.module.scss';
import classnames from 'classnames';
import MockBackend from '../../utils/MockBackend.js';

const ClientList = (props) => {
    const [clients, setClients] = useState(null);

    useEffect(() => {
        setClients(MockBackend.listClients)
    }, []);
    
    return (
        <div className={classnames(styles.ClientList)}>
            {clients ? 
                <ul className={classnames(styles.list)}>
                    <li className={classnames(styles.header, styles.item)}>
                        <div>Name</div>
                        <div>Email</div>
                        <div>First Name</div>
                        <div>Last Name</div>
                        <div>Age</div>
                        <div>Favorite Venues</div>
                    </li>
                    {clients.map(client => (
                        <li className={classnames(styles.item)}>
                            <div>{client.name}</div>
                            <div>{client.email}</div>
                            <div>{client.firstName}</div>
                            <div>{client.lastName}</div>
                            <div>{client.age}</div>
                            <div>Venues</div>
                        </li>
                    ))}
                </ul>
            :
                <h3>No clients found</h3>
            }
        </div>
        
    );
}

export default ClientList;