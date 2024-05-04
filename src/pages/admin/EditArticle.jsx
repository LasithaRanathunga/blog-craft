import Editor from "./Editor";
import { useLoaderData } from "react-router-dom";

export default function EditArticle() {
  const data = useLoaderData();

  return (
    <div>
      <Editor dataArr={data.data} />
    </div>
  );
}
