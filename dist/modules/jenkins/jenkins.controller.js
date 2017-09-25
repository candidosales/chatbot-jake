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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const jenkins_service_1 = require("./jenkins.service");
const common_1 = require("@nestjs/common");
let JenkinsController = class JenkinsController {
    constructor(jenkinsService) {
        this.jenkinsService = jenkinsService;
    }
    findJobs(res) {
        this.jenkinsService.getJobs()
            .subscribe((response) => {
            res.status(common_1.HttpStatus.OK).json(response);
        });
    }
    findPlugins(res) {
        this.jenkinsService.getPlugins()
            .subscribe((response) => {
            res.status(common_1.HttpStatus.OK).json(JSON.parse(response.body));
        });
    }
    findQueues(res) {
        this.jenkinsService.getQueues()
            .subscribe((response) => {
            res.status(common_1.HttpStatus.OK).json(response);
        });
    }
    findViews(res) {
        this.jenkinsService.getViews()
            .subscribe((response) => {
            res.status(common_1.HttpStatus.OK).json(response);
        });
    }
};
__decorate([
    common_1.Get('jobs'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], JenkinsController.prototype, "findJobs", null);
__decorate([
    common_1.Get('plugins'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], JenkinsController.prototype, "findPlugins", null);
__decorate([
    common_1.Get('queues'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], JenkinsController.prototype, "findQueues", null);
__decorate([
    common_1.Get('views'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], JenkinsController.prototype, "findViews", null);
JenkinsController = __decorate([
    common_1.Controller('jenkins'),
    __metadata("design:paramtypes", [jenkins_service_1.JenkinsService])
], JenkinsController);
exports.JenkinsController = JenkinsController;
//# sourceMappingURL=jenkins.controller.js.map