import mongoose from 'mongoose';

export const connectToDatabase = async () => {
    try {
        const uri = process.env.MONGODB_URI || '';
        if (!uri) {
            console.warn('MONGODB_URI not set, skipping database connection');
            return;
        }
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1);
    }
};