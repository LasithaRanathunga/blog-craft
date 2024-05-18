import ArticleCard from "@/ui/ArticleCard";
import { useLoaderData, useNavigate } from "react-router-dom";
import { deleteBlog } from "@/services/firebase/firebase";

export default function AllArticles() {
  const blogs = useLoaderData();
  console.log(blogs);
  const navigate = useNavigate();

  async function deleteArticle(id) {
    console.log("called");
    await deleteBlog(id);
    navigate(0);
  }

  return (
    <section className="grid grid-cols-3 gap-6">
      {blogs.map((blog) => {
        return (
          <ArticleCard
            isEditable={true}
            articleId={blog.id}
            imgUrl={blog.imgUrl}
            discription={blog.discription}
            heading={blog.heading}
            key={blog.id}
            deleteArticle={deleteArticle}
          />
        );
      })}
    </section>
  );
}
