



import { coursesData } from "@/data/courses";
import CourseDetailsClient from "@/components/CourseDetailsClient";
import { getPageMetadata } from "@/lib/Metadata";
import { getOrganizationSchema,getCourseMetaBySlug, getCourseSchema } from "@/lib/seo";
import Script from "next/script";
import { COURSES } from "@/lib/constant";
import { Metadata } from "next";


export function generateStaticParams() {
  return Object.keys(coursesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
// generate metadata from the SEO helper
return getCourseMetaBySlug(params.slug);
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; 

  console.log("Slug received:", slug);

  const course = coursesData[slug as keyof typeof coursesData];

  if (!course) {
    return <div className="text-center mt-20 text-xl">Course Not Found</div>;
  }

  return (
    <>
      <Script 
        id={`course-jsonld-${course.slug}`} 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getCourseSchema(course)) }}
      />
      <CourseDetailsClient courseData={course} />
    </>
  );
}
