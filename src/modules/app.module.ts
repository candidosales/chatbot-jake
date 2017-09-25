import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { JenkinsController } from './jenkins/jenkins.controller';
import { Module, NestModule, MiddlewaresConsumer  } from '@nestjs/common';
import { JenkinsModule } from './jenkins/jenkins.module';

import './shared/rxjs-operators';

@Module({
    modules: [JenkinsModule]
})
export class ApplicationModule implements NestModule {
    configure(consumer: MiddlewaresConsumer): void {
        consumer.apply(LoggerMiddleware)
            .with('ApplicationModule')
            .forRoutes(JenkinsController);
    }
}