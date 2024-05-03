import { getBlog } from "@/services/firebase/firebase";
import { useLoaderData } from "react-router-dom";
import ConvertToHTML from "./admin/ConvertToHTML";

export default function Article() {
  const data = useLoaderData();

  return (
    <div>
      Article
      <ConvertToHTML dataArr={data.data} />
    </div>
  );
}

export async function getArticle(id) {
  const data = await getBlog(id);
  return data;
}
