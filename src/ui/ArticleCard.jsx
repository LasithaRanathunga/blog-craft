import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";

export default function ArticleCard({ articleId, isEditable }) {
  return (
    <div className={!isEditable ? "max-w-[30%]" : "max-w-[100%]"}>
      <img
        src="https://t4.ftcdn.net/jpg/05/85/03/65/360_F_585036500_u2PzD55XLfS4OY5IbyZNOwCw8mnCmkDP.jpg"
        className="rounded-lg"
      />
      <h3 className="font-semibold mt-6 mb-2 text-lg">
        How Vertical Farming is Revolutionizing Urban Agriculture
      </h3>
      <p className="text-xs text-gray-500 font-medium">
        Discover how vertical farming is reshaping urban landscapes, maximizing
        space, and revolutionizing access to fresh produce in densely populated
        areas
      </p>
      {!isEditable ? (
        <Button className="mt-4 p-3">
          <Link to={articleId}> Read More...</Link>
        </Button>
      ) : (
        <>
          <Button className="mt-4 p-3 ">
            <Link to={articleId}>Edit</Link>
          </Button>
          <Button className="mt-4 p-3 ml-3">
            <Link to={articleId}>Preview</Link>
          </Button>
        </>
      )}
    </div>
  );
}
