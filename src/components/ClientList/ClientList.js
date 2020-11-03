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
                    {clients?.map(client => (
                        <li>{client.name}</li>
                    ))}
                </ul>
            :
                <h3>No clients found</h3>
            }
        </div>
        
    );
}

export default ClientList;