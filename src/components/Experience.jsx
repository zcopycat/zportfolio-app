import React from "react";
import ExperienceItem from "./ExperienceItem";
import Card from "./Card";

const Experience = () => {
  const experience = [
    { id: 1, name: "AI Driven Software Engineering with Skills City", timeline: "Dec24 - Mar25", description: "Kick-starting the essential skills necessary to effectively utilise AI as a tool in the fast-developing world of software engineering and web development, in line with industry standards" },
    { id: 2, name: "Business Improvement Lead with IMI", timeline: "Mar22 - Oct24", description: " Service and system improvement projects, including Microsoft cloud migration and custom-solutions for document management to align these with IT and Compliance. Organised and delivered training sessions around Microsoft and SharePoint tool integration and best practice."},
    { id: 3, name: "Skills Lead with Orbit Group", timeline: "Feb22-Feb23", description: "Led a user review and testing of a new digital skills platform, improving user interface and functionality through customer feedback. The outcome then was the launch of the embedded and customised Skillsminer platform for Orbit customers." },
    { id: 4, name: "System implementation projects, various employers", timeline: "Mar21-Oct24", description: "Multiple successfully delivered recruitment system, web platform, and operational improvement projects supporting business transformation and enhanced stakeholder experiences." },
    { id: 5, name: "System support, various employers", timeline: "Oct14-Oct24", description: "5+ years of experience in supporting internal systems, including user admin, implementation of  applicant tracking systems and job search platforms as well as system training design and delivery." },
    ];

  return (
    <>
      <Card cardTitle={"Tech-Exposure: Highlights"} cardContent={experience.map((experience) => (
        <ExperienceItem key={experience.id} experience={experience}/>
      ))}/>
    </>
  );
};

export default Experience;
