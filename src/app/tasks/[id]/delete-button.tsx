"use client";

import { useRouter } from "next/navigation";
import { deleteTaskAction } from "@/app/actions";

export function DeleteButton({ taskId }: { taskId: string }) {
  const router = useRouter();

  async function handleDelete() {
    if (!confirm("Are you sure you want to delete this task?")) return;
    await deleteTaskAction(taskId);
    router.push("/tasks");
  }

  return (
    <button
      onClick={handleDelete}
      className="bg-red-50 text-red-600 px-4 py-2 rounded-lg
                 hover:bg-red-100 transition-colors text-sm font-medium"
    >
      Delete Task
    </button>
  );
}