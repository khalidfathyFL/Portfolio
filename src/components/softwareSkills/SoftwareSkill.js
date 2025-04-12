import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => (
            <li
              key={i}
              className="software-skill-inline"
              name={skills.skillName}
            >
              {skills.logoPath ? (
                <img
                  src={require(`../../assets/images/${skills.logoPath}`)}
                  alt={skills.skillName}
                  className="skill-icon"
                />
              ) : (
                <i className={skills.fontAwesomeClassname}></i>
              )}
              <p>{skills.skillName}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
