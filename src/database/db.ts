import mongoose from "mongoose";

// Prefer .env.local with MONGO_URI
const MONGO_URI = process.env.MONGO_URI as string | undefined;

declare global {
  // eslint-disable-next-line no-var
  var _mongoose:
    | { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null }
    | undefined;
}

if (!global._mongoose) {
  global._mongoose = { conn: null, promise: null };
}

/**
 * Connect to MongoDB once (cached across hot reloads in dev)
 * Call at the start of API routes and server data fetches
 */
const connectDB = async () => {
  if (global._mongoose!.conn) return global._mongoose!.conn;

  if (!MONGO_URI) {
    // Graceful dev experience if env not set
    if (process.env.NODE_ENV !== "production") {
      console.warn("[connectDB] MONGO_URI is not set. Skipping DB connection.");
      return null as unknown as typeof mongoose;
    }
    throw new Error("MONGO_URI not set in environment");
  }

  if (!global._mongoose!.promise) {
    global._mongoose!.promise = mongoose
      .connect(MONGO_URI, { bufferCommands: false })
      .then((m: typeof mongoose): typeof mongoose => m);
  }
  global._mongoose!.conn = await global._mongoose!.promise;
  return global._mongoose!.conn;
};

export default connectDB;
