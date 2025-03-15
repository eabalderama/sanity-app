import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";
import { SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

const CONTACT_FORM_QUERY = `*[_type == "section" && section == "contact-form-section"][0]{title,description,"image": image.asset->url}`;
const CONTACT_DETAIL_QUERY = `*[_type == "section" && section == "contact-detail-section"][0]{title,description,"image": image.asset->url}`;

const options = { next: { revalidate: 30 } };

export default async function ContactFormSection() {
  const contactForm = await client.fetch<SanityDocument>(
    CONTACT_FORM_QUERY,
    {},
    options
  );
  const contactDetail = await client.fetch<SanityDocument>(
    CONTACT_DETAIL_QUERY,
    {},
    options
  );
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {contactDetail.title}
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {contactDetail.description}
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span>contact@company.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span>
                  123 Business Street, Suite 100, San Francisco, CA 94107
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-4 rounded-lg border p-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">{contactForm.title}</h3>
              <p className="text-muted-foreground">{contactForm.description}</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
