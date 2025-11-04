import { TrendingDown, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Trend = "up" | "down";

export type StatCardProps = {
  title: string;
  value: string;
  change: string;
  trend: Trend;
  descriptor: string;
  icon: LucideIcon;
  sparkline?: number[];
};

const sparklineDimensions = {
  width: 160,
  height: 56,
};

function buildSparklinePath(values: number[]): string {
  if (!values.length) {
    return "";
  }

  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  const { width, height } = sparklineDimensions;
  const step = width / (values.length - 1 || 1);

  return values
    .map((point, index) => {
      const x = index * step;
      const normalizedY = ((point - min) / range) * height;
      const y = height - normalizedY;
      return `${index === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");
}

export function StatCard({
  title,
  value,
  change,
  trend,
  descriptor,
  icon: Icon,
  sparkline,
}: StatCardProps) {
  const gradientId = `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-sparkline`;
  const IconTrend = trend === "up" ? TrendingUp : TrendingDown;
  return (
    <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm shadow-slate-200/50 backdrop-blur hover:-translate-y-0.5 hover:shadow-md transition duration-200 ease-out">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="text-3xl font-semibold tracking-tight text-slate-900">
            {value}
          </p>
          <div className="flex items-center gap-2 text-sm">
            <span
              className={`flex items-center gap-1 rounded-full px-2 py-1 font-medium ${
                trend === "up"
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-rose-100 text-rose-700"
              }`}
            >
              <IconTrend className="h-4 w-4" />
              {change}
            </span>
            <span className="text-slate-500">{descriptor}</span>
          </div>
        </div>
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
          <Icon className="h-5 w-5" />
        </span>
      </div>
      {sparkline && sparkline.length ? (
        <div className="mt-6">
          <svg
            viewBox={`0 0 ${sparklineDimensions.width} ${sparklineDimensions.height}`}
            className="h-14 w-full text-slate-900"
            aria-hidden
          >
            <defs>
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(15, 118, 110)" stopOpacity="0.38" />
                <stop offset="100%" stopColor="rgb(15, 118, 110)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d={`${buildSparklinePath(sparkline)} L ${sparklineDimensions.width},${sparklineDimensions.height} L 0,${sparklineDimensions.height} Z`}
              fill={`url(#${gradientId})`}
              className="opacity-70"
            />
            <path
              d={buildSparklinePath(sparkline)}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ) : null}
    </div>
  );
}
