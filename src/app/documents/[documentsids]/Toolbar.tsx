"use client";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useEditorStore } from "@/Store/use-editor-store";
import {
  BoldIcon,
  CheckIcon,
  ItalicIcon,
  LucideIcon,
  MessageSquareIcon,
  PrinterIcon,
  Redo2Icon,
  Underline,
  Undo2Icon,
} from "lucide-react";
import React from "react";

interface ToolbarButtonprops {
  onclick?: () => void;
  isActived?: boolean;
  icon: LucideIcon;
}

const ToolbarButton = ({
  onclick,
  isActived,
  icon: Icon,
}: ToolbarButtonprops) => {
  return (
    <button
      onClick={onclick}
      className={cn(
        "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
        isActived && "bg-neutral-400/80"
      )}
    >
      <Icon className="size-4" />
    </button>
  );
};

const Toolbar = () => {
  const { editor } = useEditorStore();

  const section: {
    label: string;
    icon: LucideIcon;
    onclick?: () => void;
    isActived?: boolean;
  }[][] = [
    [
      {
        label: "Undo",
        icon: Undo2Icon,
        onclick: () => {
          editor?.chain().focus().undo().run();
        },
      },
      {
        label: "Redo",
        icon: Redo2Icon,
        onclick: () => {
          editor?.chain().focus().redo().run();
        },
      },
      {
        label: "Print",
        icon: PrinterIcon,
        onclick: () => {
          window.print();
        },
      },
      {
        label: "Spell Check",
        icon: CheckIcon,
        onclick: () => {
          const current = editor?.view.dom.getAttribute("spellcheck");
          editor?.view.dom.setAttribute(
            "spellcheck",
            current === "true" ? "false" : "true"
          );
        },
      },
    ],
    [
      {
        label: "Bold",
        icon: BoldIcon,
        onclick: () => {
          editor?.chain().focus().toggleBold().run();
        },
        isActived: editor?.isActive("bold"),
      },
      {
        label: "Italic",
        icon: ItalicIcon,
        onclick: () => {
          editor?.chain().focus().toggleItalic().run();
        },
        isActived: editor?.isActive("italic"),
      },
      {
        label: "Underline",
        icon: Underline,
        onclick: () => {
          editor?.chain().focus().toggleUnderline().run();
        },
        isActived: editor?.isActive("underline"),
      },
    ],
    [
      {
        label: "Comment",
        icon: MessageSquareIcon,
        onclick: () => {
          editor?.chain().focus().toggleComment().run();
        },
        isActived: editor?.isActive("comment"),
      },
    ],
  ];
  return (
    <div className="bg-slate-100 px-2.5 py-0.5 rounded-sm min-h-[40px] flex items-center gap-x-1">
      {section[0].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />

      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      {section[1].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />

      {section[2].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
    </div>
  );
};

export default Toolbar;
