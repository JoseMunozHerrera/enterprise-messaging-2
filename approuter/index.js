const approuter = require("@sap/approuter");
const config = require("./xs-app.json");

config.routes.forEach((oRoute) => {
    "use strict";
    console.log(oRoute.localDir)
    if (oRoute.localDir && oRoute.localDir === "webapp") {
        oRoute.localDir = "../app/webapp";
    }
});
approuter().start({ xsappConfig: config });