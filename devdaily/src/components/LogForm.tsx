import React, { useState } from 'react';

interface LogFormProps {
  onSave: (entry: { text: string; tags: string[] }) => void;
}

const tagOptions = ['frontend', 'backend', 'bugfix', 'tooling', 'devops'];

export default function LogForm({ onSave }: LogFormProps) {
  const [text, setText] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSave({ text, tags });
      setText('');
      setTags([]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 border rounded-md"
        rows={4}
        placeholder="What did you learn today?"
      />
      <div className="flex flex-wrap gap-2">
        {tagOptions.map((tag) => (
          <button
            type="button"
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-3 py-1 rounded-full text-sm ${
              tags.includes(tag)
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded-md"
      >
        Save Entry
      </button>
    </form>
  );
}
