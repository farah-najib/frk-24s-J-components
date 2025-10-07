// notify-dispatch.mjs eller .js om du har "type": "module" i package.json

import https from "https";
import { argv, env, exit, stdout } from "process";

const version = argv[2];
if (!version) {
  console.log("Ingen version tillgänglig, skickar inget dispatch.");
  exit(0);
}

const data = JSON.stringify({
  event_type: "npm-package-updated",
  client_payload: {
    version
  }
});

const options = {
  hostname: "api.github.com",
  path: "/repos/maxwelin/frk-24s-J-frontend/dispatches",
  method: "POST",
  headers: {
    "Authorization": `Bearer ${env.PAT}`,
    "User-Agent": "semantic-release-script",
    "Accept": "application/vnd.github+json",
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(data)
  }
};

const req = https.request(options, res => {
  console.log(`Dispatch status: ${res.statusCode}`);
  res.on("data", d => stdout.write(d));
});

req.on("error", error => {
  console.error("Dispatch error:", error);
});

req.write(data);
req.end();
