export class DateUtils {
    static formatDateToDot(isoDate) {
        const [year, month, day] = isoDate.split("-");
        return `${day}.${month}.${year}`;
    }

    static formatDateToDash(isoDate) {
        const [day, month, year] = isoDate.split(".");
        return `${year}-${month}-${day}`;
    }
}