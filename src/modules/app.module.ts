import { Module } from '@nestjs/common';
import { JenkinsController } from './controllers/jenkins.controller';
import { JenkinsService } from './components/jenkins.service';

@Module({
    modules: [],
    controllers: [JenkinsController],
    components: [JenkinsService],
})
export class ApplicationModule {}