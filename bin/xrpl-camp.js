#!/usr/bin/env node
"use strict";

// Pure JSON config — npm-launcher derives asset names from convention:
//   binary:    xrpl-camp-1.0.3-linux-x64
//   checksums: checksums-1.0.3.txt
process.env.MCPTOOLSHOP_LAUNCH_CONFIG = JSON.stringify({
  toolName: "xrpl-camp",
  owner: "mcp-tool-shop-org",
  repo: "xrpl-camp",
  version: "1.0.3",
  tag: "v1.0.3",
});

require("@mcptoolshop/npm-launcher/bin/mcptoolshop-launch.js");
