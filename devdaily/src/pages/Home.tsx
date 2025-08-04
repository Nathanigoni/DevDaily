import Header from '../components/Header';
import LogForm from '../components/LogForm';
import LogItem from '../components/LogItem';
import StatsCard from '../components/StatsCard';
import { useLogs } from '../features/logs/useLogs';
import { getStreak, getMostUsedTag } from '../utils/dateUtils';

export default function Home() {
  const { logs, addLog } = useLogs();

  const streak = getStreak(logs);
  const mostUsedTag = getMostUsedTag(logs);

  return (
    <>
      {/* Header */}
      <Header />

      <main className="max-w-3xl mx-auto p-4">
        {/* Stats */}
        <StatsCard total={logs.length} streak={streak} mostUsedTag={mostUsedTag} />

        {/* Form */}
        <LogForm onSave={addLog} />

        <hr className="my-6" />
        <h2 className="text-xl font-semibold mb-2">📚 Log History</h2>

        {/* Logs */}
        {logs.length === 0 ? (
          <p className="text-gray-500">No logs yet. Start tracking your growth!</p>
        ) : (
          logs.map((log, index) => (
            <LogItem key={index} entry={log} />
          ))
        )}
      </main>
    </>
  );
}
