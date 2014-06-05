var request = require("request");

var i2b = function (url, callback) {
    var options = {
        uri: url,
        encoding: "binary"
    };
    return request(options, function(e, resp, body) {
        if (!e && resp.statusCode === 200) {
            var prefix = "data:" + resp.headers["content-type"] + ";base64,";
            var img = new Buffer(body.toString(), "binary").toString("base64");
            return callback(prefix + img);
        }
        console.log(e);
        return callback();
    });
};

if (typeof (exports) !== "undefined") {
    if (typeof (module) !== "undefined" && module.exports) {
        exports = module.exports = i2b;
    }
    exports.i2b = i2b;
}
