import { Analyzer } from '../Summary';
import { MatchData } from '../MatchData';
import { MatchResults } from '../MatchResults';

export class WinsAnalysis implements Analyzer {
    constructor(public name: string) {}

    run(matches: MatchData[]): string {
        let wins = 0;

        for (let match of matches) {
            if (match[1] === this.name && match[5] === MatchResults.HomewWin) {
                wins++
            } else if (match[2] === this.name && match[5] === MatchResults.AwayWin) {
                wins++
            }
        }

        return `Team ${this.name} won ${wins} games`;
    }
}