import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCoordinatesDTO } from './dto/create-coordinates.dto';
import { Model } from 'mongoose';
import { RiderCoordinate } from './schemas/rider-coordinates.schema';

@Injectable()
export class RiderCoordinatesService {
  constructor(
    @InjectModel(RiderCoordinate.name)
    private riderCoordinateModel: Model<RiderCoordinate>,
  ) {}
  async getRiderCoordinates() {
    return await this.riderCoordinateModel.find();
  }
  async saveRiderCoordinates(createCoordinateDTO: CreateCoordinatesDTO) {
    return await this.riderCoordinateModel.create(createCoordinateDTO);
  }
}
