export const getDate = (date) => {
  return date
    ? new Date(date).toISOString().slice(0, 10)
    : new Date().toISOString().slice(0, 10);
};

export const compareDate = (datex, datey) => {
    if (datex.getYear() == datey.getYear()) {
        if (datex.getMonth() == datey.getMonth()) {
            return datex.getDate() - datey.getDate()
        }
        return datex.getMonth() - datey.getMonth()
    }
    return datex.getYear() - datey.getYear()
}