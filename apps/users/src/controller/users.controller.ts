import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class UsersController {
  // constructor() {}

  @EventPattern('user.test')
  getHello(): string {
    return 'Hola mundo';
  }
}
