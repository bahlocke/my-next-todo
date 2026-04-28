"use client";

import { useRouter } from "next/navigation";
import { updateStatusAction } from "@/app/actions";
import { Status } from "@/lib/types";

export function StatusToggle({ taskId, currentStatus }: { taskId: string, currentStatus: Status }) {
  const router = useRouter();

  async function handleUpdate(status: Status) {
    if (!confirm("Are you sure you want to update the status of this task?")) return;
    await updateStatusAction(taskId, status);
    router.push("/tasks");
  }

  return (
    <details className="group relative">
      <summary className="list-none cursor-pointer p-2 bg-blue-500 text-white rounded">
        {currentStatus.charAt(0).toUpperCase() + currentStatus.slice(1)}
      </summary>
      <ul className="absolute top-full left-0 mt-2 w-48 bg-white text-black border rounded shadow-lg group-open:block">
        <li onClick={() => handleUpdate("todo")} className="p-2 hover:bg-gray-100">Todo</li>
        <li onClick={() => handleUpdate("in-progress")} className="p-2 hover:bg-gray-100">In Progress</li>
        <li onClick={() => handleUpdate("done")} className="p-2 hover:bg-gray-100">Done</li>
      </ul>
    </details>
  );
}