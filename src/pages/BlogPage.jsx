import BlogItem from "../components/blog/BlogItem";
import BlogNew from "../components/blog/BlogNew";
import BlogTrending from "../components/blog/BlogTrending";

function BlogPage() {
  return (
    <div className="px-5 w-full h-full overflow-hidden flex gap-4 mt-4">
      <div className="flex-1 grid grid-cols-3 gap-2 h-full overflow-auto no-scrollbar pb-36">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
      <div className="w-[320px] flex flex-col gap-2 h-full overflow-auto no-scrollbar pb-36">
        <BlogNew />
        <BlogTrending />
      </div>
    </div>
  );
}

export default BlogPage;
