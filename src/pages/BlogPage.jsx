import BlogItem from "../components/blog/BlogItem";
import BlogNew from "../components/blog/BlogNew";
import BlogTrending from "../components/blog/BlogTrending";

function BlogPage() {
  return (
    <div className="px-5 w-full h-full overflow-auto flex gap-4 mt-4 flex-wrap no-scrollbar pb-36">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
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
      <div className="w-full flex-shrink-0 xl:w-[320px] flex flex-col gap-2">
        <BlogNew />
        <BlogTrending />
      </div>
    </div>
  );
}

export default BlogPage;
