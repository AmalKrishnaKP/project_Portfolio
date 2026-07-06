import { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

type Props = {
  open: boolean;
  onClose: () => void;
};

type Period = "week" | "month" | "year";

const weeklyData = [
  { label: "Mon", visits: 125 },
  { label: "Tue", visits: 180 },
  { label: "Wed", visits: 155 },
  { label: "Thu", visits: 240 },
  { label: "Fri", visits: 280 },
  { label: "Sat", visits: 350 },
  { label: "Sun", visits: 295 },
];

const monthlyData = [
  { label: "Week 1", visits: 950 },
  { label: "Week 2", visits: 1180 },
  { label: "Week 3", visits: 1325 },
  { label: "Week 4", visits: 1470 },
];

const yearlyData = [
  { label: "Jan", visits: 4200 },
  { label: "Feb", visits: 4700 },
  { label: "Mar", visits: 5200 },
  { label: "Apr", visits: 6100 },
  { label: "May", visits: 6400 },
  { label: "Jun", visits: 6900 },
  { label: "Jul", visits: 7200 },
  { label: "Aug", visits: 7600 },
  { label: "Sep", visits: 7350 },
  { label: "Oct", visits: 8120 },
  { label: "Nov", visits: 8700 },
  { label: "Dec", visits: 9250 },
];

const visitors = [
  {
    name: "Alex Johnson",
    
    country: "USA",
    time: "2 hours ago",
  },
  {
    name: "Sarah Ahmed",
    
    country: "United Kingdom",
    time: "Yesterday",
  },
  {
    name: "Chen Wei",
    
    country: "Singapore",
    time: "2 days ago",
  },
  {
    name: "Rahul Sharma",
    
    country: "India",
    time: "3 days ago",
  },
];

function AnalyticsModal({ open, onClose }: Props) {
  const [period, setPeriod] = useState<Period>("week");

  

  const chartData = useMemo(() => {
    switch (period) {
      case "month":
        return monthlyData;
      case "year":
        return yearlyData;
      default:
        return weeklyData;
    }
  }, [period]);

  const totalVisits = chartData.reduce(
    (sum, item) => sum + item.visits,
    0
  );

  const uniqueVisitors = Math.round(totalVisits * 0.79);

  const countriesReached = 18;

  const qrScans = Math.round(totalVisits * 0.22);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-100">

      <div className="mx-auto max-w-7xl p-10">

        {/* Header */}

        <div className="mb-10 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-bold text-slate-800">
              Employee Insights
            </h1>

            <p className="mt-2 text-slate-500">
              Last Updated • Today 10:34 AM
            </p>

          </div>

          <div className="flex gap-4">

            <button
              onClick={() => setPeriod("week")}
              className={`rounded-lg px-5 py-2 font-medium ${
                period === "week"
                  ? "bg-[var(--primary)] text-white"
                  : "bg-white"
              }`}
            >
              7 Days
            </button>

            <button
              onClick={() => setPeriod("month")}
              className={`rounded-lg px-5 py-2 font-medium ${
                period === "month"
                  ? "bg-[var(--primary)] text-white"
                  : "bg-white"
              }`}
            >
              30 Days
            </button>

            <button
              onClick={() => setPeriod("year")}
              className={`rounded-lg px-5 py-2 font-medium ${
                period === "year"
                  ? "bg-[var(--primary)] text-white"
                  : "bg-white"
              }`}
            >
              Year
            </button>

            <button
              onClick={onClose}
              className="rounded-lg border bg-white px-5 py-2"
            >
              ← Profile
            </button>

          </div>

        </div>

        {/* KPI Cards */}

        <div className="mb-10 grid grid-cols-4 gap-6">

          <div className="rounded-xl bg-white p-6 shadow">

            <p className="text-3xl">👁️</p>

            <h2 className="mt-4 text-4xl font-bold">
              {totalVisits.toLocaleString()}
            </h2>

            <p className="mt-2 text-gray-500">
              Total Visits
            </p>

            <span className="mt-3 inline-block rounded-full bg-green-100 px-3 py-1 text-green-700">
              +18%
            </span>

          </div>

          <div className="rounded-xl bg-white p-6 shadow">

            <p className="text-3xl">👤</p>

            <h2 className="mt-4 text-4xl font-bold">
              {uniqueVisitors}
            </h2>

            <p className="mt-2 text-gray-500">
              Unique Visitors
            </p>

            <span className="mt-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-blue-700">
              +12%
            </span>

          </div>

          <div className="rounded-xl bg-white p-6 shadow">

            <p className="text-3xl">🌍</p>

            <h2 className="mt-4 text-4xl font-bold">
              {countriesReached}
            </h2>

            <p className="mt-2 text-gray-500">
              Countries
            </p>

            <span className="mt-3 inline-block rounded-full bg-purple-100 px-3 py-1 text-purple-700">
              +4
            </span>

          </div>

          <div className="rounded-xl bg-white p-6 shadow">

            <p className="text-3xl">📱</p>

            <h2 className="mt-4 text-4xl font-bold">
              {qrScans}
            </h2>

            <p className="mt-2 text-gray-500">
              QR Scans
            </p>

            <span className="mt-3 inline-block rounded-full bg-orange-100 px-3 py-1 text-orange-700">
              +22%
            </span>

          </div>

        </div>
                {/* Visit Trends */}

        <div className="rounded-2xl bg-white p-8 shadow">

          <div className="mb-8 flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-bold text-slate-800">
                Visit Trends
              </h2>

              <p className="text-gray-500">
                Profile views for the selected period
              </p>

            </div>

            <div className="rounded-full bg-blue-50 px-4 py-2">

              <span className="font-semibold text-[var(--primary)]">
                Total : {totalVisits.toLocaleString()} Visits
              </span>

            </div>

          </div>

          <div className="h-[420px]">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <LineChart
                data={chartData}
                margin={{
                  top: 20,
                  right: 20,
                  left: 10,
                  bottom: 10,
                }}
              >

                <CartesianGrid
                  strokeDasharray="3 3"
                />

                <XAxis
                  dataKey="label"
                />

                <YAxis />

                <Tooltip
                  formatter={(value) => [
                    `${value} Visits`,
                    "Views",
                  ]}
                />

                <Line
                  type="monotone"
                  dataKey="visits"
                  stroke="#0B4AA8"
                  strokeWidth={4}
                  dot={{
                    r: 6,
                  }}
                  activeDot={{
                    r: 10,
                  }}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* Quick Summary */}

        <div className="mt-8 grid grid-cols-3 gap-6">

          <div className="rounded-xl bg-white p-6 shadow">

            <h3 className="text-lg font-semibold">
              Average Visits
            </h3>

            <p className="mt-3 text-4xl font-bold text-[var(--primary)]">

              {Math.round(
                totalVisits / chartData.length
              )}

            </p>

            <p className="mt-2 text-gray-500">
              Average per period
            </p>

          </div>

          <div className="rounded-xl bg-white p-6 shadow">

            <h3 className="text-lg font-semibold">
              Highest Traffic
            </h3>

            <p className="mt-3 text-4xl font-bold text-green-700">

              {
                chartData.reduce(
                  (a, b) =>
                    a.visits > b.visits
                      ? a
                      : b
                ).label
              }

            </p>

            <p className="mt-2 text-gray-500">
              Best performing period
            </p>

          </div>

          <div className="rounded-xl bg-white p-6 shadow">

            <h3 className="text-lg font-semibold">
              Growth
            </h3>

            <p className="mt-3 text-4xl font-bold text-purple-700">
              +18%
            </p>

            <p className="mt-2 text-gray-500">
              Compared to previous period
            </p>

          </div>

        </div>
                {/* Visitor Directory */}

        <div className="mt-10 rounded-2xl bg-white p-8 shadow">

          <h2 className="mb-6 text-2xl font-bold text-slate-800">
            Visitor Directory
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="border-b text-left text-gray-500">

                  <th className="pb-4">Visitor</th>
                 
                  <th className="pb-4">Country</th>
                  <th className="pb-4">Visited</th>

                </tr>

              </thead>

              <tbody>

                {visitors.map((visitor) => (

                  <tr
                    key={visitor.name}
                    className="border-b transition hover:bg-slate-50"
                  >

                    <td className="py-5 font-medium">
                      {visitor.name}
                    </td>

                    

                    <td>
                      {visitor.country}
                    </td>

                    <td className="text-gray-500">
                      {visitor.time}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* Countries */}

        <div className="mt-10 rounded-2xl bg-white p-8 shadow">

          <h2 className="mb-8 text-2xl font-bold text-slate-800">
            Top Countries
          </h2>

          {[
            {
              country: "🇮🇳 India",
              visits: 430,
            },
            {
              country: "🇺🇸 USA",
              visits: 285,
            },
            {
              country: "🇬🇧 United Kingdom",
              visits: 170,
            },
            {
              country: "🇸🇬 Singapore",
              visits: 96,
            },
          ].map((country) => (

            <div
              key={country.country}
              className="mb-6"
            >

              <div className="mb-2 flex justify-between">

                <span className="font-medium">
                  {country.country}
                </span>

                <span className="text-gray-500">
                  {country.visits}
                </span>

              </div>

              <div className="h-3 overflow-hidden rounded-full bg-gray-200">

                <div
                  className="h-full rounded-full bg-[var(--primary)]"
                  style={{
                    width: `${(country.visits / 430) * 100}%`,
                  }}
                />

              </div>

            </div>

          ))}

        </div>

        {/* QR Statistics */}

        <div className="mt-10 rounded-2xl bg-white p-8 shadow">

          <h2 className="mb-8 text-2xl font-bold text-slate-800">
            QR Engagement
          </h2>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

            <div className="rounded-xl bg-slate-50 p-5">

              <p className="text-sm text-gray-500">
                QR Scans
              </p>

              <h3 className="mt-3 text-3xl font-bold">
                {qrScans}
              </h3>

            </div>

            <div className="rounded-xl bg-slate-50 p-5">

              <p className="text-sm text-gray-500">
                Downloads
              </p>

              <h3 className="mt-3 text-3xl font-bold">
                148
              </h3>

            </div>

            <div className="rounded-xl bg-slate-50 p-5">

              <p className="text-sm text-gray-500">
                LinkedIn Clicks
              </p>

              <h3 className="mt-3 text-3xl font-bold">
                83
              </h3>

            </div>

            <div className="rounded-xl bg-slate-50 p-5">

              <p className="text-sm text-gray-500">
                Phone Clicks
              </p>

              <h3 className="mt-3 text-3xl font-bold">
                29
              </h3>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default AnalyticsModal;