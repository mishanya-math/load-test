package marketer

import io.gatling.core.Predef.Simulation
import io.gatling.http.Predef.{http, status}
import io.gatling.core.Predef._
import io.gatling.core.json.Jackson
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.protocol.HttpProtocolBuilder


class MarketerSimulation extends Simulation {
  val baseUrl: String = "http://localhost:8080/marketer/api/private"

  val startRpc = 1
  val staticRpc = 40
  val peakRpc = 100

  val httpConf: HttpProtocolBuilder = http
    .baseURL(baseUrl)
    .contentTypeHeader("application/json")

  val scn: ScenarioBuilder = scenario("marketer load tests")
    .exec(http("emptyRequest")
      .post("/v1/messages")
      .body(ElFileBody("body.json")).asJSON
      .check(status.is(200))
    )

  setUp(
    scn.inject(
      constantUsersPerSec(startRpc) during 5,
      rampUsersPerSec(startRpc) to staticRpc during 12,
      constantUsersPerSec(staticRpc) during 60,
      constantUsersPerSec(peakRpc) during 180,
      constantUsersPerSec(staticRpc) during 60
    ).protocols(httpConf)
  ).assertions(
    global.failedRequests.count.is(0),
    global.responseTime.percentile3.lt(2000)
  )

}
