import { Calendar, CheckCircle2, CircleDashed, Plus } from "lucide-react";

export type Task = {
  id: string;
  title: string;
  due: string;
  owner: string;
  priority: "High" | "Medium" | "Low";
  completed: boolean;
};

type TasksWidgetProps = {
  tasks: Task[];
};

const priorityColor: Record<Task["priority"], string> = {
  High: "text-rose-600 bg-rose-50",
  Medium: "text-amber-600 bg-amber-50",
  Low: "text-emerald-600 bg-emerald-50",
};

export function TasksWidget({ tasks }: TasksWidgetProps) {
  return (
    <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm shadow-slate-200/50 backdrop-blur">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Today&apos;s agenda</h2>
          <p className="text-sm text-slate-500">Focus on the next best actions to keep deals moving.</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
          <Plus className="h-4 w-4" />
          Add task
        </button>
      </div>
      <div className="mt-5 space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-500">
                {task.completed ? (
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                ) : (
                  <CircleDashed className="h-5 w-5" />
                )}
              </span>
              <div>
                <p className="text-sm font-medium text-slate-900">{task.title}</p>
                <p className="text-xs text-slate-500">Assigned to {task.owner}</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1 text-right text-xs">
              <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-medium ${priorityColor[task.priority]}`}>
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                {task.priority}
              </span>
              <span className="flex items-center gap-1 text-slate-500">
                <Calendar className="h-3.5 w-3.5" />
                {task.due}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

