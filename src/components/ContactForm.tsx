"use client";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { FormEvent, useState } from "react";
import { Contact, submitContactForm } from "@/actions/submitContactForm";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<Contact>({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log();
    if (!formData) return;
    setLoading(true);
    await submitContactForm(formData);
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    });
    setLoading(false);
  };
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Name
        </label>
        <Input
          id="name"
          placeholder="John"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="john.doe@example.com"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="subject"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Subject
        </label>
        <Input
          id="subject"
          type="text"
          placeholder="Request assistance"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, subject: e.target.value })
          }
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="company"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Company
        </label>
        <Input
          id="company"
          placeholder="Acme Inc."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, company: e.target.value })
          }
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Message
        </label>
        <Textarea
          id="message"
          placeholder="Tell us about your project or inquiry..."
          className="min-h-[120px]"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
      </div>
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </Button>
    </form>
  );
}
