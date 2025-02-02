"use client";
import { DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useEditorStore } from "@/Store/use-editor-store";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {
  BoldIcon,
  CheckIcon,
  ChevronDownIcon,
  ItalicIcon,
  ListTodoIcon,
  LucideIcon,
  MessageSquareIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  Underline,
  Undo2Icon,
} from "lucide-react";
import React from "react";
import { type ColorResult, CirclePicker, SketchPicker } from "react-color";

interface ToolbarButtonprops {
  onclick?: () => void;
  isActived?: boolean;
  icon: LucideIcon;
}

const Textcolorbutton = () => {
  const { editor } = useEditorStore();
  const value = editor?.getAttributes("textStyle").color || "black";
  const onchange = (color: ColorResult) => {
    editor?.chain().focus().setColor(color.hex).run();
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 min-w-7 shrink-0 flex items-center justify-center rounded-sm hover:bg-neutral-500/80 px-1.5 text-sm overflow-hidden">
          <span>A</span>
          <div
            className="h-0.5 w-full"
            style={{ backgroundColor: value }}
          ></div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2 ">
        <CirclePicker color={value} onChange={onchange} />
        <SketchPicker color={value} onChange={onchange}></SketchPicker>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const Heading = () => {
  const { editor } = useEditorStore();
  const heading = [
    { label: "Normal Text", value: 0, fontSize: "16px" },
    { label: "Heading 1", value: 1, fontSize: "32px" },
    { label: "Heading 2", value: 2, fontSize: "24px" },
    { label: "Heading 3", value: 3, fontSize: "20px" },
    { label: "Heading 4", value: 4, fontSize: "18px" },
  ];

  const getcurrentheading = () => {
    for (let i = 0; i <= heading.length; i++) {
      if (editor?.isActive("Heading", i)) {
        return `Heading ${i}`;
      }
    }
    return "Normal Text";
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "h-7 min-w-7 shrink-0 flex items-center justify-center rounded-sm hover:bg-neutral-500/80 px-1.5 text-sm overflow-hidden"
          )}
        >
          <span className="truncate">{getcurrentheading()}</span>
          <ChevronDownIcon className="size-4 ml-2 shrink-0" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" p-1 flex flex-col gap-y-1">
        {heading.map(({ label, value, fontSize }) => (
          <button
            key={value}
            style={{ fontSize }}
            className={cn(
              " flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-slate-400/80",
              (value === 0 && editor?.isActive("Heading", 0)) ||
                (editor?.isActive("Heading", { level: value }) &&
                  "bg-slate-400/80")
            )}
            onClick={() => {
              if (value === 0) {
                editor?.chain().focus().setParagraph().run();
              } else {
                editor?.chain().focus().setHeading({ level: value }).run();
              }
            }}
          >
            {label}
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
const FontFamily = () => {
  const { editor } = useEditorStore();
  const fonts = [
    {
      label: "Arial",
      value: "Arial",
    },
    {
      label: "Times New Roman",
      value: "Times New Roman",
    },
    {
      label: "Verdana",
      value: "Verdana",
    },
    {
      label: "Georgia",
      value: "Georgia",
    },
    {
      label: "Tahoma",
      value: "Tahoma",
    },
    {
      label: "Garamond",
      value: "Garamond",
    },
    {
      label: "Courier New",
      value: "Courier New",
    },
    {
      label: "Trebuchet MS",
      value: "Trebuchet MS",
    },
    {
      label: "Impact",
      value: "Impact",
    },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "h-7 w-[120px] shrink-0 flex items-center justify-center rounded-sm hover:bg-neutral-500/80 px-1.5 text-sm overflow-hidden"
          )}
        >
          <span className="truncate">
            {editor?.getAttributes("fontFamily").fontFamily || "Arial"}
          </span>
          <ChevronDownIcon className="size-4 ml-2 shrink-0" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" p-1 flex flex-col gap-y-1">
        {fonts.map(({ label, value }) => (
          <button
            onClick={() => editor?.chain().focus().setFontFamily(value).run()}
            className={cn(
              " flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-slate-400/80",
              editor?.getAttributes("textStyle").fontFamily === value &&
                "bg-slate-400/80"
            )}
            key={value}
            style={{ fontFamily: value }}
          >
            {label}
            <span className="text-sm font-light ">{label}</span>
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

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
      {
        label: "Todo List",
        icon: ListTodoIcon,
        onclick: () => {
          editor?.chain().focus().toggleTaskList().run();
        },
        isActived: editor?.isActive("taskList"),
      },
      {
        label: "Remove formatting",
        icon: RemoveFormattingIcon,
        onclick: () => {
          editor?.chain().focus().clearNodes().unsetAllMarks().run();
        },
        isActived: false,
      },
    ],
  ];
  return (
    <div className="bg-slate-100 px-2.5 py-0.5 rounded-sm min-h-[40px] flex items-center gap-x-1">
      {section[0].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      <FontFamily></FontFamily>
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      <Heading />
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      {section[1].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      <Textcolorbutton />
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      {section[2].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
    </div>
  );
};

export default Toolbar;
