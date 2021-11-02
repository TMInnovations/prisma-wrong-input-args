import { Module } from '@nestjs/common';
import { PrismaModule } from '../../services/prisma/prisma.module';
import { ScanResolver } from './scan.resolver';
import { ScanService } from './scan.service';

@Module({
  imports: [PrismaModule],
  providers: [ScanResolver, ScanService],
  exports: [ScanService],
})
export class ScanModule {}
