export const dateStringToNumber = (dateString: string): Date => {
  const date = dateString.toString().split(" ");
  const dateParts = date[0].split("/").map((value: string): number => {
    return parseInt(value);
  });

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};

export const distractTheScores = (score: string): number[] => {
  const result = score.split("-");
  return [parseInt(result[0]), parseInt(result[1])];
};
