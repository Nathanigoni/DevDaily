interface LogItemProps {
  entry: {
    text: string;
    tags: string[];
    date: string;
  };
}

export default function LogItem({ entry }: LogItemProps) {
  return (
    <div className="border rounded-md p-4 mb-2 bg-white">
      <div className="text-sm text-gray-500">{entry.date}</div>
      <div className="mt-1">{entry.text}</div>
      <div className="mt-2 flex gap-2 flex-wrap">
        {entry.tags.map((tag) => (
          <span
            key={tag}
            className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}