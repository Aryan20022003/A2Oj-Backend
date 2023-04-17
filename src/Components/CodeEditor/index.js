import { Fade } from "react-reveal";
import SectionTitle from "../SectionTitle";
import "./codeEditor.css";
import React from "react";
import { useRef, useEffect } from "react";
import Editor from "@monaco-editor/react";
import Issue from "../Issue/Issue";

const CodeEditor = () => {
  const editorRef = useRef(null);
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }
  function showValue(e) {
    alert(editorRef.current.getValue());
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  });
  return (
    <section id="code-editor">
      <SectionTitle title="Code Editor" />
      <Issue title="We are working on this page. Explore others!!" />
      {/* <Fade bottom>
        <div className="codeEditor max-w-full  mx-4 rounded-md p-2 bg-slate-400 bg-opacity-10 backdrop-blur-md shadow-indigo-600 overflow-auto md:mx-11 ">
          <Editor
            height="100%"
            theme="vs-dark"
            className="rounded-lg shadow-lg p-2 h-[60vh] md:h-[78vh] md:p-4"
            defaultLanguage="CPP"
            defaultValue="#include<bits/stdc++.h>"
            onMount={handleEditorDidMount}
          ></Editor>
          <div className="grid-rows-3 gap-2 pt-3">
            <div className="Input py-2 px-1">
              <h2 className="text-2xl pb-3 font-medium text-slate-300">
                Input
              </h2>
              <textarea
                className="bg-zinc-900 overflow-auto w-full h-36 lg:h-44 text-stone-200  text-sm
              focus:outline-0"
              ></textarea>
            </div>
            <div className="Output py-2 px-1">
              <h2 className="text-2xl pb-3 font-medium text-slate-300">
                Output
              </h2>
              <textarea className="bg-zinc-900 overflow-auto w-full h-32 lg:h-40 text-stone-200  text-sm focus:outline-0"></textarea>
            </div>
            <button
              type="button"
              class="px-14 py-2 mx-2 text-base md:text-xl mb-4 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={showValue}
            >
              Run
            </button>
          </div>
        </div>
      </Fade> */}
    </section>
  );
};

export default CodeEditor;
