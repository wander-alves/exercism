import { createAppointment, getAppointmentDetails, isValid, timeBetween, updateAppointment } from "./appointment-time/index.js";

console.log(
  isValid('2022-02-11T23:00:00.000', '2022-02-08T23:00:00.000')
)
