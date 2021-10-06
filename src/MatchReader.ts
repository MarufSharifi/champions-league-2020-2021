import { CsvFileReader } from "./CsvFileReader";
type MatchResult = [
  number,
  number,
  string,
  string,
  string,
  string,
  string,
  string
];

export class MatchReader extends CsvFileReader<MatchResult> {
  matchData(row: string[]): MatchResult {
    return [
      parseInt(row[0]),
      parseInt(row[1]),
      row[2],
      row[3],
      row[4],
      row[5],
      row[6],
      row[7],
    ];
  }
}
