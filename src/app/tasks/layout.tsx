import Link from "next/link";

export default function TasksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav className="bg-white border-b border-gray-200 px-8 py-3">
        <div className="max-w-4xl mx-auto flex items-center gap-6">
          <Link href="/" className="text-lg font-bold text-blue-600">
            TaskFlow
          </Link>
          <Link
            href="/tasks"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            All Tasks
          </Link>
        </div>
      </nav>
      {children}
    </div>
  );
}