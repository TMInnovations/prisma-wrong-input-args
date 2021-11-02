import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import {
  FindManyScanArgs,
  Parcel,
  Scan,
  ScanCreateInput,
  ScanUpdateInput,
  ScanWhereUniqueInput,
} from '@prisma/client/nestjs-graphql';
import { ScanService } from './scan.service';

@Resolver(() => Scan)
export class ScanResolver {
  constructor(private readonly scanService: ScanService) {}

  // FIELDRESOLVER

  @ResolveField(() => Parcel, { name: 'parcel' })
  Parcel(@Parent() surchargetype: Scan) {
    return this.scanService.findOne({ id: surchargetype.id }).parcel();
  }

  // CRUD

  @Mutation(() => Scan)
  createScan(@Args('createScanInput') createScanInput: ScanCreateInput) {
    return this.scanService.create(createScanInput);
  }

  @Query(() => [Scan], { name: 'scans' })
  findAll(@Args() args: FindManyScanArgs) {
    return this.scanService.findAll(args);
  }

  @Query(() => Scan, { name: 'scan' })
  findOne(@Args('where') where: ScanWhereUniqueInput) {
    return this.scanService.findOne(where);
  }

  @Mutation(() => Scan)
  updateScan(
    @Args('where') where: ScanWhereUniqueInput,
    @Args('updateScanInput') updateScanInput: ScanUpdateInput,
  ) {
    return this.scanService.update(where, updateScanInput);
  }

  @Mutation(() => Scan)
  removeScan(@Args('where') where: ScanWhereUniqueInput) {
    return this.scanService.remove(where);
  }

  // ADMINLAND

  // USERLAND
}
