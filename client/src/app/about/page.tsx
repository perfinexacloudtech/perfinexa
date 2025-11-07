import { getPageMetadata } from "@/lib/Metadata";
import { getOrganizationSchema } from "@/lib/seo";
import Script from "next/script";
import AboutClient from "./AboutClient";

export const metadata = getPageMetadata({
  title: "About Us | Perfinexa CloudTech",
  description:
    "About Perfinexa CloudTech: mission, instructors, and hybrid courses in Nagpur for job-ready skills.",
  path: "/about",
});

<Script id="local-org-jsonld" type="application/ld+json">
  {JSON.stringify(getOrganizationSchema())}
</Script>;

export default function AboutPage() {
  const orgSchema = getOrganizationSchema();
  return <AboutClient orgSchema={orgSchema} />;
}
