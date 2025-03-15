import { SanityDocument } from "next-sanity";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { client } from "@/sanity/client";

const FAQS_QUERY = `*[
  _type == "faq"
]{_id, question, answer}`;

const FAQ_QUERY = `*[_type == "section" && section == "faq-section"][0]{title,description,"image": image.asset->url}`;

const options = { next: { revalidate: 30 } };

export default async function FaqSection() {
  const faq = await client.fetch<SanityDocument>(FAQ_QUERY, {}, options);
  const faqs = await client.fetch<SanityDocument[]>(FAQS_QUERY, {}, options);
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {faq.title}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {faq.description}
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl space-y-4 py-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
