import { create } from "zustand";
import { Editor } from "@tiptap/react";

interface EditorState {
  // Add your state properties here
  editor: Editor | null;
  setEditor: (editor: Editor | null) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  editor: null,
  setEditor: (editor) => set({ editor }),
}));
