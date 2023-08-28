import skillsArray from '@/skillsArray'

/**
 * Renders the Skills component.
 *
 * @return {JSX.Element} The rendered Skills component.
 */
const Skills = () => {
  return (
    <div className="skills_container">
      <h1>Here's a breakdown of the languages and tools I'm familiar with</h1>
      {skillsArray.map((section) => (
        <>
          <h2>{section.name}</h2>
          <div className="skills">
            {section.skills.map((skill) => (
              <div>{skill}</div>
            ))}
          </div>
        </>
      ))}
    </div>
  )
}

export default Skills
