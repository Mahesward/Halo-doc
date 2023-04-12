import mongoose, { Schema, model } from 'mongoose';

interface IUser {
    name: string,
    email: string,
    profileURL: string,
    blocked: boolean
}

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    profileURL: {
        type: String,
        required: true
    },
    blocked: {
        type: Boolean,
        required: true
    }
});


const userModel = mongoose.model<IUser>('user', userSchema);
export default userModel; 
