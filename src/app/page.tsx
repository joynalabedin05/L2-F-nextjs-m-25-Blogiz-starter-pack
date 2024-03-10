import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/blogs",{
    // cache: "force-cache" by degault behaviour
    next: {
      revalidate: 30,
    }
  });
  const blogs = await res.json();
  // console.log(blogs)
  return (
    <>
       <LatestBlogs blogs={blogs}></LatestBlogs>
    </>
  );
};

export default HomePage;
