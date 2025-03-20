import React from "react";
import SkillItem from "./SkillItem"; // Renaming MenuItem to SkillItem
import Card from "./Card"; // Renaming MenuCard to Card

const Skills = () => {
  const skills = [
    { id: 1, name: "Python ☑️", level: "Beginner" },
    { id: 2, name: "JavaScript ☑️", level: "Beginner" },
    { id: 3, name: "React.js ✅", level: "Pre-intermediate" },
    { id: 4, name: "CSS & HTML ✅", level: "Intermediate" },
    { id: 5, name: "Node.js ☑️", level: "Introductory ☑️" },
    { id: 6, name: "Git & Version Control ✅", level: "Intermediate" },
    { id: 7, name: "Responsive Web Design ☑️", level: "Beginner" },
    { id: 8, name: "REST APIs ☑️", level: "Introductory" },
    { id: 9, name: "UX/UI Design ✅", level: "Pre-intermediate" },
    { id: 10, name: "SQL Databases ☑️", level: "Beginner" },
    { id: 11, name: "AI and Machine Learning ☑️", level: "Introductory" },
  ];

  return (
    <>
      <Card
        cardTitle={"TechStack"}
        cardContent={skills.map((skill) => (
          <SkillItem key={skill.id} skill={skill} />
        ))}
      />
    </>
  );
};

export default Skills;
