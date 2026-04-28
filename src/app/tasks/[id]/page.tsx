import Link from "next/link";
import { notFound } from "next/navigation";
import { getTaskById } from "@/lib/tasks";
import { DeleteButton } from "./delete-button";
import { StatusToggle } from "./status-toggle";

interface TaskPageProps {
  params: Promise<{ id: string }>;
}

export default async function TaskPage({ params }: TaskPageProps) {
  const { id } = await params;
  const task = getTaskById(id);

  if (!task) {
    notFound();
  }

  const priorityColor = {
    low: "bg-green-100 text-green-800",
    medium: "bg-yellow-100 text-yellow-800",
    high: "bg-red-100 text-red-800",
  }[task.priority];

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/tasks"
          className="text-sm text-blue-600 hover:underline mb-6 block"
        >
          ← Back to Tasks
        </Link>

        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <div className="flex items-start justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900">{task.title}</h1>
            <span className={`text-xs font-medium px-3 py-1 rounded ${priorityColor}`}>
              {task.priority}
            </span>
          </div>

          <p className="text-gray-600 mb-6">{task.description}</p>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 mb-8">
            <div>
              <span className="font-medium text-gray-700">Status: </span>
              {task.status}
            </div>
            <div>
              <span className="font-medium text-gray-700">Created: </span>
              {task.createdAt.toLocaleDateString()}
            </div>
          </div>

          <div className="flex gap-3">
            <StatusToggle taskId={task.id} currentStatus={task.status} />
            <DeleteButton taskId={task.id} />
          </div>
        </div>
      </div>
    </main>
  );
}