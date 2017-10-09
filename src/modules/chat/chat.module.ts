import { ChatService } from './chat.service';
import { JenkinsModule } from '../jenkins/jenkins.module';
import { Module } from '@nestjs/common';
import { ChatJenkinsModule } from '../chat-jenkins/chat-jenkins.module';

@Module({
    modules: [JenkinsModule, ChatJenkinsModule],
    components: [ChatService]
})
export class ChatModule {}