import * as request from 'request-promise-native';
import { Component } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';

@Component()
export class HttpService {

    public request;

    constructor() {
        this.request = request;
    }

    get(url: string): Observable<any> {
        return this.promiseToObservable(this.request(url));
    }

    promiseToObservable(func: any): Observable<any> {
        return Observable.fromPromise(func);
    }
}