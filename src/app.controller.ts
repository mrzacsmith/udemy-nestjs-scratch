import { Controller, Get } from '@nestjs/common'

@Controller('/api')
export class AppController {
  @Get('/love')
  getRootRoute() {
    return 'i love alexandra'
  }

  @Get('/always')
  getAlways() {
    return 'forever and ever!'
  }
}
