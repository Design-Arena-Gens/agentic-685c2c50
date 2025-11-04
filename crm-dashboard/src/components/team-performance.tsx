import { Trophy } from "lucide-react";

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  closed: number;
  quota: number;
};

type TeamPerformanceProps = {
  members: TeamMember[];
};

export function TeamPerformance({ members }: TeamPerformanceProps) {
  return (
    <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm shadow-slate-200/50 backdrop-blur">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Team leaderboard</h2>
          <p className="text-sm text-slate-500">Quota attainment across the sales pod.</p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
          <Trophy className="h-4 w-4" />
          Q3 Sprint
        </span>
      </div>
      <div className="mt-5 space-y-4">
        {members.map((member) => {
          const attainment = Math.min(
            100,
            Math.round((member.closed / member.quota) * 100)
          );

          return (
            <div key={member.id} className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-lg font-semibold text-slate-500">
                {member.avatar}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <p className="font-medium text-slate-900">{member.name}</p>
                    <p className="text-xs text-slate-500">{member.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-slate-900">${member.closed.toLocaleString()}</p>
                    <p className="text-xs text-slate-500">{attainment}% of quota</p>
                  </div>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-sky-400 to-blue-600"
                    style={{ width: `${attainment}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

