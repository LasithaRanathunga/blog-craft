import ArticleCard from "@/ui/ArticleCard";
import { useLoaderData } from "react-router-dom";

export default function AllArticles() {
  const blogs = useLoaderData();
  console.log(blogs);

  return (
    <section className="grid grid-cols-3 gap-6">
      {blogs.map((blog) => {
        return (
          <ArticleCard isEditable={true} articleId={blog.id} key={blog.id} />
        );
      })}
    </section>
  );
}
