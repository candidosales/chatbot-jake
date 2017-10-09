import { HttpService } from '../http.service';
import { JenkinsController } from './jenkins.controller';
import { JenkinsService } from './jenkins.service';
import { Module } from '@nestjs/common';

@Module({
    controllers: [JenkinsController],
    components: [JenkinsService, HttpService],
    exports: [JenkinsService]
})
export class JenkinsModule {}