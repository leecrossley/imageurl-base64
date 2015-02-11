# imageurl-base64 [![npm version](https://badge.fury.io/js/imageurl-base64.png)](https://npmjs.org/package/imageurl-base64)

Node package to convert a binary returned from a url to base64/dataUri

```
var i2b = require("imageurl-base64");

i2b("http://whateveranyurl.co/anyimage.jpg", callback);
```

The callback will return an error object and an object containing the information about the image.

```
i2b("http://whateveranyurl.co/anyimage.jpg", function(err, data){

});
```

The data object has the keys `mimeType`, `base64` and `dataUri` - giving you the flexibility to use the dataUri that was returned in previous versions < 1.0.0, as well being able to get access to the mimeType and the base64 version of the binary returned from the URL.

## Extra notes

This module will give you an object for any URL given to it that returns a binary of any kind, if it's possible. This means that you can also get the data for a PDF for example.
