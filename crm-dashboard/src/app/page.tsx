import { ActivityFeed } from "@/components/activity-feed";
import { DealsTable } from "@/components/deals-table";
import { PipelineBoard } from "@/components/pipeline-board";
import { StatCard } from "@/components/stat-card";
import { TasksWidget } from "@/components/tasks-widget";
import { TeamPerformance } from "@/components/team-performance";
import {
  Bell,
  Briefcase,
  Filter,
  Goal,
  Handshake,
  Menu,
  Search,
  Sparkles,
  UserPlus,
} from "lucide-react";

const statCards = [
  {
    title: "Net pipeline",
    value: "$842K",
    change: "+18.6%",
    descriptor: "vs last month",
    trend: "up" as const,
    icon: Briefcase,
    sparkline: [420, 460, 520, 480, 540, 610, 650, 700],
  },
  {
    title: "Forecasted revenue",
    value: "$312K",
    change: "+6.2%",
    descriptor: "committed",
    trend: "up" as const,
    icon: Goal,
    sparkline: [120, 160, 180, 190, 200, 220, 240, 255],
  },
  {
    title: "New logos",
    value: "12 won",
    change: "-2 deals",
    descriptor: "this quarter",
    trend: "down" as const,
    icon: UserPlus,
    sparkline: [6, 8, 11, 10, 12, 9, 13, 12],
  },
  {
    title: "Average sales cycle",
    value: "32 days",
    change: "-4 days",
    descriptor: "faster vs Q2",
    trend: "up" as const,
    icon: Handshake,
    sparkline: [52, 48, 45, 41, 39, 36, 33, 32],
  },
];

const pipelineStages = [
  {
    id: "stage-1",
    name: "Prospecting",
    value: "$186K",
    deals: 26,
    conversion: 34,
    trend: "31 new leads",
    color: "#22d3ee",
  },
  {
    id: "stage-2",
    name: "Qualification",
    value: "$240K",
    deals: 18,
    conversion: 46,
    trend: "Avg 2.4 meetings",
    color: "#38bdf8",
  },
  {
    id: "stage-3",
    name: "Negotiation",
    value: "$284K",
    deals: 12,
    conversion: 58,
    trend: "+9% vs last sprint",
    color: "#818cf8",
  },
  {
    id: "stage-4",
    name: "Contract",
    value: "$132K",
    deals: 7,
    conversion: 71,
    trend: "4 deals awaiting signature",
    color: "#c084fc",
  },
];

const deals = [
  {
    id: "deal-1",
    company: "Atlas Robotics",
    contact: "Morgan Li (COO)",
    stage: "Contract",
    value: "$72,400",
    status: "On track" as const,
    owner: "Ibrahim",
    updatedAt: "2h ago",
  },
  {
    id: "deal-2",
    company: "Northwind Labs",
    contact: "Ava Stone (VP Sales)",
    stage: "Negotiation",
    value: "$54,900",
    status: "Slack" as const,
    owner: "Cassidy",
    updatedAt: "5h ago",
  },
  {
    id: "deal-3",
    company: "Zephyr Analytics",
    contact: "Cam Nguyen (CFO)",
    stage: "Qualification",
    value: "$38,400",
    status: "On track" as const,
    owner: "Maya",
    updatedAt: "8h ago",
  },
  {
    id: "deal-4",
    company: "Polar Manufacturing",
    contact: "Bruno Costa (CTO)",
    stage: "Negotiation",
    value: "$68,120",
    status: "At risk" as const,
    owner: "Ibrahim",
    updatedAt: "Yesterday",
  },
  {
    id: "deal-5",
    company: "Sunrise Clinics",
    contact: "Jada Patel (Director IT)",
    stage: "Qualification",
    value: "$44,950",
    status: "Slack" as const,
    owner: "Maya",
    updatedAt: "Yesterday",
  },
];

