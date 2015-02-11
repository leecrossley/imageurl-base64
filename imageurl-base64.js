var request = require("request");

var i2b = function (url, callback) {
    "use strict";

    var options = {
        uri: url,
        encoding: "binary"
    };

    return request(options, function(e, resp, body) {
        if (e) {
            return callback(e);
        }

        if (resp.statusCode !== 200) {
            var error = new Error('response was non 200');
            error.response = body;
            return callback(error);
        }

        var prefix = "data:" + resp.headers["content-type"] + ";base64,";
        var img = new Buffer(body.toString(), "binary").toString("base64");

        return callback(null, {
            mimeType: resp.headers["content-type"],
            base64: img,
            dataUri: prefix + img
        });

    });
};

if (typeof (exports) !== "undefined") {
    if (typeof (module) !== "undefined" && module.exports) {
        exports = module.exports = i2b;
    }
    exports.i2b = i2b;
}
