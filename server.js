var express = require('express'),
    app = express();

app.use(function(req, res){
    var r       = require('ua-parser').parse(req.headers['user-agent']);
    res.json({
      "ipaddress": req.headers["x-forwarded-for"].split(",")[0],
      "language": req.headers["accept-language"].split(",")[0],
      "software": r.os.toString()
    });
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