const tasks = [
  {
    id: "task-1",
    title: "Prepare onboarding deck for Atlas Robotics",
    due: "Today · 3:30p",
    owner: "Ibrahim",
    priority: "High" as const,
    completed: false,
  },
  {
    id: "task-2",
    title: "Send pricing update to Sunrise Clinics",
    due: "Today · 5:00p",
    owner: "Cassidy",
    priority: "Medium" as const,
    completed: false,
  },
  {
    id: "task-3",
    title: "Log negotiation notes for Polar Manufacturing",
    due: "Tomorrow",
    owner: "Maya",
    priority: "Low" as const,
    completed: true,
  },
];

const activities = [
  {
    id: "activity-1",
    channel: "email" as const,
    summary: "Follow-up email sent to Cam Nguyen (Zephyr Analytics)",
    timeAgo: "12m ago",
    owner: "Maya",
  },
  {
    id: "activity-2",
    channel: "meeting" as const,
    summary: "Discovery recap with Atlas Robotics leadership",
    timeAgo: "1h ago",
    owner: "Ibrahim",
  },
  {
    id: "activity-3",
    channel: "call" as const,
    summary: "Quarterly business review scheduling with Northwind Labs",
    timeAgo: "4h ago",
    owner: "Cassidy",
  },
  {
    id: "activity-4",
    channel: "note" as const,
    summary: "Negotiation blockers captured for Polar Manufacturing",
    timeAgo: "Yesterday",
    owner: "Maya",
  },
];

const teamMembers = [
  {
    id: "team-1",
    name: "Ibrahim Khan",
    role: "Enterprise AE",
    avatar: "IK",
    closed: 186000,
    quota: 240000,
  },
  {
    id: "team-2",
    name: "Maya Chen",
    role: "Mid-market AE",
    avatar: "MC",
    closed: 154000,
    quota: 180000,
  },
  {
    id: "team-3",
    name: "Cassidy Hart",
    role: "Enterprise AE",
    avatar: "CH",
    closed: 138000,
    quota: 220000,
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col text-slate-900">
      <header className="border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-lg font-semibold text-white shadow-sm shadow-slate-300">
              <Sparkles className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Pipeline</p>
              <h1 className="text-xl font-semibold text-slate-900">Revenue Command Center</h1>
            </div>
          </div>
          <div className="hidden items-center gap-3 rounded-full border border-slate-200 bg-slate-50/80 px-3 py-2 md:flex">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              className="w-56 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              placeholder="Search deals, accounts, people"
              type="search"
            />
            <kbd className="rounded bg-white px-2 py-0.5 text-[0.65rem] text-slate-400 shadow-inner">
              /
            </kbd>
          </div>
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
              <Filter className="h-4 w-4" />
              Filters
            </button>
            <button className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 shadow-sm">
              <Bell className="h-5 w-5" />
              <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-medium text-white">
                3
              </span>
            </button>
            <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-500 shadow-sm md:hidden">
              <Menu className="h-5 w-5" />
            </button>
            <div className="hidden items-center gap-3 rounded-full border border-slate-200 bg-white px-3 py-1.5 md:flex">
              <span className="h-8 w-8 rounded-full bg-gradient-to-br from-sky-500 via-indigo-500 to-purple-500" />
              <div className="text-left">
                <p className="text-sm font-semibold">Alex Morgan</p>
                <p className="text-xs text-slate-500">Head of Sales Ops</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-6 py-8">
        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {statCards.map((card) => (
            <StatCard key={card.title} {...card} />
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-[2fr,1fr]">
          <div className="space-y-6">
            <PipelineBoard stages={pipelineStages} />
            <DealsTable deals={deals} />
          </div>
          <div className="space-y-6">
            <TasksWidget tasks={tasks} />
            <ActivityFeed activities={activities} />
            <TeamPerformance members={teamMembers} />
          </div>
        </section>
      </main>
    </div>
  );
}
