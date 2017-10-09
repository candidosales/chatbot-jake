import { Subscription } from 'rxjs/Rx';
import { Component } from '@nestjs/common';
import { JenkinsService } from '../jenkins/jenkins.service';
import { Observable } from 'rxjs/Observable';

@Component()
export class ChatJenkinsService  {
    // public intentResource = {
    //     job: {
    //         exist: this.buildResponseJobStatus,
    //     }
    // };
        
    constructor(private readonly jenkinsService: JenkinsService) { }

    public buildResponse(obj: any = {}): Observable<string> {
        if (obj.resource === 'job') {
            return this.jenkinsService.getJobs()
                        .map((response) => {
                            return this.prepareResponseJobStatus(JSON.parse(response))
                        });
        } else {
            return Observable.of('');
        }
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
}