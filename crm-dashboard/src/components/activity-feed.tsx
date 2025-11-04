import type { JSX } from "react";
import { Mail, MessageSquare, Phone, Users } from "lucide-react";

export type Activity = {
  id: string;
  channel: "email" | "call" | "note" | "meeting";
  summary: string;
  timeAgo: string;
  owner: string;
};

const channelIcon: Record<Activity["channel"], JSX.Element> = {
  email: <Mail className="h-3.5 w-3.5" />,
  call: <Phone className="h-3.5 w-3.5" />,
  note: <MessageSquare className="h-3.5 w-3.5" />,
  meeting: <Users className="h-3.5 w-3.5" />,
};

const channelCopy: Record<Activity["channel"], string> = {
  email: "Email",
  call: "Call",
  note: "Note",
  meeting: "Meeting",
};

type ActivityFeedProps = {
  activities: Activity[];
};

export function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm shadow-slate-200/50 backdrop-blur">
      <h2 className="text-lg font-semibold text-slate-900">Activity feed</h2>
      <p className="mt-1 text-sm text-slate-500">Latest touchpoints from the team across accounts.</p>
      <div className="mt-5 space-y-4">
        {activities.map((activity, index) => (
          <div key={activity.id} className="relative pl-7">
            {index !== activities.length - 1 && (
              <span className="absolute left-[7px] top-5 h-full w-px bg-slate-200" aria-hidden />
            )}
            <span className="absolute left-0 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white">
              {channelIcon[activity.channel]}
            </span>
            <div className="flex flex-col gap-1">
              <div className="flex items-start justify-between gap-4">
                <p className="text-sm font-medium text-slate-900">{activity.summary}</p>
                <span className="text-xs text-slate-400">{activity.timeAgo}</span>
              </div>
              <div className="text-xs text-slate-500">
                {channelCopy[activity.channel]} · Logged by {activity.owner}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
