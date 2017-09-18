import { async, TestBed } from '@angular/core/testing';
import { HubConnection } from '@aspnet/signalr-client';
import { HubConnectionFactory } from '../HubConnectionFactory/hubconnectionfactory.service';
import * as TypeMoq from 'typemoq';

describe('chat service', () => {
    beforeEach(async(() => {
        const mockFactory = TypeMoq.Mock.ofType<HubConnectionFactory>();
        const mockHubConnection = TypeMoq.Mock.ofType(HubConnection);
    }));

    it('should fire callback when message recieved', (done) => {
        // TODO: Implement this test.
        done();
    });
});
