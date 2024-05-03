import ArticleCard from "@/ui/ArticleCard";

import { getBlogs } from "@/services/firebase/firebase";
import { useLoaderData } from "react-router-dom";

export default function Articles() {
  const articles = useLoaderData();

  console.log(articles);

  return (
    <section className="px-20 mx-auto max-w-screen-xl">
      <div className="flex justify-between items-top w-full mt-12">
        {articles.map((article) => {
          return <ArticleCard articleId={article.id} key={article.id} />;
        })}
        {/* <ArticleCard />
        <ArticleCard />
        <ArticleCard /> */}
      </div>
    </section>
  );
}

export async function getArticles() {
  const blogs = await getBlogs();
  console.log(blogs);
  return blogs;
}
