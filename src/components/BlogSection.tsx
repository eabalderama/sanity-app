import Image from "next/image";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, "image": image.asset->url, publishedAt}`;

const BLOG_QUERY = `*[_type == "section" && section == "blog-section"][0]{title,description,"image": image.asset->url}`;

const options = { next: { revalidate: 30 } };

export default async function BlogSection() {
  const blog = await client.fetch<SanityDocument>(BLOG_QUERY, {}, options);
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  return (
    <section id="blog" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {blog.title}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {blog.description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="p-0">
                <Image
                  src={post.image}
                  width={400}
                  height={200}
                  alt={post.title}
                  className="w-full object-cover"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription className="mt-2">
                  {post.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between p-4 pt-0 text-sm text-muted-foreground">
                <div>{post.date}</div>
                <div>{post.readTime}</div>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Button variant="outline">View All Posts</Button>
        </div>
      </div>
    </section>
  );
}
