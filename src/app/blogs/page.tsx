
"use client"
import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { BlogPost } from "@/types";

const BlogsPage = () => {
    // const res = await fetch("http://localhost:5000/blogs", {
    //     cache: "no-store"
    // });
    //   const blogs = await res.json();
      const {data:blogs, isLoading, isError, error} = useGetBlogsQuery("");
    //   console.log(blogs)
      console.log(blogs)
    return (
        <div className="w-[90%] mx-auto">
        <div>
            <h1 className="text-4xl text-center mt-6">All Blogs from <span className="text-accent">blogiz</span></h1>
            <p className=" mt-4 text-center w-1/2 text-gray-400 mx-auto"><i>
                Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power.</i></p>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-7">
                {blogs?.map((blog : BlogPost) => <BlogCard key={blog.id} blog={blog} />)}
        </div>
        </div>
    );
};

export default BlogsPage;