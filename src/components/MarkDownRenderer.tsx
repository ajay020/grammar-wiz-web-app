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
    <div className=" bg-gray-700 w-2/3">
      <ReactMarkdown
        className={"bg-gray-600 prose max-w-full"}
        remarkPlugins={[remarkGfm, rehypeHighlight]}
        components={{
          // Customize styles for specific elements
          p: ({ node, ...props }) => <p className="text-red-200" {...props} />,
          // Add more customized components as needed
        }}
        children={markdownContent}
      ></ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
