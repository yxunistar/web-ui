import Moment from "moment";

export default class Dater {
    static format(date, { format, zone }) {
        let time = null;

        if (date) {
            time = Moment(date);
        } else {
            time = Moment().utcOffset(0);
            time.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
            time.toISOString();
        }

        if (zone) {
            time.utcOffset(zone);
        }

        return time.format(format || "HH:mm:ss");
    }
}
