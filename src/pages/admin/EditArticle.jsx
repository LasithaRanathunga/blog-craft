import Editor from "./Editor";
import { useLoaderData } from "react-router-dom";

export default function EditArticle() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Editor
        dataArr={data.data}
        otherData={{
          heading: data.heading,
          imgUrl: data.imgUrl,
          discription: data.discription,
        }}
      />
    </div>
  );
}
