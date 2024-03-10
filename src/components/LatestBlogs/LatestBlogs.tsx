import { BlogPost } from "@/types";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";


const LatestBlogs = ({blogs}: {blogs: BlogPost[]}) => {
    return (
        <div className="w-[90%] mx-auto">
            <h1 className="text-4xl text-center mt-6">Latest Blogs from <span className="text-accent">blogiz</span></h1>
            <p className=" mt-4 text-center w-1/2 text-gray-400 mx-auto"><i>
            Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power.</i></p>
            <div className="grid grid-cols-2 gap-5 mt-7">
                {
                    blogs?.slice(0,2).map(blog=><LatestBlogCard key={blog.id} blog={blog}></LatestBlogCard>)
                }
            </div>
            <div className="grid grid-cols-3 gap-5 mt-7">
                {
                    blogs?.slice(2,5).map(blog=><BlogCard key={blog.id} blog={blog}/>)
                }
            </div>
        </div>
    );
};

export default LatestBlogs;