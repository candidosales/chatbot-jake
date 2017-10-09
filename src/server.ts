import * as apicache from 'apicache';
import * as bodyParser from 'body-parser';
import * as timeout from 'connect-timeout';
import { ApplicationModule } from './modules/app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.setGlobalPrefix('v1');  
  app.use(bodyParser.json());
  app.use(timeout('5s'));
  app.use(haltOnTimedout);
  
  initCache(app);
  await app.listen(8080);
}

function haltOnTimedout (req, res, next) {
  if (!req.timedout) next()
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
