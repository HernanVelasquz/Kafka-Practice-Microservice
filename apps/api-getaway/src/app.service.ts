import { Inject, Injectable } from '@nestjs/common';
import { Observable, from } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('MICRO2_SERVICE') private client: ClientProxy) {}
  getHello(data: string): Observable<any> {
    return from(this.client.emit('user.test', data));
  }
}
