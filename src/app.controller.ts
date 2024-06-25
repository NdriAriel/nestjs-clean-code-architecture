import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@Controller()
@ApiTags("hello")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Say Hello world an item' })
 // @ApiBody({ type: CreateItemDto })
  @ApiResponse({ status: 200, description: 'The item has been created.' })
  getHello(): string {
    return this.appService.getHello();
  }
}
