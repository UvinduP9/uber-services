import { Controller, Get, Param } from '@nestjs/common';
import { RiderService } from './rider.service';

@Controller()
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

  @Get(':id')
  getRiderById(
    @Param()
    params: any,
  ) {
    return {
      _id: params.id,
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jan@gmail.com',
    };
  }
}
