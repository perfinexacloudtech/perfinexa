import { getPageMetadata } from "@/lib/Metadata";
import { getOrganizationSchema } from "@/lib/seo";
import Script from "next/script";
import CourseClient from "./CourseClient";

export const metadata = getPageMetadata({
  title: "Courses | Perfinexa CloudTech",
  description:
    "Explore our courses: Salesforce, MERN, Java Full Stack, Python Full Stack — hybrid batches in Nagpur.",
  path: "/courses",
});

export default function CoursesPage() {
      const orgSchema = getOrganizationSchema();

  return (
    <>
      <Script id="local-org-jsonld" type="application/ld+json">
        {JSON.stringify(orgSchema)}
      </Script>
      <CourseClient orgSchema={orgSchema} />
    </>
  );
}
