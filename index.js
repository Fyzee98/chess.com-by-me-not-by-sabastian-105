/*
This program runs TurboWarp through replit.
*/

const originTrial = process.env['chromeorigintrialkey']
const express = require("express")
const fetch = require("cross-fetch")
const https = require("https")

// const Database=require("@replit/database")
var app = express();
function run() {
  try {
  app.get("/*", (req, res, next) => {
    if(req.path=="/ping") {
      // Adding /ping endpoint to avoid spamming turbowarp when pinger is added
      console.log("Pinged.");
      return;
    }
    else {
    https.request(new URL("https://turbowarp.org" +     req.path), (resp) => {
      res.contentType(resp.headers["content-type"])
      res.set("Origin-Trial",originTrial)
      resp.pipe(res)
    }).end()
    }
  })

  app.listen(3000)
  }
  catch(e) {
    setImmediate(run);
    console.log("Crashed: "+e);
  }
}
run();