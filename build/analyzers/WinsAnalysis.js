"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
var MatchResults_1 = require("../MatchResults");
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(name) {
        this.name = name;
    }
    WinsAnalysis.prototype.run = function (matches) {
        var wins = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if (match[1] === this.name && match[5] === MatchResults_1.MatchResults.HomewWin) {
                wins++;
            }
            else if (match[2] === this.name && match[5] === MatchResults_1.MatchResults.AwayWin) {
                wins++;
            }
        }
        return "Team " + this.name + " won " + wins + " games";
    };
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;
