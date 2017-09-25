import { JenkinsService } from './jenkins.service';
import { Module } from '@nestjs/common';
import { JenkinsController } from './jenkins.controller';

@Module({
    controllers: [JenkinsController],
    components: [JenkinsService]
})
export class JenkinsModule {}