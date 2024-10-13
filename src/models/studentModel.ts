import mongoose, {Schema, Document} from 'mongoose';

export interface IStudent extends Document {
    name: string;
    email: string;
    password: string;
    classId: string;
    grades: Array<{
        subject: string;
        grade: number;
        note: string
    }>
}

const StudentSchema = new Schema<IStudent>({
    name: { 
        type: String,
        required: [true, "Name is required"]   
    },
    email: {
        type: String, 
        required: [true, "Email is required"],
        unique: true
    },
    password: { 
        type: String,
        required: [true, "Password is required"],
    },
    classId: {
        type: String,
        required: [true, "ClassId is required"],
    },
    grades: [
        {
            subject: { type: String, required: true },
            grade: { type: Number, required: true },
            note: { type: String, required: true },
        },
    ],
});

const Student = mongoose.model<IStudent>('Student', StudentSchema);

export default Student;
