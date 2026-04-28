import Link from "next/link";

// This is a Server Component by default — no "use client" needed
export default function HomePage() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          TaskFlow
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          A full-stack task management app built with Next.js
        </p>
        <p className="text-sm text-gray-400 mb-8">{currentDate}</p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/tasks"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg
                       hover:bg-blue-700 transition-colors font-medium"
          >
            View Tasks
          </Link>
          <Link
            href="/tasks/new"
            className="border border-gray-300 text-gray-700 px-6 py-3
                       rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            Create Task
          </Link>
        </div>
      </div>
    </main>
  );
}