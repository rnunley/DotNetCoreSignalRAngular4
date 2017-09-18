import { HubConnectionFactory } from './hubconnectionfactory.service';

describe('HubConnectionFactory', () => {
    it('should create HubConnection', (done) => {
        const hub = new HubConnectionFactory();

        hub.chatHubConnection().then((connection) => {
            expect(connection).toBeDefined();
            done();
        });
    });
});
