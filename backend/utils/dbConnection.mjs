import mongoose from 'mongoose';

const dbConnect = async () => {
    const connect = await mongoose.connect(process.env.DBSTRING);
    return connect;
};

export default dbConnect;
