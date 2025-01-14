import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('connected to monboDB');
  } catch (error) {
    console.error('Connection error:', error.stack);
    process.exit(1);
  }
};

connectDB();
