"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLReport = void 0;
var fs_1 = __importDefault(require("fs"));
var HTMLReport = /** @class */ (function () {
    function HTMLReport() {
    }
    HTMLReport.prototype.print = function (report) {
        var output = "\n            <body>\n                <h1>Output Report</h1>\n                <p>" + report + "</p>\n            </body>\n        ";
        fs_1.default.writeFileSync('report.html', output);
    };
    return HTMLReport;
}());
exports.HTMLReport = HTMLReport;
