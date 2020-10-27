"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var summary = Summary_1.Summary.winsAnalysisOnHTMLReports('Man United');
var report = MatchReader_1.MatchReader.fromCsv('football.csv');
report.load();
summary.buildAndReadReport(report.mathes);
