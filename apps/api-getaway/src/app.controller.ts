import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable, from } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Observable<any> {
    return from(this.appService.getHello('Kafka'));
  }
}
