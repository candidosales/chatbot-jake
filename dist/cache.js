"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apicache = require("apicache");
exports.cache = apicache.options({
    headers: {
        'cache-control': 'no-cache'
    }
})
    .middleware;
//# sourceMappingURL=cache.js.map