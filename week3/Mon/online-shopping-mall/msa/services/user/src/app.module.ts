import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env['DB_HOST'] || 'localhost',
      port: parseInt(process.env['DB_PORT'] || '5432'),
      username: process.env['DB_USERNAME'] || 'postgres',
      password: process.env['DB_PASSWORD'] || 'postgres',
      database: process.env['DB_DATABASE'] || 'shopping_mall',
      autoLoadEntities: true,
      synchronize: process.env['NODE_ENV'] !== 'production',
      logging: process.env['NODE_ENV'] === 'development',
    }),
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}