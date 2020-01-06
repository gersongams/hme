import isEqual from "lodash/isEqual";

export const wordMatcher = (guess, answer) => {
  let numMatched = 0;
  let a = guess.name
    .toLowerCase()
    .split(" ")
    .join("")
    .split("");
  let b = answer
    .toLowerCase()
    .split(" ")
    .join("")
    .split("");

  let m = [...new Set(a)];
  let n = [...new Set(b)];

  n.forEach(i => {
    if (m.includes(i)) {
      numMatched++;
    }
  });

  return {
    numMatched,
    win: isEqual(a, b)
  };
};
