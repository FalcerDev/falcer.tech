import Container from "@/components/Container";
import BlogCard from "@/components/blog/BlogCard";

import { getAllFilesFrontMatter } from "@/lib/mdx";
import { useState } from "react";

export default function Index({ posts }) {
  const [searchValue, setSearchValue] = useState("");
  const filteredBlogPosts = posts
    .sort(
      (
        a: { publishedAt: string | number | Date },
        b: { publishedAt: string | number | Date }
      ) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter: { title: string }) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  return (
    <Container title="Falcer Website">
      <div className="mt-16 md:px-16 md:grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredBlogPosts.map((x: any, idx: any) => (
          <BlogCard {...x} key={idx} />
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}
