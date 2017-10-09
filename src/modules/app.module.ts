import { CacheModule } from './cache/cache.module';
import { JenkinsController } from './jenkins/jenkins.controller';
import { JenkinsModule } from './jenkins/jenkins.module';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { MiddlewaresConsumer, Module, NestModule } from '@nestjs/common';
import { WebhookModule } from './webhook/webhook.module';
import './shared/rxjs-operators';


@Module({
    modules: [JenkinsModule, CacheModule, WebhookModule]
})
export class ApplicationModule implements NestModule {
    configure(consumer: MiddlewaresConsumer): void {
        consumer.apply(LoggerMiddleware)
            .with('ApplicationModule')
            .forRoutes(JenkinsController)
    }
}