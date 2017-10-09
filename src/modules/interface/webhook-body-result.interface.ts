export interface WebhookBodyResult {
    source: string;
    resolvedQuery: string;
    speech: string;
    action: string;
    actionIncomplete: boolean;
    parameters: any;
    contexts: [any];
    metadata: any;
    fulfillment: any;
    score: number;
}