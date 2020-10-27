import { OutputTrager } from '../Summary';

export class ConsoleReports implements OutputTrager {
    print(report: string):void {
        console.log(report);
    }
}