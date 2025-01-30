"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import BulletList from "@tiptap/extension-bullet-list";
import Table from "@tiptap/extension-table";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import Image from "@tiptap/extension-image";
import FontFamily from "@tiptap/extension-font-family";

import ImageResize from "tiptap-extension-resize-image";
import { useEditorStore } from "@/Store/use-editor-store";
import Underline from "@tiptap/extension-underline";
import TextStyle from "@tiptap/extension-text-style";

const Editor = () => {
  const { setEditor } = useEditorStore();
  const editor = useEditor({
    onCreate({ editor }) {
      setEditor(editor);
    },
    onDestroy() {
      setEditor(null);
    },
    onUpdate({ editor }) {
      setEditor(editor);
    },
    onSelectionUpdate({ editor }) {
      setEditor(editor);
    },
    onTransaction({ editor }) {
      setEditor(editor);
    },
    onFocus({ editor }) {
      setEditor(editor);
    },
    onBlur({ editor }) {
      setEditor(editor);
    },
    onContentError({ editor }) {
      setEditor(editor);
    },

    extensions: [
      StarterKit,
      FontFamily,
      Underline,
      ImageResize,
      TextStyle,
      Document,
      BulletList,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      Image,
    ],
    content: `
        <table>
          <tr>
            <td>Product A</td>
            <td>$199.99</td>
            <td>In Stock</td>
          </tr>
          <tr>
            <td>Product B</td>
            <td>$149.50</td>
            <td>Low Stock</td>
          </tr>
          <tr>
            <td>Product C</td>
            <td>$299.99</td>
            <td>Out of Stock</td>
          </tr>
        </table>
        <p>This is a basic example of implementing images. Drag to re-order.</p>
        <img src="https://placehold.co/800x400" />
        <img src="https://placehold.co/800x400/6A00F5/white" />
      `,
    // content: "<p>Hello World! 🌎️</p>",
    editorProps: {
      attributes: {
        class:
          "focus:outline-none print:border-0 bg-white border border-black flex flex-col min-h-[1024px] w-[816px] pt-10  pr-14 pb-10 cursor-text ",
        style: "padding-left: 56px; padding-right: 56px;",
      },
    },
  });

  return (
    <div className="size-full overflow-x-auto  bg-slate-200 px-4 print:p-0 print:bg-white print:overflow-visible">
      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Editor;
