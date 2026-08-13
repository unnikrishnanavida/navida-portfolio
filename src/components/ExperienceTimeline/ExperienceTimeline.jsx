function ExperienceTimeline({ items = [] }) {
  return (
    <div>
      {items.map((item, index) => (
        <div key={`${item.company}-${index}`}>
          <h3>{item.role}</h3>
          <p>{item.company}</p>
          <small>{item.period}</small>
        </div>
      ))}
    </div>
  );
}

export default ExperienceTimeline;
