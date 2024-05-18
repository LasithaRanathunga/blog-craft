import { getBlog } from "@/services/firebase/firebase";
import { useLoaderData } from "react-router-dom";
import ConvertToHTML from "./admin/ConvertToHTML";

export default function Article() {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <div className="max-w-4xl mx-auto">
        <h1>{data.heading}</h1>
        <img
          src={data.imgUrl}
          alt="banner image"
          className="mt-2 mb-10 mx-auto w-full rounded-lg"
        />
        <ConvertToHTML dataArr={data.data} />
      </div>
    </div>
  );
}

export async function getArticle(id) {
  const data = await getBlog(id);
  return data;
}
