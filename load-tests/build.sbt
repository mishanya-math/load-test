name := "marketer-load-test"

version := "0.1"

scalaVersion := "2.12.6"

val jodaTimeVersion = "2.3"
val jwtVersion = "89.8.0"
val http4sVersion = "3.0.83"
val scalazVersion = "7.2.23"
val gatlingVersion = "2.3.1"

enablePlugins(GatlingPlugin)

scalacOptions := Seq(
  "-encoding", "UTF-8", "-target:jvm-1.8", "-deprecation",
  "-feature", "-unchecked", "-language:implicitConversions", "-language:postfixOps")

resolvers += Resolver.sbtPluginRepo("releases")
resolvers += "Central Repository" at "http://central.maven.org/maven2/"

libraryDependencies += "io.verizon.helm" %% "core" % http4sVersion
libraryDependencies += "io.verizon.helm" %% "http4s" % http4sVersion
libraryDependencies += "org.scalaz" %% "scalaz-concurrent" % scalazVersion

libraryDependencies += "io.gatling.highcharts" % "gatling-charts-highcharts" % gatlingVersion % "test"
libraryDependencies += "io.gatling" % "gatling-test-framework" % gatlingVersion % "test"

resolvers += "Nexus" at "https://nexus.fasten.com/nexus/content/repositories/releases/"

credentials += Credentials("Sonatype Nexus Repository Manager", "nexus.fasten.com", "admin", "quahch9eac7Eigov")

libraryDependencies ++= Seq(
  "com.fasten.common" % "common-jwt" % jwtVersion,
  "joda-time" % "joda-time" % jodaTimeVersion
)
