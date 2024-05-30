import ArticleCard from "@/ui/ArticleCard";
import { useLoaderData, useNavigate } from "react-router-dom";
import { deleteBlog } from "@/services/firebase/firebase";
import { useState } from "react";
import AlertOverlay from "@/ui/AlertOverlay";

export default function AllArticles() {
  const blogs = useLoaderData();
  const navigate = useNavigate();

  const [aletVisibility, setAlertVisibility] = useState(false);
  const [alertData, setAlertData] = useState();

  async function deleteArticle(id) {
    console.log("called", id);
    try {
      await deleteBlog(id);
      navigate(0);
      setAlertVisibility(false);
    } catch (err) {
      console.log(err);
    }
  }

  function confirmDelete(id) {
    setAlertData({
      title: "Articled added",
      discription:
        "new articles successfully added to the data base. go to the adit article tab to do any changes ",
      cancelBtnName: "cancel",
      cancelBtnHandler: () => setAlertVisibility(false),
      actionBtnName: "confirm",
      actionBtnHandler: () => deleteArticle(id),
    });
    setAlertVisibility(true);
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
            confirmDelete={confirmDelete}
          />
        );
      })}
      {aletVisibility ? <AlertOverlay alertData={alertData} /> : null}
    </section>
  );
}
