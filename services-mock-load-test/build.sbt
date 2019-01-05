name := "services-mock-load-test"

version := "0.1"

scalaVersion := "2.12.6"

val gatlingVersion = "2.3.1"

enablePlugins(GatlingPlugin)

libraryDependencies += "io.gatling.highcharts" % "gatling-charts-highcharts" % gatlingVersion % "test"
libraryDependencies += "io.gatling" % "gatling-test-framework" % gatlingVersion % "test"
