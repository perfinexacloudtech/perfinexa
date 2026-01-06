import connectDB from "@/lib/db";
import Blog from "@/models/blogs";
import BlogFeed from "@/components/common/BlogFeed";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  await connectDB();

  const blogs = await Blog.find()
    .sort({ createdAt: -1 })
    .lean();

  const serializedBlogs = blogs.map((blog) => ({
    ...blog,
    _id: blog._id.toString(),
    createdAt: blog.createdAt?.toISOString(),
    updatedAt: blog.updatedAt?.toISOString(),
  }));

  return <BlogFeed initialBlogs={serializedBlogs} />;
}
