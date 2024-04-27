import { Button } from "@/components/ui/button";
import EditorJS from "@editorjs/editorjs";
import { useEffect, useRef } from "react";
import { Fragment } from "react";

import Header from "@editorjs/header";
import Checklist from "@editorjs/checklist";
import LinkTool from "@editorjs/link";
import List from "@editorjs/list";
import SimpleImage from "@editorjs/simple-image";

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
              levels: [2, 3, 4],
              defaultLevel: 3,
            },
          },
          checklist: {
            class: Checklist,
            inlineToolbar: true,
          },
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
        console.log("Article data: ", outputData);
      })
      .catch((error) => {
        console.log("Saving failed: ", error);
      });
  }

  return (
    <Fragment className="h-full">
      <div id="editorjs" className="border-gray-200 border-2 rounded-md"></div>
      <Button onClick={save}>Show</Button>
    </Fragment>
  );
}
