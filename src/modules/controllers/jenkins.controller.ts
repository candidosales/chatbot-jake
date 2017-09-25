import { JenkinsService } from './../components/jenkins.service';
import { Controller, Get, Req, Res, HttpStatus } from '@nestjs/common';

@Controller('jenkins')
export class JenkinsController {

    constructor(private readonly jenkinsService: JenkinsService) {}
    

    @Get()
    findAllPlugins(@Res() res) {
        // ;
        this.jenkinsService.getPlugins()
            .then((data) => {
                res.status(HttpStatus.OK).json(JSON.parse(data.body));
            })
            .catch((err) => {
                res.status(HttpStatus.NOT_FOUND).json([]);
            });
    }
}