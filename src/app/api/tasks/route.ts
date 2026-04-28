import { NextRequest, NextResponse } from "next/server";
import { getAllTasks, createTask } from "@/lib/tasks";
import type { Priority } from "@/lib/types";

// GET /api/tasks — list all tasks
export async function GET() {
  const tasks = getAllTasks();
  return NextResponse.json(tasks);
}

// POST /api/tasks — create a new task
export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.title || typeof body.title !== "string") {
    return NextResponse.json(
      { error: "Title is required and must be a string" },
      { status: 400 }
    );
  }

  const validPriorities: Priority[] = ["low", "medium", "high"];
  const priority = validPriorities.includes(body.priority)
    ? body.priority
    : "medium";

  const task = createTask({
    title: body.title.trim(),
    description: body.description?.trim() || "",
    priority,
  });

  return NextResponse.json(task, { status: 201 });
}