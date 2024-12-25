import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();

    try {
        await app.listen(3000);
        console.log('Backend running on http://localhost:3000');
    } catch (error) {
        console.error('Error starting the application:', error);
    }
}
bootstrap();