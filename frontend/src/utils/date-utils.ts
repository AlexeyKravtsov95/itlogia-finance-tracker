export class DateUtils {
    static formatDateToDot(isoDate: string): string {
        const [year, month, day] = isoDate.split("-");
        return `${day}.${month}.${year}`;
    }

    static formatDateToDash(isoDate: string): string {
        if (isoDate.includes("-")) return isoDate;

        const [day, month, year] = isoDate.split(".");
        return `${year}-${month}-${day}`;
    }
}