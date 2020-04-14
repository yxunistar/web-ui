import Dayjs from "dayjs";

export default class Dater {
    static format(date, { format, zone }) {
        let time = null;

        if (date) {
            time = Dayjs(date);
        } else {
            time = Dayjs().utcOffset(0);
        }

        if (zone) {
            time.utcOffset(zone);
        }

        return time.format(format || "HH:mm:ss");
    }
}
