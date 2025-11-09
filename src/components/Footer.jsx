export default function Footer() {
  return (
    <footer className="border-t mt-10">
      <div className="max-w-4xl mx-auto px-6 py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Julian Wiser. All rights reserved.
      </div>
    </footer>
  );
}
