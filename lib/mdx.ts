import fs from "fs";
import matter from "gray-matter";
// @ts-ignore
import mdxPrism from "mdx-prism";
import path from "path";
import readingTime from "reading-time";
import headings from "remark-autolink-headings";
import slug from "remark-slug";
import codeTitle from "remark-code-titles";
import renderToString from "next-mdx-remote/render-to-string";

import MDXComponents from "@/components/MDXComponents";

const root = process.cwd();
const mdxDir = "mdx";

export async function getFiles(type: string) {
  return fs.readdirSync(path.join(root, mdxDir, type));
}

export async function getFileBySlug(type: string, slugPath: any) {
  const source = slugPath
    ? fs.readFileSync(path.join(root, mdxDir, type, `${slugPath}.mdx`), "utf8")
    : fs.readFileSync(path.join(root, mdxDir, `${type}.mdx`), "utf8");

  const { data, content } = matter(source);
  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [headings, slug, codeTitle],
      rehypePlugins: [mdxPrism],
    },
  });

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slugPath || null,
      ...data,
    },
  };
}

export async function getAllFilesFrontMatter(type: string) {
  const files = fs.readdirSync(path.join(root, mdxDir, type));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, mdxDir, type, postSlug),
      "utf8"
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);
}
