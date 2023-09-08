import { DataAccessPostsModule } from '@kontentsu/data-access-posts';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [DataAccessPostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
