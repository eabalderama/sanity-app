import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";

const HERO_QUERY = `*[_type == "section" && section == "hero-section"][0]{title,description,"image": image.asset->url}`;

const options = { next: { revalidate: 30 } };
export default async function HeroSection() {
  const hero = await client.fetch<SanityDocument>(HERO_QUERY, {}, options);
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                {hero.title}
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                {hero.description}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#contact">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
          <Image
            src={hero.image}
            width={550}
            height={550}
            alt="Hero Image"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
          />
        </div>
      </div>
    </section>
  );
}
