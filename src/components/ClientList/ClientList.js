import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styles from './ClientList.module.scss';
import classnames from 'classnames';
import { listClients } from '../../redux/api/api.actions';


const ClientList = (props) => {
    const clients = useSelector(state => state.clients);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listClients());
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
                            <div>
                                {client.favoriteVenues.length ? 
                                    client.favoriteVenues.reduce((acc, curr, index) => {
                                        if(index != client.favoriteVenues.length -1)
                                            return acc + curr.name + ', ';
                                        else 
                                            return acc + curr.name;
                                    }, '')        
                                :                        
                                    'No Venues'
                                }
                            </div>
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