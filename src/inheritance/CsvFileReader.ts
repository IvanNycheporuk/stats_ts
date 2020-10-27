import fs from 'fs';

export abstract class CsvFileReader<T> {
    data: T[] = [];

    constructor(public fileName:string) {}

    read(): void {
        this.data = fs.readFileSync(this.fileName, {
            encoding: 'utf-8'
        }).split('\n')
        .map((row:string): string[] => row.split(','))
        .map( this.matchRow);
    }

    abstract matchRow(row: string[]): T
}