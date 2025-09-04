import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'API funcionando';
  }

  @Get('health')
  getHealth() {
    return { status: 'ok' };
  }
}
