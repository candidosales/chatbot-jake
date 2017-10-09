import { Controller, Post, Req, Res, HttpStatus } from '@nestjs/common';
import { ChatService } from '../chat/chat.service';

@Controller('webhook')
export class WebhookController {
    constructor(private readonly chatService: ChatService) {}

    @Post()
    webhook(@Req() req, @Res() res) {
        this.chatService
            .buildResponse(req.body.result.parameters)
            .subscribe((response) => {
                res.status(HttpStatus.OK).send({ speech: response, displayText: response })
            });
    };
}
