import ConvertToHTML from "./ConvertToHTML";

import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export default function Preview() {
  // const { state } = useLocation();
  // console.log(state);

  // const [userData, setUserData] = useState(null);
  // console.log(userData);

  // useEffect(() => {
  //   const dataString = localStorage.getItem("reviewPageData");
  //   console.log(dataString);
  //   if (dataString) {
  //     setUserData(JSON.parse(dataString));
  //   }
  // }, []);

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

export async function getData() {
  const dataString = localStorage.getItem("reviewPageData");
  const dataObj = await JSON.parse(dataString);
  return dataObj;
}
