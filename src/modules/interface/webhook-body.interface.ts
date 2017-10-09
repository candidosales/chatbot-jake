import { WebhookBodyStatus } from './webhook-body-status.interface';
import { WebhookBodyResult } from './webhook-body-result.interface';
export interface WebhookBody {
    id: string;
    timestamp: string;
    lang: string;
    result: WebhookBodyResult;
    status: WebhookBodyStatus;
    sessionId: string;
}
