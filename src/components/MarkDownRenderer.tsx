import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

type PropType = {
  articlePath: string;
};

const MarkdownRenderer: React.FC<PropType> = ({ articlePath }) => {
  const [markdownContent, setMarkdownContent] = useState("");
  //   const filePath = `/data/article/index.md`;

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      try {
        const response = await fetch(articlePath);
        const content = await response.text();
        setMarkdownContent(content);
      } catch (error) {
        console.error(
          `Error fetching Markdown content from ${articlePath}`,
          error
        );
      }
    };

    fetchMarkdownContent();
  }, [articlePath]);

  return (
    <div className=" bg-slate-900 p-2">
      <ReactMarkdown
        className={" prose max-w-full text-gray-300"}
        remarkPlugins={[remarkGfm, rehypeHighlight]}
        components={{
          // Customize styles for specific elements
          p: ({ node, ...props }) => <p className="text-gray-300" {...props} />,
          h1: ({ node, ...props }) => (
            <h1 className="text-gray-300" {...props}>
              {props.children}
            </h1>
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-gray-300" {...props}>
              {props.children}
            </h2>
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-gray-300" {...props}>
              {props.children}
            </h3>
          ),
          strong: ({ children, ...props }) => (
            <strong className="text-gray-300">{children}</strong>
          ),
        }}
        children={markdownContent}
      ></ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
