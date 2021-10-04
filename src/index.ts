import fs from "fs";

const matches = fs
  .readFileSync("football.csv", {
    encoding: "utf-8",
  })
  .split("\n")
  .map((row: string): string[] => {
    return row.split(",");
  });

let chelseaWon = 0;

for (const match of matches) {
  if (match[4] === "Chelsea") {
    const result = match[7].split("-");
    if (result[0] > result[1]) {
      chelseaWon++;
    }
  } else if (match[5] === "Chelsea") {
    const result = match[7].split("-");
    if (result[1] > result[0]) {
      chelseaWon++;
    }
  }
  {
  }
}

console.log(`chelsea have won ${chelseaWon} games in 2020-2021`);
