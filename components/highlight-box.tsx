import { JSX } from "react";
import {
  BookOpen,
  CheckCircle,
  Highlighter,
  Pencil,
  MessageCircle,
} from "lucide-react";

export function HighlightBox({
  children,
  title,
  type,
}: {
  children: React.ReactNode;
  title: string;
  type: "reference" | "note" | "check" | "highlight" | "discuss" | "think";
}): JSX.Element {
  let icon;
  if (type === "reference") {
    icon = <BookOpen className="h-5 w-5" />;
  }
  if (type === "check") {
    icon = <CheckCircle className="h-5 w-5" />;
  }
  if (type === "note") {
    icon = <Pencil className="h-5 w-5" />;
  }
  if (type === "highlight") {
    icon = <Highlighter className="h-5 w-5" />;
  }
  if (type === "discuss") {
    icon = <MessageCircle className="h-5 w-5" />;
  }
  return (
    <>
      {type === "think" ? (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-6">
          <h4 className="text-amber-800 flex items-center gap-2 font-medium">
            {title}
          </h4>
          <div className="grid grid-cols-3">
            <p className="text-amber-700 text-lg italic mt-2 col-span-2">
              {children}
            </p>
            <div className="w-fit">
              <img className="w-60 p-0 m-0" src="/images/wise-man-beard.jpg" />
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-6">
          <h4 className="text-amber-800 flex items-center gap-2 font-medium">
            {icon}
            {title}
          </h4>
          <p className="text-amber-700 mt-2">{children}</p>
        </div>
      )}
    </>
  );
}
