import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCoordinatesDTO } from './dto/create-coordinates.dto';
import { Model } from 'mongoose';
import { RiderCoordinatesDocument } from './schemas/rider-coordinates.schema';

@Injectable()
export class RiderCoordinatesService {
  constructor(
    @InjectModel(RiderCoordinatesService.name)
    private readonly riderCoordinateModel: Model<RiderCoordinatesDocument>,
  ) {}
  saveRiderCoordinates(createCoordinateDTO: CreateCoordinatesDTO) {
    return this.riderCoordinateModel.create(createCoordinateDTO);
  }
}
