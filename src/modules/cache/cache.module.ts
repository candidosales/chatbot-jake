import { CacheController } from './cache.controller';
import { Module } from '@nestjs/common';

@Module({
    controllers: [CacheController]
})
export class CacheModule {}