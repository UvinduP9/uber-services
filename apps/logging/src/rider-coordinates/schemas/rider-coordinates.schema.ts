import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RiderCoordinatesDocument = HydratedDocument<RiderCoordinate>;

@Schema()
class RiderCoordinate {
  @Prop({ required: true })
  lat: number;

  @Prop({ required: true })
  lng: number;

  @Prop({ required: true })
  rider: string;
}

export const RiderCoordinateSchema =
  SchemaFactory.createForClass(RiderCoordinate);
