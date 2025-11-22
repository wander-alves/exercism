export function createAppointment(days, now = undefined) {
  const date = now ? new Date(now) : new Date();
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + days)
  
  return newDate;
}

export function getAppointmentTimestamp(appointmentDate) {
  return new Date(appointmentDate).toISOString();
}

export function getAppointmentDetails(timestamp) {
  const newDate = new Date(timestamp);

  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const date = newDate.getDate();
  const hour = newDate.getHours();
  const minute = newDate.getMinutes();
  return { 
    year,
    month,
    date,
    hour,
    minute,
  }
}


export function updateAppointment(timestamp, options) {
  let date = getAppointmentDetails(timestamp);
  date = {
    ...date,
    ...options,
  }

  const newDate = new Date(timestamp);
  newDate.setFullYear(date.year)
  newDate.setMonth(date.month)
  newDate.setDate(date.date)
  newDate.setHours(date.hour)
  newDate.setMinutes(date.minute)
  
  return getAppointmentDetails(newDate)
}


export function timeBetween(timestampA, timestampB) {
  const firstDate = new Date(timestampA);
  const secondDate = new Date(timestampB);

  const result = secondDate - firstDate;
  
  return Math.round(Number(result) / 1000);
}

export function isValid(appointmentTimestamp, currentTimestamp) {
  return timeBetween(currentTimestamp, appointmentTimestamp) > 0;
}
