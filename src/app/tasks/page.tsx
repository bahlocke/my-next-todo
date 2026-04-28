import Link from "next/link";
import { getAllTasks } from "@/lib/tasks";
import { Task } from "@/lib/types";

const priorityColors: Record<string, string> = {
  low: "bg-green-100 text-green-800",
  medium: "bg-yellow-100 text-yellow-800",
  high: "bg-red-100 text-red-800",
};

const statusLabels: Record<string, string> = {
  todo: "To Do",
  "in-progress": "In Progress",
  done: "Done",
};

function TaskCard({ task }: { task: Task }) {
  return (
    <Link
      href={`/tasks/${task.id}`}
      className="block bg-white rounded-lg border border-gray-200
                 p-5 hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
        <span
          className={`text-xs font-medium px-2.5 py-0.5 rounded
                      ${priorityColors[task.priority]}`}
        >
          {task.priority}
        </span>
      </div>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {task.description}
      </p>
      <div className="flex items-center justify-between text-xs text-gray-400">
        <span>{statusLabels[task.status]}</span>
        <span>Updated {task.updatedAt.toLocaleDateString()}</span>
      </div>
    </Link>
  );
}

export default function TasksPage() {
  // Direct data access — no API call, no useEffect, no loading state
  const tasks = getAllTasks();

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">All Tasks</h1>
          <Link
            href="/tasks/new"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg
                       hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            + New Task
          </Link>
        </div>

        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center py-12">
            No tasks yet. Create your first task to get started.
          </p>
        ) : (
          <div className="grid gap-4">
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}