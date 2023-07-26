import mongoose from 'mongoose';
import ICalendar from '../interfaces/calendar';

const calendarSchema = new mongoose.Schema <ICalendar>({
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'classes',
  },
  start: {
    type: String,
  },
  end: {
    type: String,
  },
});

const Calendar = mongoose.model('calendar', calendarSchema);

export default Calendar;
