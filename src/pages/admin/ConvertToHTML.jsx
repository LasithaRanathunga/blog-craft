import EditorJS from "@editorjs/editorjs";
import { useEffect, useRef, useState } from "react";
import { Fragment } from "react";

import Header from "@editorjs/header";
//import Checklist from "@editorjs/checklist";
import LinkTool from "@editorjs/link";
import List from "@editorjs/list";
import SimpleImage from "@editorjs/simple-image";

import edjsHTML from "editorjs-html";

export default function ConvertToHTML({ dataArr }) {
  const ref = useRef(null);

  const [isReady, setIsReady] = useState(false);
  const [htmlData, setHtmlData] = useState(null);

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
        data: {
          time: 1552744582955,
          blocks: dataArr,
        },
        onReady: () => {
          console.log("Editor.js is ready to work!");
          setIsReady(true);
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
  }, [dataArr]);

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

        //setHtmlcontent(innerHTML);

        // make a new parser
        const parser = new DOMParser();

        // convert html string into DOM
        const document = parser.parseFromString(innerHTML, "text/html");

        document.body.firstChild.remove();

        setHtmlData(innerHTML);
      })
      .catch((error) => {
        console.log("Saving failed: ", error);
      });
  }

  return (
    <Fragment className="h-vh">
      <div id="editorjs" className="hidden"></div>
      {isReady ? console.log(show()) : null}
      {htmlData ? (
        <section dangerouslySetInnerHTML={{ __html: htmlData }}></section>
      ) : (
        "Loading"
      )}
    </Fragment>
  );
}
