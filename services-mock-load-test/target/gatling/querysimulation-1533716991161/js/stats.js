var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "120",
        "ok": "110",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "204",
        "ok": "204",
        "ko": "5"
    },
    "meanResponseTime": {
        "total": "13",
        "ok": "14",
        "ko": "3"
    },
    "standardDeviation": {
        "total": "32",
        "ok": "33",
        "ko": "1"
    },
    "percentiles1": {
        "total": "4",
        "ok": "4",
        "ko": "4"
    },
    "percentiles2": {
        "total": "5",
        "ok": "5",
        "ko": "4"
    },
    "percentiles3": {
        "total": "93",
        "ok": "93",
        "ko": "5"
    },
    "percentiles4": {
        "total": "141",
        "ok": "143",
        "ko": "5"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 110,
        "percentage": 92
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 10,
        "percentage": 8
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "20",
        "ok": "18.333",
        "ko": "1.667"
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
        "total": "120",
        "ok": "110",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "204",
        "ok": "204",
        "ko": "5"
    },
    "meanResponseTime": {
        "total": "13",
        "ok": "14",
        "ko": "3"
    },
    "standardDeviation": {
        "total": "32",
        "ok": "33",
        "ko": "1"
    },
    "percentiles1": {
        "total": "4",
        "ok": "4",
        "ko": "4"
    },
    "percentiles2": {
        "total": "5",
        "ok": "5",
        "ko": "4"
    },
    "percentiles3": {
        "total": "93",
        "ok": "93",
        "ko": "5"
    },
    "percentiles4": {
        "total": "141",
        "ok": "143",
        "ko": "5"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 110,
        "percentage": 92
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 10,
        "percentage": 8
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "20",
        "ok": "18.333",
        "ko": "1.667"
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
