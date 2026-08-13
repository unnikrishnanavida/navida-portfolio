function SectionHeader({ title, subtitle }) {
  return (
    <header>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </header>
  );
}

export default SectionHeader;
