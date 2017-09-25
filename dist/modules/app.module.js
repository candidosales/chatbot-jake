"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_middleware_1 = require("./common/middlewares/logger.middleware");
const jenkins_controller_1 = require("./jenkins/jenkins.controller");
const common_1 = require("@nestjs/common");
const jenkins_module_1 = require("./jenkins/jenkins.module");
require("./shared/rxjs-operators");
let ApplicationModule = class ApplicationModule {
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware)
            .with('ApplicationModule')
            .forRoutes(jenkins_controller_1.JenkinsController);
    }
};
ApplicationModule = __decorate([
    common_1.Module({
        modules: [jenkins_module_1.JenkinsModule]
    })
], ApplicationModule);
exports.ApplicationModule = ApplicationModule;
//# sourceMappingURL=app.module.js.map