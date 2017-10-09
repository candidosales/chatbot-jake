import * as jenkinsapi from 'jenkins-api';
import { Component } from '@nestjs/common';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs/Observable';
import './../shared/rxjs-operators';


@Component()
export class JenkinsService {

    public jenkinsApi;
    public user = 'vcmais';
    public token = '4aa39cf81e077f42f2c174073d890141';
    public host = 'jenkins.vcmais.com:8080';
    
    constructor(
        private httpService: HttpService
    ) {
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
        // return this.callbackToObservable(this.jenkinsApi.all_jobs);
        return this.httpService.get('http://www.mocky.io/v2/59daa1350f0000740002a552');
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
