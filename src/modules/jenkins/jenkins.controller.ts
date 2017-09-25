import { JenkinsService } from './jenkins.service';
import { Controller, Get, Req, Res, HttpStatus } from '@nestjs/common';

@Controller('jenkins')
export class JenkinsController {

    constructor(private readonly jenkinsService: JenkinsService) {}

    @Get('jobs')
    findJobs(@Res() res) {
        this.jenkinsService.getJobs()
                           .subscribe((response) => {
                               res.status(HttpStatus.OK).json(response);
                            });
    }

    @Get('plugins')
    findPlugins(@Res() res) {
        this.jenkinsService.getPlugins()
                           .subscribe((response) => {
                               res.status(HttpStatus.OK).json(JSON.parse(response.body));
                            });
    }


    @Get('queues')
    findQueues(@Res() res) {
        this.jenkinsService.getQueues()
                           .subscribe((response) => {
                               res.status(HttpStatus.OK).json(response);
                            });
    }

    @Get('views')
    findViews(@Res() res) {
        this.jenkinsService.getViews()
                           .subscribe((response) => {
                               res.status(HttpStatus.OK).json(response);
                            });
    }
}