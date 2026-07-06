import { BarChart3, Eye, TrendingUp } from "lucide-react";

type Props = {
  setShowAnalytics: React.Dispatch<React.SetStateAction<boolean>>;
};

function ProfileVisitsCard({ setShowAnalytics }: Props) {
  return (
    <div
      onClick={() => setShowAnalytics(true)}
      className="cursor-pointer rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-blue-100 p-3">
          <BarChart3
            size={28}
            className="text-[var(--primary)]"
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            Employee Insights
          </h3>

          <p className="text-sm text-gray-500">
            View profile performance
          </p>
        </div>

      </div>

      <div className="my-6 h-px bg-gray-200"></div>

      <div className="space-y-4">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">

            <Eye
              size={18}
              className="text-[var(--primary)]"
            />

            <span>Total Visits</span>

          </div>

          <span className="font-semibold">
            1,245
          </span>

        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">

            <TrendingUp
              size={18}
              className="text-green-600"
            />

            <span>Growth</span>

          </div>

          <span className="font-semibold text-green-600">
            +18%
          </span>

        </div>

      </div>

      <button className="mt-6 w-full rounded-xl bg-[var(--primary)] py-3 text-white transition hover:bg-[var(--primary-hover)]">
        View Analytics →
      </button>

    </div>
  );
}

export default ProfileVisitsCard;