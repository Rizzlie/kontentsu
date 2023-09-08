import { PrismaClientModule } from '@kontentsu/prisma-client';
import { Module } from '@nestjs/common';

import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  controllers: [PostController],
  providers: [PostService],
  imports: [PrismaClientModule],
})
export class DataAccessPostsModule {}
