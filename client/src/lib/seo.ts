// /lib/seo.ts
import type { Metadata } from "next";
import { ORG_NAME, DOMAIN, CITY, COURSES } from "@/lib/constant";
import { getPageMetadata } from "@/lib/Metadata"; // <-- You forgot this import

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: ORG_NAME,
    url: DOMAIN,
    logo: `${DOMAIN}/logo.png`,
    email: "perfinexacloudtech@gmail.com",
    telephone: "+91 9511961046",
    address: {
      "@type": "PostalAddress",
      addressLocality: CITY,
      addressCountry: "IN",
    },
    description:
      "Perfinexa CloudTech is a leading IT training institute offering Salesforce, MERN Stack, Java Full Stack & Python Full Stack training in Nagpur and online.",
    sameAs: [
      "https://www.instagram.com/perfinexa_technologies",
      "https://www.linkedin.com/company/perfinexacloudtech/posts/",
    ],
  };
}

export function getCourseSchema(course: any) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: ORG_NAME,
      url: DOMAIN,
    },
    keywords: [
      "Perfinexa CloudTech Nagpur",
      "Perfinexa CloudTech Salesforce classes",
      "Perfinexa CloudTech Java Full Stack classes",
      "Perfinexa CloudTech Python Full Stack classes",
      "Perfinexa CloudTech MERN Stack classes",
      "Perfinexa CloudTech IT training institute",
      "Perfinexa CloudTech online classes",
      "Perfinexa CloudTech placement assistance",
      "Perfinexa CloudTech certification courses",
      "Perfinexa CloudTech course fees",
      "Perfinexa CloudTech free demo classes",
      "Perfinexa CloudTech admission",
      "Perfinexa CloudTech contact number",
      "Perfinexa CloudTech email",
      "Perfinexa CloudTech address Nagpur",
      "Perfinexa CloudTech student reviews",
      "Perfinexa CloudTech best IT institute in Nagpur",

      "IT Training Institute in Nagpur",
      "software training institute in Nagpur",
      "Software training institute Nagpur",
      "best IT classes in Nagpur",
      "top computer classes in Nagpur",
      "job oriented courses in Nagpur",
      "IT courses after graduation in Nagpur",
      "IT courses for freshers with placement Nagpur",
      "best coaching for software courses in Nagpur",

      "Salesforce developer classes in Nagpur",
      "Best Salesforce classes in Nagpur",
      "Salesforce course in Nagpur with placement",
      "Salesforce training institute in Nagpur",
      "Salesforce certification course in Nagpur",
      "Salesforce Admin course in Nagpur",
      "Salesforce Developer course in Nagpur",
      "Best Salesforce institute in Nagpur",
      "Top Salesforce training in Nagpur",
      "Salesforce coaching classes in Nagpur",
      "Salesforce training with placement in Nagpur",
      "Salesforce course fees in Nagpur",
      "Salesforce course for freshers in Nagpur",
      "Salesforce course after graduation in Nagpur",
      "Salesforce course for beginners",
      "Salesforce training with job assistance",
      "Salesforce certification training",
      "Salesforce course with internship",
      "Salesforce Admin and Developer training",
      "Salesforce CRM course for beginners",
      "Salesforce course near me with placement",
      "Salesforce online training with certification",
      "Salesforce online training for beginners",
      "Salesforce course with job guarantee",
      "Salesforce certification exam preparation",

      "Java Full Stack classes in Nagpur",
      "Java Full Stack course with placement Nagpur",
      "Java Full Stack training institute Nagpur",
      "Core Java + Advanced Java + Spring Boot classes",
      "Best Java Full Stack course in Nagpur",
      "Java Full Stack developer course in Nagpur",
      "Java Full Stack course for beginners in Nagpur",
      "Java Full Stack certification course in Nagpur",
      "Java Full Stack online classes",
      "Java Full Stack classes near me",
      "Java Full Stack course with certificate",
      "Java Full Stack course fees in Nagpur",
      "Java Full Stack training with placement in Nagpur",
      "Java Full Stack project examples",
      "Java Full Stack application with React and Spring Boot",

      "Python classes in Nagpur",
      "Python Full Stack training in Nagpur",
      "Python Full Stack developer course with placement",
      "Python Django training in Nagpur",
      "Best Python institute in Nagpur",
      "Python Full Stack developer course in Nagpur",
      "Python Full Stack course for beginners in Nagpur",
      "Python Full Stack certification course in Nagpur",
      "Python Full Stack online classes",
      "Python Full Stack classes near me",
      "Python Full Stack course with certificate",
      "Python Full Stack course fees in Nagpur",
      "Python Full Stack training with placement in Nagpur",
      "Python Full Stack project examples",
      "Python Full Stack application examples",
      "MERN Stack classes in Nagpur",
      "MERN Stack course with placement",
      "MERN Stack training institute Nagpur",
      "MERN Stack developer course",
      "Best MERN Stack course",
      "MERN Stack certification course",
      "MERN Stack online classes",
      "MERN Stack classes near me",
      "MERN Stack course with certificate",
      "MERN Stack course fees",
      "MERN Stack course free",
      "Complete MERN Stack course",
      "MERN Stack bootcamp",
      "MERN Stack roadmap",
      "MERN Stack syllabus",
      "MERN Stack course for beginners",
      "MERN Stack project examples",
      "MERN Stack application examples",
      "MERN Stack CRUD operations project",
      "Chat application using MERN Stack",
      "E-commerce project using MERN Stack",
      "Employee management system project using MERN Stack",
      "Best way to learn MERN Stack",
      "MERN Stack course Coursera",
      "MERN Stack course for freshers",
      "MERN Stack certification free",
      "MERN Stack advanced projects",
      "MERN Stack architecture",
    ],
    courseMode: course.mode,
    timeRequired: course.duration,
  };
}

export function getCoursesListSchema(courses = COURSES) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    numberOfItems: courses.length,
    itemListElement: courses.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Course",
        name: c.title,
        description: c.description,
        url: `${DOMAIN}/courses/${c.slug}`,
      },
    })),
  };
}

export function getCourseMetaBySlug(slug: string): Metadata {
  const course = COURSES.find((c) => c.slug === slug);

  if (!course) {
    return getPageMetadata({
      title: `${ORG_NAME} | Course`,
      description: `Perfinexa CloudTech - quality tech courses in Nagpur.`,
    });
  }

  const title = `${course.title} | ${ORG_NAME}`;
  const description = `${course.description} Join our ${course.duration} ${course.mode} program in Nagpur.`;

  return getPageMetadata({
    title,
    description,
    path: `/courses/${course.slug}`,
  });
}
