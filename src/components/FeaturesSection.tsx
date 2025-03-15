import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";

const FEATURES_QUERY = `*[
  _type == "keyFeature"
]|order(publishedAt desc)[0...12]{_id, title, description, "image": image.asset->url, publishedAt}`;

const FEATURE_QUERY = `*[_type == "section" && section == "key-feature-section"][0]{title,description,"image": image.asset->url}`;

const options = { next: { revalidate: 30 } };

export default async function FeaturesSection() {
  const feature = await client.fetch<SanityDocument>(
    FEATURE_QUERY,
    {},
    options
  );
  const features = await client.fetch<SanityDocument[]>(
    FEATURES_QUERY,
    {},
    options
  );
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {feature.title}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {feature.description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 rounded-lg border p-4"
            >
              <div className="grid gap-1 text-center">
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
