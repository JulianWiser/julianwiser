import SectionHeader from "../components/SectionHeader";
export default function HomePage() {
  return (
    <section>
      <h1 className="text-4xl font-bold">Julian Reed Wiser</h1>
      <p className="mt-3 text-lg text-gray-700">Researcher • Applied Psychology • EMT • Digital Director • Artist</p>
      <SectionHeader title="Current Work" />
      <p className="text-gray-600">Content loads from JSON in <code>src/data</code>. Update to render sections.</p>
    </section>
  );
}
