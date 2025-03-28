import { Module } from '@nestjs/common';
import { RiderCoordinatesController } from './rider-coordinates.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  RiderCoordinateSchema,
  RiderCoordinate,
} from './schemas/rider-coordinates.schema';
import { RiderCoordinatesService } from './rider-coordinates.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RiderCoordinate.name, schema: RiderCoordinateSchema },
    ]),
    ClientsModule.register([
      { name: 'RIDER_SERVICE', transport: Transport.TCP },
    ]),
  ],
  controllers: [RiderCoordinatesController],
  providers: [RiderCoordinatesService],
})
export class RiderCoordinatesModule {}
