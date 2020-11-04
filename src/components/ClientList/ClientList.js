import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styles from './ClientList.module.scss';
import classnames from 'classnames';
import { listClients } from '../../redux/api/api.actions';


const ClientList = (props) => {
    const clients = useSelector(state => state.api.clients);
    const [filtered, setFiltered] = useState([]);
    const dispatch = useDispatch();
    const listRef = useRef();

    useEffect(() => {
        dispatch(listClients());
    }, []);

    useEffect(() => {
        setFiltered(clients);
        animationList(clients.length);
    }, [clients])

    const animateClean = () => {
        return new Promise((resolve) => {
            const children = listRef.current.children;
            for(let i = 1; i < children.length; i++) {
                children[i].style.opacity = null;
                children[i].style.transition = '0.1s';
            }
            setTimeout(() => resolve(), 150)
        })
    }
    
    const animationList = (size) => {
        listRef.current.style.height = `${41.6*(size + 1)}px`;
        setTimeout(() => {
            const children = listRef.current.children;
            for(let i = 1; i < children.length; i++) {
                children[i].style.transition = null;
                children[i].style.opacity = '100%';
            }
        }, 400);
    }
    
    const onSearchChange = e => {
        const val = e.target.value;
        animateClean().then(() => {
            if(val) {
                const filtered = clients.filter((client) => client.age?.toString().startsWith(val))
                animationList(filtered.length)
                setFiltered(filtered);
            } else {
                setFiltered(clients);
                animationList(clients.length);
            } 
        });
    }

    return (
        <div className={classnames(styles.ClientList)}>
            <div>
                <input onChange={onSearchChange} className={classnames(styles.search)} placeholder={"Age Filter"}/>
            </div>
            {clients ? 
                <ul className={classnames(styles.list)} ref={listRef}>
                    <li className={classnames(styles.header, styles.item)}>
                        <div>Name</div>
                        <div>Email</div>
                        <div>First Name</div>
                        <div>Last Name</div>
                        <div>Age</div>
                        <div>Favorite Venues</div>
                    </li>
                    {filtered.map(client => (
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