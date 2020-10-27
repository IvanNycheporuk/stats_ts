import { CsvFileReader } from './CsvFileReader';
import { MatchResults } from '../MatchResults';
import { dateStringToDate } from '../utils';

type MatchData = [Date, string, string, number, number, MatchResults, string];

export class MatchReader extends CsvFileReader<MatchData> {
    data: MatchData[] = [];

    constructor(public fileName:string) {
        super(fileName);
    }

    matchRow(row: string[]): MatchData {
        return [
            dateStringToDate(row[0]),
                row[1],
                row[2],
                Number(row[3]),
                Number(row[4]),
                row[5] as MatchResults,
                row[6]
        ]
    } 
}