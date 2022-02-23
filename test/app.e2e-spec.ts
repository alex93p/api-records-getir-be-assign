import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should returns 200 "Ok"', () => {
    return request(app.getHttpServer()).get('/').expect(200).expect('Ok');
  });

  afterAll(async () => {
    await app.close();
  });
});

describe('RecordsController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should returns 200', () => {
    return request(app.getHttpServer())
      .post('/')
      .send({
        startDate: new Date(),
        endDate: new Date(),
        minCount: 0,
        maxCount: 1,
      })
      .expect(200);
  });

  it('should returns validation error 400', () => {
    return request(app.getHttpServer())
      .post('/')
      .send({
        startDate: 'abc',
        endDate: 'abc',
        minCount: 'abc',
        maxCount: 'abc',
      })
      .expect(400);
  });

  it('should returns validation error 400', () => {
    return request(app.getHttpServer()).post('/').send({}).expect(400);
  });

  afterAll(async () => {
    await app.close();
  });
});
