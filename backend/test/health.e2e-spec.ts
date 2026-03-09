import { Test } from "@nestjs/testing";
import request from "supertest";

import { AppModule } from "../src/app.module";

describe("Health (e2e)", () => {
  it("GET /health -> ok", async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    const app = moduleRef.createNestApplication();
    await app.init();

    await request(app.getHttpServer()).get("/health").expect(200).expect({ ok: true });

    await app.close();
  });
});
