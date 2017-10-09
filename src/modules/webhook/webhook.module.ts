import { JenkinsService } from '../jenkins/jenkins.service';
import { JenkinsModule } from './../jenkins/jenkins.module';
import { ChatModule } from './../chat/chat.module';
import { Module } from '@nestjs/common';
import { WebhookController } from './webhook.controller';
import { ChatService } from '../chat/chat.service';
import { ChatJenkinsModule } from '../chat-jenkins/chat-jenkins.module';

@Module({
    modules: [ChatModule, ChatJenkinsModule],
    controllers: [WebhookController],
    components: [ChatService]
})
export class WebhookModule {}