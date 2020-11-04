import { LIST_CLIENTS } from './api.types';
import ApiParser from '../../utils/ApiParser';

export const listClients = () => {
    return {
        type: LIST_CLIENTS,
        payload: ApiParser.getClientsWithVenue()
    }
}