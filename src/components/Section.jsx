export default function Section({ id, children, scrollMt }) {
  return (
    <section id={id} className={`relative ${scrollMt}`}>
      {children}
    </section>
  );
}
