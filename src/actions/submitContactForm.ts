"use server";

import { client } from "@/sanity/client";

export type Contact = {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
  submittedAt?: Date;
};
export const submitContactForm = async (contact: Contact) => {
  try {
    const document = await client.create({
      _type: "contactFormSubmissions",
      ...contact,
      submittedAt: new Date().toISOString(),
    });
    console.log("Document created:", document);
    // Display success message
  } catch (error) {
    console.error("Error creating document:", error);
    // Display error message
  }
};
