import { Observable } from 'rxjs/Observable';
import { Component } from '@nestjs/common';
import * as jenkinsapi from './../../../node_modules/jenkins-api';

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

    findAll() {
        // return this.cats;
    }

    async getPlugins(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.jenkinsApi.all_installed_plugins((err, result) => {
                if (err) reject(err);
                else resolve(result);
              });
          });
    }
}
