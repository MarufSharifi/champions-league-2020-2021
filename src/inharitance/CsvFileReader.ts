import fs from "fs";

export abstract class CsvFileReader<TypeOfData> {
  data: TypeOfData[] = [];

  constructor(public fileName: string) {}

  abstract matchData(row: string[]): TypeOfData;

  reade(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map(this.matchData);
  }
}
