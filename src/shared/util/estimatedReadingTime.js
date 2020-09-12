export const estimatedReadingTime = (value) => {
  let wordCount = value.split(/\W+/).length;

  let wordPerSeconds = 2;

  let amountOfSecondsToRead = wordCount / wordPerSeconds;
  let amountOfMinutesToRead = amountOfSecondsToRead / 60;
  // console.log(amountOfSecondsToRead);
  // console.log(amountOfMinutesToRead);
  return amountOfMinutesToRead;
};
