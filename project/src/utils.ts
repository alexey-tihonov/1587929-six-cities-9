export const getDate = (dateString: string) => {
  const date = new Date(dateString);
  const dateTime = `${date.getFullYear()} ${date.getMonth() + 1} ${date.getDate}`;
  const dateText = date.toLocaleDateString('en-US', {month: 'long', year: 'numeric'});
  return {dateTime: dateTime, dateText: dateText};
};

export const getPercent = (partialValue: number, totalValue: number) => (100 * partialValue) / totalValue;
