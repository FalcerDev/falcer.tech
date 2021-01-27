import NextLink from "next/link";

export default function BlogCard({
  title,
  banner,
  description,
  slug,
  publishedAt,
  author,
}: {
  title: string;
  banner: string;
  description: string;
  publishedAt: string;
  slug: string;
  author: string;
}) {
  return (
    <NextLink href={`/blog/${slug}`}>
      <a>
        <div className="w-auto cursor-pointer">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl">
            <img src={banner} alt={`${banner}`} className="rounded-t-lg" />
            <div className="p-6">
              <h2 className="font-bold text-xl md:text-3xl mb-2 text-gray-900 dark:text-gray-100">
                {title}
              </h2>
              <p className="text-gray-900 dark:text-gray-100 mb-2">
                <small>
                  {author} - {`published at ${publishedAt}`}
                </small>
              </p>
              <p className="text-gray-900 dark:text-gray-100">{description}</p>
            </div>
          </div>
        </div>
      </a>
    </NextLink>
  );
}
