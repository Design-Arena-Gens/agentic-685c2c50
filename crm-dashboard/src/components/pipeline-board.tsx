import { ArrowRight, Circle } from "lucide-react";

export type PipelineStage = {
  id: string;
  name: string;
  value: string;
  deals: number;
  conversion: number;
  trend: string;
  color: string;
};

type PipelineBoardProps = {
  stages: PipelineStage[];
};

export function PipelineBoard({ stages }: PipelineBoardProps) {
  return (
    <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm shadow-slate-200/50 backdrop-blur">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Pipeline velocity</h2>
          <p className="text-sm text-slate-500">Track how deals progress across stages this month.</p>
        </div>
        <button className="group inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
          Export
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stages.map((stage) => (
          <div
            key={stage.id}
            className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4 shadow-inner"
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                <span
                  className="inline-flex h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: stage.color }}
                />
                {stage.name}
              </span>
              <span className="rounded-full bg-white px-2 py-0.5 text-xs font-medium text-slate-500">
                {stage.deals} deals
              </span>
            </div>
            <p className="mt-3 text-2xl font-semibold text-slate-900">{stage.value}</p>
            <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
              <span>{stage.trend}</span>
              <span className="flex items-center gap-1">
                <Circle className="h-3 w-3 text-slate-300" />
                {stage.conversion}% win rate
              </span>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${Math.min(100, Math.max(0, stage.conversion))}%`,
                  background: stage.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

