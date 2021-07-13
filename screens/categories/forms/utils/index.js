const processYears = () => {
  const years = [];
  const current = new Date().getFullYear();
  for (let index = current; index >= 1900; index--) {
    years.push(index + '');
  }
  return years;
};
const processMonths = () => {
  const months = [];
  for (let index = 1; index <= 12; index++) {
    let prefix = '';
    if (index < 10) {
      prefix = '0';
    }
    months.push(prefix + index);
  }
  return months;
};
const processDays = () => {
  const days = [];
  for (let index = 1; index <= 31; index++) {
    let prefix = '';
    if (index < 10) {
      prefix = '0';
    }
    days.push(prefix + index);
  }
  return days;
};

export {processDays, processMonths, processYears};
