import { ChatJenkinsService } from '../chat-jenkins/chat-jenkins.service';
import { Observable } from 'rxjs/Observable';
import { Component } from '@nestjs/common';
import { JenkinsService } from '../jenkins/jenkins.service';

@Component()
export class ChatService {
    public response: string;

    public intentService = {
        // jenkins: this.buildResponseJenkins,
        google_cloud: this.buildResponseGoogleCloud()
    };
    
    private parameters: any = {};

    constructor(private readonly chatJenkinsService: ChatJenkinsService) {
    }

    public buildResponse(parameters): Observable<string> {        
        return this.chatJenkinsService.buildResponse(parameters);
        // return this.jenkinsService.getJobs()
        //             .map((response) => {
        //                 return this.prepareResponseJobStatus(JSON.parse(response))
        //             });
    }

    public prepareResponseJobStatus(response) {
        if (!response)
            return 'Não há jobs'

        if (response.length > 0) {
            let totalJobs = response.length;
            let nameJobs = [];
    
            for (const job of response) {
                nameJobs.push(job.name);
            }
    
            return `Existem ${totalJobs} jobs que são: ${nameJobs}`;
        }
    }

    public buildResponseGoogleCloud() {}
}