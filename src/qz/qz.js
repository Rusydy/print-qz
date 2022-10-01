const qz = require('qz-tray');

// const qz_init = () => {
    qz.api.setPromiseType(require('q').Promise);
    qz.api.setWebSocketType(require('ws'));
    // const qz = require('qz-tray');
    // qz.api.setSha256Type(data => require('crypto').createHash('sha256').update(data).digest('hex'));
    // qz.api.setPromiseType(resolver => new Promise(resolver));
    // qz.websocket.connect().then(() => qz.printers.find()).then(printers => console.log(printers));
    // qz.websocket.disconnect();


    qz.security.setCertificatePromise(function (resolve, reject) {
        //Preferred method - from server
        resolve("-----BEGIN CERTIFICATE-----\n" +
            "MIIECzCCAvOgAwIBAgIGAYOSMJ9UMA0GCSqGSIb3DQEBCwUAMIGiMQswCQYDVQQG\n" +
            "EwJVUzELMAkGA1UECAwCTlkxEjAQBgNVBAcMCUNhbmFzdG90YTEbMBkGA1UECgwS\n" +
            "UVogSW5kdXN0cmllcywgTExDMRswGQYDVQQLDBJRWiBJbmR1c3RyaWVzLCBMTEMx\n" +
            "HDAaBgkqhkiG9w0BCQEWDXN1cHBvcnRAcXouaW8xGjAYBgNVBAMMEVFaIFRyYXkg\n" +
            "RGVtbyBDZXJ0MB4XDTIyMDkzMDA2MTY0M1oXDTQyMDkzMDA2MTY0M1owgaIxCzAJ\n" +
            "BgNVBAYTAlVTMQswCQYDVQQIDAJOWTESMBAGA1UEBwwJQ2FuYXN0b3RhMRswGQYD\n" +
            "VQQKDBJRWiBJbmR1c3RyaWVzLCBMTEMxGzAZBgNVBAsMElFaIEluZHVzdHJpZXMs\n" +
            "IExMQzEcMBoGCSqGSIb3DQEJARYNc3VwcG9ydEBxei5pbzEaMBgGA1UEAwwRUVog\n" +
            "VHJheSBEZW1vIENlcnQwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCr\n" +
            "58HpkUR7y/0aV7aAEoQdnrOyEWFg41NQUybsIZZOJ1damCKUST17/FuD6X2gB3Go\n" +
            "+zSlXDSzlwtab0hS8kRkDecc3FRVwPXJxLLwoOGrx5KenAHRkag/Dcds8z+4oF1u\n" +
            "jmwNI9mbfEYSocIco702IVfBrpYIy3Ky+Y07NwpKDIOFleVkVeJARn6GVk8NoTro\n" +
            "PRjMxWNyHNpmFSVJ3MRlLHoDJAFqFeJEnqgseaxgTNI8Fw/wk08eY+dHfJIV/xKx\n" +
            "zBu7TV1TOWzIINJAw8g5G435jPLOfHpfV5FxTgJhQtjKIvOaxCzv18FJypYcipsx\n" +
            "Ooi0s/6LiY9BGiKvvauHAgMBAAGjRTBDMBIGA1UdEwEB/wQIMAYBAf8CAQEwDgYD\n" +
            "VR0PAQH/BAQDAgEGMB0GA1UdDgQWBBTcmnrHBLaQ+38OtEMKbA1nE2uquDANBgkq\n" +
            "hkiG9w0BAQsFAAOCAQEAZCz3u0N9dPBQWghR0AHSnr7zyjUttuz9FiNWxQ10c3bm\n" +
            "qil5YQZWlZBetcM0rHXT/3jn9ZEZRJHJ9JEFKGEo5qiUU9asyg/DhtN75k8Er9Gr\n" +
            "/gc6M0//yOIs0BGJ/xMrq1UrkI/hUyL3dqffZEM/GnVN/UIqfRBYk+i5Vnb1Y7rY\n" +
            "SYNL0xAtA8KNohGK4ys3Wj6b3umKgtotEGv2CbrQ2gk16K8P2cHHVaKw95Gylr4L\n" +
            "oG0/WDDvomqjRwWNXo682pe2QnyH5YdELfJv2J2JNBmxlr1UgrfPWBrlbJiCfmNg\n" +
            "BwOzD5Y9Xe92AJAxqa8IJ5cisF88NwSBWWU+uF8sJw==\n" +
            "-----END CERTIFICATE-----\n");
    });

    qz.security.setSignatureAlgorithm("SHA512");
    qz.security.setSignaturePromise(function (toSign) {
        return function (resolve, reject) {
            //Preferred method - from server
            resolve("-----BEGIN PRIVATE KEY-----\n" +
                "MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCr58HpkUR7y/0a\n" +
                "V7aAEoQdnrOyEWFg41NQUybsIZZOJ1damCKUST17/FuD6X2gB3Go+zSlXDSzlwta\n" +
                "b0hS8kRkDecc3FRVwPXJxLLwoOGrx5KenAHRkag/Dcds8z+4oF1ujmwNI9mbfEYS\n" +
                "ocIco702IVfBrpYIy3Ky+Y07NwpKDIOFleVkVeJARn6GVk8NoTroPRjMxWNyHNpm\n" +
                "FSVJ3MRlLHoDJAFqFeJEnqgseaxgTNI8Fw/wk08eY+dHfJIV/xKxzBu7TV1TOWzI\n" +
                "INJAw8g5G435jPLOfHpfV5FxTgJhQtjKIvOaxCzv18FJypYcipsxOoi0s/6LiY9B\n" +
                "GiKvvauHAgMBAAECggEANLcIJtjOOGxQfECDjXigHPkqv6NGylBLnykwmV6fWe4E\n" +
                "gpp+mBxxh1DWu3fhdy5xM1F9TmwdGSlraNsRQaZbRJdi1N3X2sgmVy5DdTjQmz3C\n" +
                "/3J1uE9DWbqe+hEJ7FL488sm5UymEWEll9cU0HWBs1S8NX+VMLM6xBl0rsDtHdGB\n" +
                "ReT/aRn5WthreIM2MGLrzwIFEpqgijelcnKyaH8TKduPiYhiToMMKnKT+u1e/jAR\n" +
                "gCIUSQOx+By6QpjfdvvGeaVtssK7ST3WH3us6naIn8TqwV1nHaNgQ7ptHb9j1GRi\n" +
                "jphTahV9eplS5NB2OnRDbAe57GYuB7FdNwoKwSM60QKBgQDniHD8M6pLgj8Rq6Ov\n" +
                "q3aDsAAvZ4v2ov74oDu8iZfY2no27VuBN8P/f+a/UjhsOU0klAbJQkLXG1M8Pvgr\n" +
                "OpilNUHiwKm1OhlRWzqVKWpg1CzP4FUjKsSdMYPNQQZo4yXbCBeGyCJ5XRGWWU9O\n" +
                "vxi8/TbQTeZBc3GZIxx8TlSGGQKBgQC+Ejw3y+Ftbz74+b6tP22nDkfKA2LIwWh0\n" +
                "qzY4wEAVehOTt4I2m/QSq6pjjasRaKARubLZQieEAEeAWyk7ynsOyQI5loyzpuz7\n" +
                "6C6zh4dtC9JksrYnxlWdhllaozKMdtZE8H1bCPYcR8Yiz4Xz7kWnuxa2rilvhR1w\n" +
                "pBUxWimynwKBgD5H4ISm7S8kmQyKzBwsFlQ0GsilpOuySr3cdFUx+eu2UVvHG281\n" +
                "7f4jjJF4b38FJvAo9W5b6ZjtW8V/9sfCGl+OZOu3Aa+jMj5FOQv4uQnU6Tz9zkkI\n" +
                "bx0NvbOPw0ahm4RAt/tkiIl29I0p9wBqvR/RSVZdLgv7HtqfrEDv3SK5AoGAcY+L\n" +
                "kvqpMS0qPq9YkUI4TXtmwPfM6Y1Ez5AL0VRr9Wj+kV8u2VnMNeuC3gAimUAdgvmk\n" +
                "NdIkseVI0xOkSyjq5SaLwcSFREETjl5mqLTs4OYTSj7MPm9tb7R5ZoHjDbFiy8Wz\n" +
                "39Q21ya65sl+iwNtco2BQJxF/W9W65ndX6MzDpkCgYAUB+iK5REGj9RusqLSJC1R\n" +
                "PMwUTbFlU5vKIKnQtMABQSNwIn2xB0SXY5nyyQH8QoY3nPLf3vcFVPPmUm/KT+lz\n" +
                "XR4bUOpP7BcG3YlEFocxOWLm9rlyGgHcNrQNuz43R0g9b4MOvon0cSiPe1frTbHU\n" +
                "9lu0OclizzDj0oUy2IxVcw==\n" +
                "-----END PRIVATE KEY-----"
            );
        };
    });
// }

// const qz_printing_demo = () => { 
    qz.websocket.connect()
    .then(console.log("Connected"))
    .then(qz.printers.getDefault)
    .then(function (printer) {
        console.log("The default printer is: " + printer);
        let config = qz.configs.create(printer);
        let data = [{
            type: 'html',
            format: 'plain',
            // flavor: 'file',
            data: '<html><body><h1>Hello World!</h1></body></html>'
        }];
        qz.print(config, data).catch(function (e) {
            console.error(e);
        })
    })
    .catch(function (err) {
        console.error("error:", err);
        process.exit(1);
    })
    .then(qz.websocket.disconnect());
// };

// module.exports = {
    // qz_init,
    // qz_printing_demo
// }

qz.websocket.disconnect();