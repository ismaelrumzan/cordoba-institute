import {
  DefaultNodeTypes,
  SerializedBlockNode,
} from "@payloadcms/richtext-lexical";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import {
  JSXConvertersFunction,
  RichText as RichTextWithoutBlocks,
} from "@payloadcms/richtext-lexical/react";
import { CaptionBlock, CaptionBlockProps } from "@/blocks/caption/Component";
import { cn } from "@/utilities/cn";

type NodeTypes = DefaultNodeTypes | SerializedBlockNode<CaptionBlockProps>;

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({
  defaultConverters,
}) => ({
  ...defaultConverters,
  blocks: {
    captionblock: ({ node }) => <CaptionBlock {...node.fields} />,
  },
});

type Props = {
  data: SerializedEditorState;
} & React.HTMLAttributes<HTMLDivElement>;

export default function RichText(props: Props) {
  const { className, ...rest } = props;
  return (
    <>
      <RichTextWithoutBlocks
        converters={jsxConverters}
        className={cn(
          "max-w-none prose [&_h1]:mb-5 [&_h2]:my-3 [&_p]:my-3 [&_h3]:my-3 [&_h4]:my-3 [&_h5]:my-2",
          className
        )}
        {...rest}
      />
    </>
  );
}
