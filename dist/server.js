"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./modules/app.module");
const apicache = require("apicache");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.ApplicationModule);
        app.setGlobalPrefix('v1');
        app.use(bodyParser.json());
        initCache(app);
        yield app.listen(8080);
    });
}
function initCache(app) {
    const cache = apicache.options({
        headers: {
            'cache-control': 'no-cache'
        }
    })
        .middleware;
    const onlyStatus200 = (req, res) => res.statusCode === 200;
    app.use(cache('1 month', onlyStatus200));
}
bootstrap();
//# sourceMappingURL=server.js.map