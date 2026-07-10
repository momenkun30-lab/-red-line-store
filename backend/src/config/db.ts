import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    // السيرفر سيقوم بقراءة الرابط السري تلقائياً من متغيرات البيئة في Render لحماية بياناتك
    const mongoUrl = process.env.MONGO_URL || '';
    
    if (!mongoUrl) {
      console.error('Database connection error: MONGO_URL variable is missing in environment settings.');
      return;
    }

    const conn = await mongoose.connect(mongoUrl);
    console.log(`MongoDB Connected Safely: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Database connection critical error: ${error}`);
    process.exit(1); // إيقاف التشغيل في حال فشل الاتصال لحماية التطبيق
  }
};
