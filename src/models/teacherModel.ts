import mongoose, { Schema, Document } from 'mongoose';

export interface ITeacher extends Document {
  name: string;
  email: string;
  password: string;
  classId: mongoose.Types.ObjectId;
}

const TeacherSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  classId: {
    type: mongoose.Types.ObjectId,
    ref: 'Class',
    required: true,
  },
}, {
  timestamps: true, 
});

const Teacher = mongoose.model<ITeacher>('Teacher', TeacherSchema);

export default Teacher;
