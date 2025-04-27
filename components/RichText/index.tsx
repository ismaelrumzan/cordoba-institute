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
import { HighlightBoxProps, HighlightBox } from "@/blocks/highlight-box/Component";
import { cn } from "@/utilities/cn";

type NodeTypes = DefaultNodeTypes | SerializedBlockNode<CaptionBlockProps> | SerializedBlockNode<HighlightBoxProps>;

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({
  defaultConverters,
}) => ({
  ...defaultConverters,
  blocks: {
    captionblock: ({ node }) => <CaptionBlock {...node.fields} />,
    highlightbox: ({ node }) => <HighlightBox {...node.fields} />,
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
          "max-w-none prose [&_h1]:mb-5 [&_h2]:my-3 [&_p]:my-3 [&_h3]:my-3 [&_h4]:my-3 [&_h5]:my-2 [&_blockquote]:text-lg [&_blockquote]:my-3 [&_blockquote]:border-l-4 [&_blockquote]:pl-4 [&_blockquote]:italic",
          className
        )}
        {...rest}
      />
    </>
  );
}
