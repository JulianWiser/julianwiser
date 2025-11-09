export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="mt-10 mb-6">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {subtitle ? <p className="text-gray-600 mt-1">{subtitle}</p> : null}
    </div>
  );
}
