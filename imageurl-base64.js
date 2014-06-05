var request = require("request");

exports = function (url, callback) {
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
