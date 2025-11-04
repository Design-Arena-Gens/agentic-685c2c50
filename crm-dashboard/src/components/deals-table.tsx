import { ArrowUpRight } from "lucide-react";

export type Deal = {
  id: string;
  company: string;
  contact: string;
  stage: string;
  value: string;
  status: "On track" | "Slack" | "At risk";
  updatedAt: string;
  owner: string;
};

type DealsTableProps = {
  deals: Deal[];
};

const statusColor: Record<Deal["status"], string> = {
  "On track": "bg-emerald-100 text-emerald-700",
  Slack: "bg-amber-100 text-amber-700",
  "At risk": "bg-rose-100 text-rose-700",
};

export function DealsTable({ deals }: DealsTableProps) {
  return (
    <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm shadow-slate-200/50 backdrop-blur">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Active deals</h2>
          <p className="text-sm text-slate-500">Top opportunities closing in the next 30 days.</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
          View pipeline
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
      <div className="overflow-hidden rounded-2xl border border-slate-100">
        <table className="min-w-full divide-y divide-slate-100 text-sm text-slate-600">
          <thead className="bg-slate-50/80 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Company</th>
              <th className="px-4 py-3 text-left font-semibold">Contact</th>
              <th className="px-4 py-3 text-left font-semibold">Stage</th>
              <th className="px-4 py-3 text-left font-semibold">Value</th>
              <th className="px-4 py-3 text-left font-semibold">Owner</th>
              <th className="px-4 py-3 text-left font-semibold">Updated</th>
              <th className="px-4 py-3 text-left font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {deals.map((deal) => (
              <tr key={deal.id} className="hover:bg-slate-50/70">
                <td className="px-4 py-3 font-medium text-slate-900">{deal.company}</td>
                <td className="px-4 py-3">{deal.contact}</td>
                <td className="px-4 py-3">{deal.stage}</td>
                <td className="px-4 py-3 font-medium text-slate-900">{deal.value}</td>
                <td className="px-4 py-3">{deal.owner}</td>
                <td className="px-4 py-3 text-slate-500">{deal.updatedAt}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${statusColor[deal.status]}`}
                  >
                    {deal.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

