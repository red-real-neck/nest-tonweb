import { Module } from '@nestjs/common';
import { NestTonwebService } from './nest-tonweb.service';

@Module({
  providers: [NestTonwebService],
  exports: [NestTonwebService],
})
export class NestTonwebModule {}
