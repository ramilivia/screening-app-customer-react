import { LIST_CLIENTS, ADD_CLIENT } from './api.types';
import ApiParser from '../../utils/ApiParser';
import MockBackend from '../../utils/MockBackend';

export const listClients = () => {
    return {
        type: LIST_CLIENTS,
        payload: ApiParser.getClientsWithVenue()
    }
}

export const addClient = (client) => {
    MockBackend.addClient(client);
    return {
        type: ADD_CLIENT
    }
}