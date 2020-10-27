import fs from 'fs';

import { OutputTrager } from '../Summary';

export class HTMLReport implements OutputTrager {
    print(report: string) {
        const output = `
            <body>
                <h1>Output Report</h1>
                <p>${report}</p>
            </body>
        `;
        fs.writeFileSync('report.html', output);
    }
}