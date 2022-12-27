import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin-shushant8051:Shushant123@cluster0.pz5hp21.mongodb.net/Credentials',

      ),
    UserModule,
    AuthModule,
    AdminModule,
  ],
})
export class AppModule {}
