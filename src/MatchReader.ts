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

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchResult[] = [];
  constructor(public reader: DataReader) {}

  load() {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchResult => {
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
    });
  }
}
