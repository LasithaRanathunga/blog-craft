import ArticleCard from "@/ui/ArticleCard";

import { getBlogs } from "@/services/firebase/firebase";
import { useLoaderData } from "react-router-dom";

export default function Articles() {
  const articles = useLoaderData();

  return (
    <section className="px-20 mx-auto max-w-screen-xl">
      <div className="md:grid lg:grid-cols-3 md:grid-cols-2 gap-4 lg:w-full   mt-12 text-center">
        {articles.map((article) => {
          return (
            <ArticleCard
              articleId={article.id}
              isEditable={false}
              imgUrl={article.imgUrl}
              discription={article.discription}
              heading={article.heading}
              key={article.id}
            />
          );
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
  return blogs;
}
