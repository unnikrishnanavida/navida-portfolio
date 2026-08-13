function SkillGroup({ title, skills = [] }) {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillGroup;
