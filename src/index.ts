import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { distractTheScores } from "./utils";

const csvFileReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let chelseaWon = 0;

for (const match of matchReader.matches) {
  if (match[4] === "Chelsea") {
    if (distractTheScores(match[7])[0] > distractTheScores(match[7])[1]) {
      chelseaWon++;
    }
  } else if (match[5] === "Chelsea") {
    if (distractTheScores(match[7])[1] > distractTheScores(match[7])[0]) {
      chelseaWon++;
    }
  }
  {
  }
}

console.log(`chelsea have won ${chelseaWon} games in 2020-2021`);
