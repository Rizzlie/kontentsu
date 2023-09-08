import { PrismaService } from '@kontentsu/prisma-client';
import { Injectable } from '@nestjs/common';
import type { Post } from '@prisma/client';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async posts(): Promise<Post[]> {
    return this.prisma.post.findMany();
  }
}
