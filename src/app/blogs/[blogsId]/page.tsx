import BlogDetails from "@/components/ui/BlogDetails";
import { BlogPost } from "@/types";

type BlogId = {
    params: {
        blogsId: string;
    }
}

// generate static params

export const generateStaticParams = async() =>{
    const res = await fetch('http://localhost:5000/blogs');
    const blogs = await res.json();
    return blogs.slice(0,3).map((blog: BlogPost)=>({
        blogsId: blog.id,
    }));
}
const BlogDetailPage = async ({params}: BlogId) => {
    // console.log(params);
    const res = await fetch(`http://localhost:5000/blogs/${params.blogsId}`, {
        cache: "no-store"
    });
    const blog = await res.json();
    // console.log(blog);
    return (
        <div className="my-10">
            <h1>BlogDetailPage</h1>
            <BlogDetails blog={blog}/>
        </div>
    );
};

export default BlogDetailPage;
