import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const summary = Summary.winsAnalysisOnHTMLReports('Man United');
const report = MatchReader.fromCsv('football.csv');

report.load();
summary.buildAndReadReport(report.mathes);