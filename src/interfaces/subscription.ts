import { Types } from 'mongoose';

interface ISubscription {
    userId: Types.ObjectId
    classId: Types.ObjectId
    status: string
     }
export default ISubscription;
