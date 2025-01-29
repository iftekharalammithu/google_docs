"use client";
import { cn } from "@/lib/utils";
import { useEditorStore } from "@/Store/use-editor-store";
import { LucideIcon, Undo2Icon } from "lucide-react";
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
        isActived && "bg-neutral-200/80"
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
        // isActived: true,
      },
    ],
  ];
  return (
    <div className="bg-slate-100 px-2.5 py-0.5 rounded-sm min-h-[40px] flex items-center gap-x-1">
      {section[0].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
    </div>
  );
};

export default Toolbar;
