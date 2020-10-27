import { MatchData } from './MatchData';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HTMLReport } from './reportTargets/HTMLReport';

export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTrager {
    print(report: string): void;
}

export class Summary {
    static winsAnalysisOnHTMLReports(name:string) {
        return new Summary(
            new WinsAnalysis(name),
            new HTMLReport()
        )
    }

    constructor(
        public analyzer: Analyzer,
        public outputTarget: OutputTrager
    ){}

    buildAndReadReport(matchData: MatchData[]): void {
        const report = this.analyzer.run(matchData);
        this.outputTarget.print(report);
    }
}