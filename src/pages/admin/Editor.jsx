import { Button } from "@/components/ui/button";
import EditorJS from "@editorjs/editorjs";
import { useEffect, useRef, useState } from "react";
import { Fragment } from "react";

import Header from "@editorjs/header";
//import Checklist from "@editorjs/checklist";
import LinkTool from "@editorjs/link";
import List from "@editorjs/list";
import SimpleImage from "./simleImage";

import { addBlog, updateBlog } from "@/services/firebase/firebase";
import { Link, useParams } from "react-router-dom";

import edjsHTML from "editorjs-html";

export default function Editor({ dataArr }) {
  const ref = useRef(null);
  const { id } = useParams();

  const [heading, setHeading] = useState();
  const [url, setUrl] = useState();
  const [discription, setDiscription] = useState();

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

  function save() {
    ref.current
      .save()
      .then((outputData) => {
        addBlog(heading, url, discription, outputData.blocks);
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
      .then((outputData) => {
        updateBlog(id, outputData.blocks);
        // const edjsParser = edjsHTML();
        // const HTML = edjsParser.parse(outputData.blocks);
        // // returns array of html strings per block
        // console.log(HTML);
      })
      .catch((error) => {
        console.log("Saving failed: ", error);
      });
  }

  function show() {
    ref.current
      .save()
      .then((outputData) => {
        let innerHTML = "";

        const edjsParser = edjsHTML();
        const HTML = edjsParser.parse(outputData);
        // returns array of html strings per block

        HTML.forEach((element) => {
          innerHTML += element;
        });
      })
      .catch((error) => {
        console.log("Saving failed: ", error);
      });
  }

  return (
    <Fragment className="h-vh overflow-auto">
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
        <Button onClick={show} className="ml-4">
          <Link to="/preview"></Link>Preview
        </Button>
      </div>
    </Fragment>
  );
}
