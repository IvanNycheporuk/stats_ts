"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var HTMLReport_1 = require("./reportTargets/HTMLReport");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.winsAnalysisOnHTMLReports = function (name) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(name), new HTMLReport_1.HTMLReport());
    };
    Summary.prototype.buildAndReadReport = function (matchData) {
        var report = this.analyzer.run(matchData);
        this.outputTarget.print(report);
    };
    return Summary;
}());
exports.Summary = Summary;
