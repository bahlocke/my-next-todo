"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createTask, updateTask, deleteTask } from "@/lib/tasks";
import type { Priority, Status } from "@/lib/types";

export async function createTaskAction(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const priority = formData.get("priority") as Priority;

  if (!title || title.trim().length === 0) {
    throw new Error("Title is required");
  }

  createTask({
    title: title.trim(),
    description: description?.trim() || "",
    priority: priority || "medium",
  });

  revalidatePath("/tasks");
  redirect("/tasks");
}

export async function updateStatusAction(taskId: string, status: Status) {
  updateTask(taskId, { status });
  revalidatePath("/tasks");
  revalidatePath(`/tasks/${taskId}`);
}

export async function deleteTaskAction(taskId: string) {
  deleteTask(taskId);
  revalidatePath("/tasks");
}