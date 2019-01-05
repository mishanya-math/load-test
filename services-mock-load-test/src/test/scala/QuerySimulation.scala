import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.Predef.{http, _}
import io.gatling.http.protocol.HttpProtocolBuilder

class QuerySimulation extends Simulation {

  val baseUrl: String = "http://localhost:9999"

  val httpConf: HttpProtocolBuilder = http
    .baseURL(baseUrl)
    .contentTypeHeader("application/json")

  val scn: ScenarioBuilder = scenario("1")
    .exec(
      http("check if order exists")
        .get("/tariff/api/city/search").queryParam("product_id", "5")
        .check(
          status.is(200),
        )
    )
    .exec(
      http("check if order exists")
        .get("/tariff/api/city/default")
        .check(
          status.is(200),
        )
    )
    .exec(
      http("check if order exists")
        .get("/promo/api/private/customers/34a2c06c-23dc-48b9-a1ac-242b009c324c/discount")
        .check(
          status.is(200),
        )
    )
    .exec(
      http("check if order exists")
        .get("/maps/api/directions/json").queryParam("origin", "45.036486,38.985758")
        .queryParam("destination", "45.034459,38.985283")
        .check(
          status.is(200),
        )
    )
    .exec(
      http("check if order exists")
        .get("/price-signer/api/private/v2/sign")
        .check(
          status.is(200),
        )
    )
    .exec(
      http("check if order exists")
        .get("/price-signer/api/private/v2/regular/sign")
        .check(
          status.is(200),
        )
    )
    .exec(
      http("check if order exists")
        .post("/core-webapp/api/private/partner/count")
        .check(
          status.is(200),
        )
    )
    .exec(
      http("check if order exists")
        .post("/core-webapp/api/private/partner/search")
        .body(StringBody(
          """
            |{
            |  "partner_ext_id": "8c4d73cc-c508-481e-8d5a-746314ca108a"
            |}
          """.stripMargin
        )).asJSON
        .check(
          status.is(200),
        )
    )
    .exec(
      http("check if order exists")
        .get("/core-webapp/api/private/partner/9f66db3d-5a0b-4ce1-a35a-60ef2c215c44/drivers/f4fc272f-3919-43a6-95a7-efe5fa3fa543")
        .check(
          status.is(200),
        )
    )
    .exec(
      http("check if order exists")
        .get("/billing/api/private/v1/driver-balance/f4fc272f-3919-43a6-95a7-efe5fa3fa543")
        .check(
          status.is(200),
        )
    )
    .exec(
      http("check if order exists")
        .get("/private/health")
        .check(
          status.is(200),
        )
    )
    .exec(
      http("check if order exists")
        .get("/private/migrate")
        .check(
          status.is(200),
        )
    )


  setUp(
    scn.inject(
      rampUsers(100) over 6
    )
  ).protocols(httpConf)
    .exponentialPauses
}
