import SectionHeader from "../../components/SectionHeader";
import data from "../../data/research.json";
export const metadata = { title: "Julian Wiser | Research" };
export default function Page() {
  return (
    <section>
      <SectionHeader title="Research" />
      <pre className="bg-gray-50 border rounded p-4 overflow-x-auto text-sm">{JSON.stringify(data, null, 2)}</pre>
      <p className="mt-4 text-gray-600">Replace this with real components once your content is ready.</p>
    </section>
  );
}
