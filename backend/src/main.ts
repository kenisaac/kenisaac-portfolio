import "reflect-metadata";
import { ClassSerializerInterceptor, ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory, Reflector } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "@/app.module";
import { AllExceptionsFilter } from "@/common/filters/all-exceptions.filter";
import { ResponseInterceptor } from "@/common/interceptors/response.interceptor";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>("app.port", 4000);
  const frontendOrigin = configService.get<string>("app.frontendOrigin", "http://localhost:5173");

  app.enableCors({
    origin: frontendOrigin,
    credentials: true
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true
    })
  );
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)), new ResponseInterceptor());

  const swaggerConfig = new DocumentBuilder()
    .setTitle("Ken Isaac Portfolio API")
    .setDescription("Portfolio content, contact messages, dashboard summary, and admin-ready endpoints.")
    .setVersion("1.0.0")
    .addTag("portfolio")
    .addTag("contact")
    .addTag("dashboard")
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup("docs", app, document);

  await app.listen(port);
}

void bootstrap();
