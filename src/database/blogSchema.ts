import mongoose, { Schema } from "mongoose";

export type IComment = {
  name: string;
  message: string;
  createdAt: Date;
};

export type Blog = {
  title: string;
  slug: string;
  date: Date;
  description: string;
  content: string;
  image: string;
  image_alt: string;
  comments?: IComment[];
};

const commentSchema = new Schema<IComment>({
  name: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: () => new Date() },
});

const blogSchema = new Schema<Blog>({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  date: { type: Date, required: false, default: () => new Date() },
  description: { type: String, required: true },
  image: { type: String, required: true },
  image_alt: { type: String, required: true },
  content: { type: String, required: true },
  comments: { type: [commentSchema], default: [] },
});

const BlogModel =
  mongoose.models["blogs"] || mongoose.model<Blog>("blogs", blogSchema);
export default BlogModel;
