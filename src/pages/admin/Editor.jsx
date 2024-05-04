import { Button } from "@/components/ui/button";
import EditorJS from "@editorjs/editorjs";
import { useEffect, useRef } from "react";
import { Fragment } from "react";

import Header from "@editorjs/header";
//import Checklist from "@editorjs/checklist";
import LinkTool from "@editorjs/link";
import List from "@editorjs/list";
import SimpleImage from "@editorjs/simple-image";

import { addBlog, updateBlog } from "@/services/firebase/firebase";
import { Link, useParams } from "react-router-dom";

import edjsHTML from "editorjs-html";

export default function Editor({ dataArr }) {
  const ref = useRef(null);
  const { id } = useParams();

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
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
          image: {
            class: SimpleImage,
            inlineToolbar: true,
            config: {
              placeholder: "Paste image URL",
            },
          },
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
        addBlog(outputData.blocks);
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
    <Fragment className="h-vh">
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
