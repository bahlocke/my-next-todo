import { Task, CreateTaskInput, UpdateTaskInput } from "./types";

// In-memory store — replace with a database in production
const tasks: Map<string, Task> = new Map();

// Seed with sample data
const seedTasks: Task[] = [
  {
    id: "1",
    title: "Set up CI/CD pipeline",
    description: "Configure GitHub Actions for automated testing and deployment",
    priority: "high",
    status: "in-progress",
    createdAt: new Date("2026-04-10"),
    updatedAt: new Date("2026-04-15"),
  },
  {
    id: "2",
    title: "Write API documentation",
    description: "Document all REST endpoints with request/response examples",
    priority: "medium",
    status: "todo",
    createdAt: new Date("2026-04-12"),
    updatedAt: new Date("2026-04-12"),
  },
  {
    id: "3",
    title: "Fix authentication bug",
    description: "Session token not refreshing after password change",
    priority: "high",
    status: "todo",
    createdAt: new Date("2026-04-14"),
    updatedAt: new Date("2026-04-14"),
  },
  {
    id: "4",
    title: "Add dark mode support",
    description: "Implement system-preference-aware dark mode with Tailwind",
    priority: "low",
    status: "done",
    createdAt: new Date("2026-04-08"),
    updatedAt: new Date("2026-04-16"),
  },
];

seedTasks.forEach((task) => tasks.set(task.id, task));

let nextId = 5;

export function getAllTasks(): Task[] {
  return Array.from(tasks.values()).sort(
    (a, b) => b.updatedAt.getTime() - a.updatedAt.getTime()
  );
}

export function getTaskById(id: string): Task | undefined {
  return tasks.get(id);
}

export function createTask(input: CreateTaskInput): Task {
  const task: Task = {
    id: String(nextId++),
    title: input.title,
    description: input.description,
    priority: input.priority,
    status: "todo",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  tasks.set(task.id, task);
  return task;
}

export function updateTask(id: string, input: UpdateTaskInput): Task | null {
  const task = tasks.get(id);
  if (!task) return null;

  const updated: Task = {
    ...task,
    ...input,
    updatedAt: new Date(),
  };
  tasks.set(id, updated);
  return updated;
}

export function deleteTask(id: string): boolean {
  return tasks.delete(id);
}