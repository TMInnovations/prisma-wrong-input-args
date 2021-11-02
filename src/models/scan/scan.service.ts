import { Injectable } from '@nestjs/common';
import {
  FindManyScanArgs,
  ScanCreateInput,
  ScanUpdateInput,
  ScanWhereUniqueInput,
} from '@prisma/client/nestjs-graphql';
import { PrismaService } from '../../services/prisma/prisma.service';

@Injectable()
export class ScanService {
  constructor(private prisma: PrismaService) {}

  // CRUD

  create(createScanInput: ScanCreateInput) {
    return this.prisma.scan.create({
      data: createScanInput,
    });
  }

  findAll(args: FindManyScanArgs) {
    return this.prisma.scan.findMany(args);
  }

  findOne(where: ScanWhereUniqueInput) {
    return this.prisma.scan.findUnique({ where });
  }

  update(where: ScanWhereUniqueInput, updateScanInput: ScanUpdateInput) {
    return this.prisma.scan.update({ where, data: updateScanInput });
  }

  remove(where: ScanWhereUniqueInput) {
    return this.prisma.scan.delete({ where });
  }

  // ADMINLAND

  // USERLAND
}
