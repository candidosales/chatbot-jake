import { Observable } from 'rxjs/Observable';
import './../shared/rxjs-operators';

import { Component } from '@nestjs/common';
import * as jenkinsapi from 'jenkins-api';

@Component()
export class JenkinsService {

    public jenkinsApi;
    public user = 'vcmais';
    public token = '4aa39cf81e077f42f2c174073d890141';
    public host = 'jenkins.vcmais.com:8080';
    
    constructor() {
        this.jenkinsApi = jenkinsapi
                            .init(`http://${this.user}:${this.token}@${this.host}`, {
                                request: {
                                    strictSSL: false
                                }
                            });
    }

    getPlugins(): Observable<any> {
        return this.callbackToObservable(this.jenkinsApi.all_installed_plugins);
    }

    getJobs(): Observable<any> {
        return this.callbackToObservable(this.jenkinsApi.all_jobs);
    }

    getQueues(): Observable<any> {
        return this.callbackToObservable(this.jenkinsApi.queue);
    }

    getViews(): Observable<any> {
        return this.callbackToObservable(this.jenkinsApi.all_views);
    }

    callbackToObservable(func: any): Observable<any> {
        const callback = Observable.bindCallback(func,
            (err, response) => ({ err, response }));

            return callback()
                .map(({err, response}) => {
                return response;
                });
    }
}
