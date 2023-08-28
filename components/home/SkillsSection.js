import React from 'react'
import skillsArray from '@/skillsArray'

/**
 * Renders the Skills component.
 *
 * @return {JSX.Element} The rendered Skills component.
 */
const SkillsSection = () => {
  return (
    <div className="skills_container">
      <h1>Here's a breakdown of the languages and tools I'm familiar with</h1>
      {skillsArray.map((section) => (
        <React.Fragment key={section.name}>
          <h2>{section.name}</h2>
          <div className="skills">
            {section.skills.map((skill) => (
              <div key={skill}>{skill}</div>
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}

export default SkillsSection
