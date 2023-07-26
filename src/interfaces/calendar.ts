import { Types } from 'mongoose';

interface ICalendar {
    classId: Types.ObjectId
    start: string,
    end: string,
}
export default ICalendar;
