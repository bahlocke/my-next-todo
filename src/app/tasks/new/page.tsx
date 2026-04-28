import { createTaskAction } from "@/app/actions";

export default function NewTaskPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Create New Task
        </h1>

        <form action={createTaskAction} className="bg-white rounded-lg
              border border-gray-200 p-6 space-y-5">
          <div>
            <label htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter task title"
            />
          </div>

          <div>
            <label htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-3 py-2
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Describe the task"
            />
          </div>

          <div>
            <label htmlFor="priority"
              className="block text-sm font-medium text-gray-700 mb-1">
              Priority
            </label>
            <select
              id="priority"
              name="priority"
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            >
              <option value="low">Low</option>
              <option value="medium" selected>Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg
                       hover:bg-blue-700 transition-colors font-medium"
          >
            Create Task
          </button>
        </form>
      </div>
    </main>
  );
}