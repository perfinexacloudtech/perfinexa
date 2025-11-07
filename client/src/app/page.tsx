import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSections";
import TrendingCourses from "@/components/home/TreandingCourses";
import NewsletterSection from "@/components/home/NewsletterSection";
import { getPageMetadata } from "@/lib/Metadata";
import { getCoursesListSchema } from "@/lib/seo";
import Script from "next/script";

export const metadata = getPageMetadata({
  title: "Perfinexa CloudTech | Practical Tech Courses in Nagpur",
  description:
    "Join Perfinexa CloudTech for hybrid hands-on courses: Salesforce, MERN, Java & Python Full Stack. Local batches in Nagpur.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Script id="courses-list-jsonld" type="application/ld+json">
        {JSON.stringify(getCoursesListSchema())}
      </Script>
      <HeroSection />
      <FeaturesSection />
      <TrendingCourses />
      <NewsletterSection />
    </>
  );
}
