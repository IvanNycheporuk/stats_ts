import { MatchResults } from './MatchResults';
import { dateStringToDate } from './utils';
import { MatchData } from './MatchData';
import { CsvFileReader } from './CsvFileReader';

interface DataReader {
    read(): void;
    data: string[][];
}

export class MatchReader {
    static fromCsv(name:string) {
        return new MatchReader(new CsvFileReader(name))
    }

    mathes: MatchData[] = [];
    constructor(public reader: DataReader){}

    load():void{
        this.reader.read();
        this.mathes = this.reader.data.map(
            (row: string[]):MatchData => [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                Number(row[3]),
                Number(row[4]),
                row[5] as MatchResults,
                row[6]
            ]);
    }
}