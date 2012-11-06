/******************************************************************************/
/* Logger BOM */
/******************************************************************************/

if (typeof require !== "undefined") {
    var logger = require("./logger-core.js");
}

(function () {
    "use strict";

    var checker = {

/******************************************************************************/
/* General */
/******************************************************************************/

    };

    logger.bom = function (data) {
        var res,
            type;

        for (type in checker) {
            if (checker.hasOwnProperty(type)) {
                if (checker[type].call(null, data)) {
                    // res = logger.parser.bom[type].call(this, data);
                    res = ">>" + type + "<< : " + logger.parser.bom[type].call(this, data);
                }
            }
        }

        return res;
    };
}).call(this);

