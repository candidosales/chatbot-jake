import { ChatJenkinsService } from './chat-jenkins.service';
import { JenkinsModule } from '../jenkins/jenkins.module';
import { Module } from '@nestjs/common';
import { JenkinsService } from '../jenkins/jenkins.service';

@Module({
    modules: [JenkinsModule],
    components: [ChatJenkinsService],
    exports: [ChatJenkinsService]
})
export class ChatJenkinsModule {}