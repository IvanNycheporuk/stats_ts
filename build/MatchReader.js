"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
var utils_1 = require("./utils");
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
        this.mathes = [];
    }
    MatchReader.fromCsv = function (name) {
        return new MatchReader(new CsvFileReader_1.CsvFileReader(name));
    };
    MatchReader.prototype.load = function () {
        this.reader.read();
        this.mathes = this.reader.data.map(function (row) { return [
            utils_1.dateStringToDate(row[0]),
            row[1],
            row[2],
            Number(row[3]),
            Number(row[4]),
            row[5],
            row[6]
        ]; });
    };
    return MatchReader;
}());
exports.MatchReader = MatchReader;
