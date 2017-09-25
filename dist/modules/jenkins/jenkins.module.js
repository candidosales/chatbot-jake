"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jenkins_service_1 = require("./jenkins.service");
const common_1 = require("@nestjs/common");
const jenkins_controller_1 = require("./jenkins.controller");
let JenkinsModule = class JenkinsModule {
};
JenkinsModule = __decorate([
    common_1.Module({
        controllers: [jenkins_controller_1.JenkinsController],
        components: [jenkins_service_1.JenkinsService]
    })
], JenkinsModule);
exports.JenkinsModule = JenkinsModule;
//# sourceMappingURL=jenkins.module.js.map