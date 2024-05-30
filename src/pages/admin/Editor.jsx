import { Button } from "@/components/ui/button";
import EditorJS from "@editorjs/editorjs";
import { useEffect, useRef, useState } from "react";
import Header from "@editorjs/header";
//import Checklist from "@editorjs/checklist";
import LinkTool from "@editorjs/link";
import List from "@editorjs/list";
import SimpleImage from "./simleImage";
import AlertOverlay from "@/ui/AlertOverlay";

import { addBlog, updateBlog } from "@/services/firebase/firebase";
import { Link, useParams, useNavigate } from "react-router-dom";

import edjsHTML from "editorjs-html";

export default function Editor({ dataArr, otherData }) {
  const ref = useRef(null);
  const LinkRef = useRef(null);
  const { id } = useParams();
  const [aletVisibility, setAlertVisibility] = useState(false);
  const [alertData, setAlertData] = useState();

  const [heading, setHeading] = useState(otherData?.heading || "");
  const [url, setUrl] = useState(otherData?.imgUrl || "");
  const [discription, setDiscription] = useState(otherData?.discription || "");

  const navigate = useNavigate();

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        autofocus: true,
        tools: {
          header: {
            class: Header,
            config: {
              placeholder: "Enter a header",
              levels: [1, 2, 3, 4],
              defaultLevel: 2,
            },
          },
          // checklist: {
          //   class: Checklist,
          //   inlineToolbar: true,
          // },
          linkTool: {
            class: LinkTool,
            config: {
              endpoint: "http://localhost:8008/fetchUrl", // Your backend endpoint for url data fetching,
            },
          },
          list: {
            class: List,
            inlineToolbar: true,
            config: {
              defaultStyle: "unordered",
            },
          },
          image: SimpleImage,
        },
        data: !dataArr ? null : { time: 1552744582955, blocks: dataArr },
      });
      ref.current = editor;
    }

    //Add a return function to handle cleanup
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, [dataArr]);

  function closeAndNavigate(url) {
    setAlertVisibility(false);
    navigate(url);
  }

  function save() {
    ref.current
      .save()
      .then(async (outputData) => {
        try {
          await addBlog(heading, url, discription, outputData.blocks);

          setAlertData({
            title: "Articled added",
            discription:
              "new articles successfully added to the data base. go to the adit article tab to do any changes ",
            cancelBtnName: "ok",
            cancelBtnHandler: () => closeAndNavigate("/admin/edit-article"),
            actionBtnName: null,
            actionBtnHandler: null,
          });
          setAlertVisibility(true);
        } catch (err) {
          console.log(err.message);
          setAlertVisibility(true);
          setAlertData({
            title: "Error",
            discription: err.message,
            cancelBtnName: "ok",
            cancelBtnHandler: () => setAlertVisibility(false),
            actionBtnName: null,
            actionBtnHandler: null,
          });
        }
        // const edjsParser = edjsHTML();
        // const HTML = edjsParser.parse(outputData.blocks);
        // // returns array of html strings per block
        // console.log(HTML);
      })
      .catch((error) => {
        console.log("Saving failed: ", error);
      });
  }

  function update() {
    ref.current
      .save()
      .then(async (outputData) => {
        try {
          await updateBlog(id, heading, url, discription, outputData.blocks);
          setAlertData({
            title: "Articled Updated",
            discription: "changes have been saved to the data base",
            cancelBtnName: "ok",
            cancelBtnHandler: () => closeAndNavigate("/admin/edit-article"),
            actionBtnName: null,
            actionBtnHandler: null,
          });
          setAlertVisibility(true);
        } catch (err) {
          console.log(err.message);
          setAlertVisibility(true);
          setAlertData({
            title: "Error",
            discription: err.message,
            cancelBtnName: "ok",
            cancelBtnHandler: setAlertVisibility,
            actionBtnName: null,
            actionBtnHandler: null,
          });
        }
        // const edjsParser = edjsHTML();
        // const HTML = edjsParser.parse(outputData.blocks);
        // // returns array of html strings per block
        // console.log(HTML);
      })
      .catch((error) => {
        console.log("Update failed: ", error);
      });
  }

  function preview() {
    ref.current
      .save()
      .then((outputData) => {
        //LinkDataRef.current = outputData.blocks;

        const reviewPageData = {
          heading: heading,
          imgUrl: url,
          data: outputData.blocks,
        };

        localStorage.setItem("reviewPageData", JSON.stringify(reviewPageData));

        LinkRef.current.click();

        // let innerHTML = "";

        // const edjsParser = edjsHTML();
        // const HTML = edjsParser.parse(outputData);
        // // returns array of html strings per block

        // HTML.forEach((element) => {
        //   innerHTML += element;
        // });
      })
      .catch((error) => {
        console.log("Saving failed: ", error);
      });
  }

  return (
    <div className="h-vh overflow-auto">
      <form>
        <div className="flex flex-col">
          <label htmlFor="heading">Heading</label>
          <input
            type="text"
            id="heading"
            name="heading"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            className="h-10 w-full border-gray-300 border-2 rounded p-4"
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="url">Image URL</label>
          <input
            type="text"
            name="url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="h-10 w-full border-gray-300 border-2 rounded p-4"
          />
        </div>
        <div className="flex flex-col mt-3 mb-3">
          <label htmlFor="discription">Discription</label>
          <textarea
            name="discription"
            id="discription"
            value={discription}
            onChange={(e) => setDiscription(e.target.value)}
            className="h-36 w-full border-gray-300 border-2 rounded p-4"
          />
        </div>
      </form>
      <label>Content</label>
      <div
        id="editorjs"
        className="border-gray-200 border-2 rounded-md h-5/6 overflow-auto"
      ></div>
      <div className="flex mt-4">
        {!dataArr ? (
          <Button onClick={save}>Publish</Button>
        ) : (
          <Button onClick={update}>Update</Button>
        )}
        <Button onClick={preview} className="ml-4">
          Preview
        </Button>
        <Link
          className="hidden"
          ref={LinkRef}
          to="/preview"
          // state={
          //     {
          //     heading: heading,
          //     imgUrl: url,
          //     data: { ...LinkDataRef.current },
          //   }
          // }
          target="_blank"
        ></Link>
      </div>
      {aletVisibility ? <AlertOverlay alertData={alertData} /> : null}
    </div>
  );
}
