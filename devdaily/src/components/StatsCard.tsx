// src/components/StatsCard.tsx
interface StatsCardProps {
  total: number;
  streak: number;
  mostUsedTag: string;
}

export default function StatsCard({ total, streak, mostUsedTag }: StatsCardProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded-md shadow text-center">
        <div className="text-sm text-gray-500">Total Logs</div>
        <div className="text-xl font-bold">{total}</div>
      </div>
      <div className="bg-white p-4 rounded-md shadow text-center">
        <div className="text-sm text-gray-500">Current Streak</div>
        <div className="text-xl font-bold">{streak} 🔥</div>
      </div>
      <div className="bg-white p-4 rounded-md shadow text-center">
        <div className="text-sm text-gray-500">Top Tag</div>
        <div className="text-xl font-bold">{mostUsedTag || '-'}</div>
      </div>
    </div>
  );
}
