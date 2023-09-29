import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @HttpCode(201)
  @Post('/users')
  async create(@Body() createUserDto: CreateUserDto) {
    await this.userService.create(createUserDto);
  }

  @HttpCode(200)
  @Post('/newsletter')
  async sendNewsletter(@Body() message: string) {
    const response = await this.userService.sendNewsletter(message);
    return response;
  }
}
