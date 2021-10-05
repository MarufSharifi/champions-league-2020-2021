import fs from "fs";
import { dateStringToNumber } from "./utils";
export class CsvFileReader {
  data: string[][] = [];

  constructor(public fileName: string) {}

  reade(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map((row: string[]): any => {
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
