import { getPageMetadata } from "@/lib/Metadata";
import { getOrganizationSchema } from "@/lib/seo";
import Script from "next/script";
import ContactClient from "./ContactClient";

export const metadata = getPageMetadata({
  title: "Contact Us | Perfinexa CloudTech",
  description: "Contact Perfinexa CloudTech for course details, admissions, and corporate training enquiries.",
  path: "/contact",
});

export default function ContactPage() {
  const orgSchema = getOrganizationSchema();

  return (
    <>
      <Script id="local-org-jsonld" type="application/ld+json">
        {JSON.stringify(orgSchema)}
      </Script>

      <ContactClient orgSchema={orgSchema} />
    </>
  );
}
