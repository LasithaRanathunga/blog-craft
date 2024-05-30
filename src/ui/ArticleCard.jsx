import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";

export default function ArticleCard({
  articleId,
  isEditable,
  confirmDelete,
  imgUrl,
  heading,
  discription,
}) {
  return (
    <div className={"max-w-[100%]"}>
      <img src={imgUrl} className="rounded-lg" />
      <h3 className="font-semibold mt-6 mb-2 text-lg">{heading}</h3>
      <p className="text-xs text-gray-500 font-medium">{discription}</p>
      {!isEditable ? (
        <Button asChild className="mt-4 p-3">
          <Link to={`/articles/${articleId}`}> Read More...</Link>
        </Button>
      ) : (
        <>
          <Button asChild className="mt-4 p-3 ">
            <Link to={articleId}>Edit</Link>
          </Button>
          <Button asChild className="mt-4 p-3 ml-3">
            <Link to={articleId}>Preview</Link>
          </Button>
          <Button
            variant="destructive"
            className="mt-4 p-3 ml-3 "
            onClick={() => confirmDelete(articleId)}
          >
            Delete
          </Button>
        </>
      )}
    </div>
  );
}
