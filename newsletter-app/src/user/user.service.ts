import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create({ name, email }: CreateUserDto) {
    const newUser = User.build(name, email);
    await this.prismaService.users.create({
      data: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  }

  async sendNewsletter(message: string) {
    const storedUsers = await this.prismaService.users.findMany();

    const users = storedUsers.map((storedUser) =>
      User.with(storedUser.id, storedUser.name, storedUser.email),
    );

    const response = {
      users,
      message,
    };

    return response;
  }
}
