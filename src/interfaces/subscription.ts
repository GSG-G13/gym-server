import { Types } from 'mongoose';

interface ISubscription {
    userId: Types.ObjectId
    classId: Number
    status: string
     }
export default ISubscription;
