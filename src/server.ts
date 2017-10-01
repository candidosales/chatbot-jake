import * as bodyParser from 'body-parser';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import * as apicache from 'apicache';


async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.setGlobalPrefix('v1');  
  app.use(bodyParser.json());
  
  initCache(app);
  await app.listen(8080);
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
