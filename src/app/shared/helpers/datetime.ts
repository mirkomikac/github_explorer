export const getDateOneWeekAgo = (): Date => {
  const currentDate: Date = new Date();
  currentDate.setHours(0, 0, 0, 0);

  const oneWeekAgo = currentDate.getDate() - 7;

  const oneWeekAgoDate = new Date();
  oneWeekAgoDate.setDate(oneWeekAgo);

  return oneWeekAgoDate;
};

export const getDateOnlyISOStringOneWeekAgo = (): string => {
  const date = getDateOneWeekAgo();
  return date.toISOString().substring(0, 10);
};
