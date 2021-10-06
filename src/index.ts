import { MatchReader } from "./MatchReader";
import { distractTheScores } from "./utils";

const reader = new MatchReader("football.csv");
reader.reade();

let chelseaWon = 0;

for (const match of reader.data) {
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
