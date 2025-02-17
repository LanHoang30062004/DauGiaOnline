import { format } from "date-fns";
export const convertDateTime = (dateString) => {
    return format(new Date(dateString), "HH:mm:ss dd-MM-yyyy");
};
export const compareTime = (inputTime) => {
    const [timePart, datePart] = inputTime.split(" ");
    const [hours, minutes, seconds] = timePart.split(":").map(Number);
    const [day, month, year] = datePart.split("-").map(Number);

    const inputDate = new Date(year, month - 1, day, hours, minutes, seconds);
    const currentDate = new Date();

    return inputDate < currentDate;
};