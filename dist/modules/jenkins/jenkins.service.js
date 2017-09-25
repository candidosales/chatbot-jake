"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
require("./../shared/rxjs-operators");
const common_1 = require("@nestjs/common");
const jenkinsapi = require("jenkins-api");
let JenkinsService = class JenkinsService {
    constructor() {
        this.user = 'vcmais';
        this.token = '4aa39cf81e077f42f2c174073d890141';
        this.host = 'jenkins.vcmais.com:8080';
        this.jenkinsApi = jenkinsapi
            .init(`http://${this.user}:${this.token}@${this.host}`, {
            request: {
                strictSSL: false
            }
        });
    }
    getPlugins() {
        return this.callbackToObservable(this.jenkinsApi.all_installed_plugins);
    }
    getJobs() {
        return this.callbackToObservable(this.jenkinsApi.all_jobs);
    }
    getQueues() {
        return this.callbackToObservable(this.jenkinsApi.queue);
    }
    getViews() {
        return this.callbackToObservable(this.jenkinsApi.all_views);
    }
    callbackToObservable(func) {
        const callback = Observable_1.Observable.bindCallback(func, (err, response) => ({ err, response }));
        return callback()
            .map(({ err, response }) => {
            return response;
        });
    }
};
JenkinsService = __decorate([
    common_1.Component(),
    __metadata("design:paramtypes", [])
], JenkinsService);
exports.JenkinsService = JenkinsService;
//# sourceMappingURL=jenkins.service.js.map