import { Injectable } from '@angular/core';
import { HubConnection } from '@aspnet/signalr-client';

@Injectable()
export class HubConnectionFactory {
    // private baseUrl = 'http://api/';
    private baseUrl = 'http://localhost:5000/';

    public chatHubConnection(): Promise<HubConnection> {
        return new Promise((resolve, reject) => {
            try {
                resolve(new  HubConnection(this.baseUrl + 'chat'));
            } catch (error) {
                reject(error.message);
            }
        });
    }
}
