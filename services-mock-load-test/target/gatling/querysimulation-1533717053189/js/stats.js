var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1200",
        "ok": "780",
        "ko": "420"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "19100",
        "ok": "19100",
        "ko": "10053"
    },
    "meanResponseTime": {
        "total": "834",
        "ok": "749",
        "ko": "990"
    },
    "standardDeviation": {
        "total": "2083",
        "ok": "2065",
        "ko": "2107"
    },
    "percentiles1": {
        "total": "11",
        "ok": "10",
        "ko": "12"
    },
    "percentiles2": {
        "total": "43",
        "ok": "46",
        "ko": "38"
    },
    "percentiles3": {
        "total": "5033",
        "ok": "5041",
        "ko": "5030"
    },
    "percentiles4": {
        "total": "9071",
        "ok": "9607",
        "ko": "8833"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 646,
        "percentage": 54
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 30,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 104,
        "percentage": 9
    },
    "group4": {
        "name": "failed",
        "count": 420,
        "percentage": 35
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "41.379",
        "ok": "26.897",
        "ko": "14.483"
    }
},
contents: {
"req_check-if-order--39518": {
        type: "REQUEST",
        name: "check if order exists",
path: "check if order exists",
pathFormatted: "req_check-if-order--39518",
stats: {
    "name": "check if order exists",
    "numberOfRequests": {
        "total": "1200",
        "ok": "780",
        "ko": "420"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "19100",
        "ok": "19100",
        "ko": "10053"
    },
    "meanResponseTime": {
        "total": "834",
        "ok": "749",
        "ko": "990"
    },
    "standardDeviation": {
        "total": "2083",
        "ok": "2065",
        "ko": "2107"
    },
    "percentiles1": {
        "total": "11",
        "ok": "10",
        "ko": "12"
    },
    "percentiles2": {
        "total": "43",
        "ok": "46",
        "ko": "38"
    },
    "percentiles3": {
        "total": "5033",
        "ok": "5041",
        "ko": "5030"
    },
    "percentiles4": {
        "total": "9071",
        "ok": "9607",
        "ko": "8833"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 646,
        "percentage": 54
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 30,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 104,
        "percentage": 9
    },
    "group4": {
        "name": "failed",
        "count": 420,
        "percentage": 35
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "41.379",
        "ok": "26.897",
        "ko": "14.483"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
