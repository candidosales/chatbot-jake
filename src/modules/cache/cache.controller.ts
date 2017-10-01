import { Controller, Get, Req, Res, HttpStatus } from '@nestjs/common';
import * as apicache from 'apicache';

@Controller('cache')
export class CacheController {

    @Get('clear')
    findJobs(@Res() res) {
        apicache.clear();
        res.status(HttpStatus.OK).json(['ok']);
    }

}