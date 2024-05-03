import { Button } from "@/components/ui/button";
import EditorJS from "@editorjs/editorjs";
import { useEffect, useRef } from "react";
import { Fragment } from "react";

import Header from "@editorjs/header";
//import Checklist from "@editorjs/checklist";
import LinkTool from "@editorjs/link";
import List from "@editorjs/list";
import SimpleImage from "@editorjs/simple-image";

import { addBlog } from "@/services/firebase/firebase";

import edjsHTML from "editorjs-html";

export default function Editor() {
  const ref = useRef(null);

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
      });
      ref.current = editor;
    }

    //Add a return function to handle cleanup
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);

  function save() {
    ref.current
      .save()
      .then((outputData) => {
        console.log("Article data: ", outputData.blocks);
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

  function show() {
    ref.current
      .save()
      .then((outputData) => {
        console.log("Article data: ", outputData.blocks);

        let innerHTML = "";

        const edjsParser = edjsHTML();
        const HTML = edjsParser.parse(outputData);
        // returns array of html strings per block
        console.log(HTML);

        HTML.forEach((element) => {
          innerHTML += element;
        });

        console.log(innerHTML);
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
        <Button onClick={save}>Save</Button>
        <Button onClick={show} className="ml-4">
          Show
        </Button>
      </div>
    </Fragment>
  );
}
