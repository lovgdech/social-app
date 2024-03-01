import BlogItem from "./BlogItem";

function Blog() {
  return (
    <div className="w-full flex flex-col gap-1 py-2 bg-white rounded-md border border-stone-300">
      <h4 className="font-bold text-lg px-4 py-1">Blog</h4>
      <ul>
        <BlogItem index="1" />
        <BlogItem index="2" />
        <BlogItem index="3" />
        <BlogItem index="4" />
        <BlogItem index="5" />
      </ul>
    </div>
  );
}

export default Blog;
