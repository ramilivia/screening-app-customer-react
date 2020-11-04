import MockBackend from './MockBackend';

const ApiParser = {
    getClientsWithVenue: () => {
        let list = MockBackend.listClients();
        list.forEach((client) => {
            client.favoriteVenues = MockBackend.getClientFavoriteVenues(client.id);
        });
        return list;
    }
}

export default ApiParser