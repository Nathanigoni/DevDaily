// src/components/TagSelector.tsx
interface TagSelectorProps {
  selectedTags: string[];
  onToggle: (tag: string) => void;
}

const tagOptions = ['frontend', 'backend', 'bugfix', 'tooling', 'devops'];

export default function TagSelector({ selectedTags, onToggle }: TagSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tagOptions.map((tag) => (
        <button
          type="button"
          key={tag}
          onClick={() => onToggle(tag)}
          className={`px-3 py-1 rounded-full text-sm ${
            selectedTags.includes(tag)
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-800'
          }`}
        > 
          {tag}
        </button>
      ))}
    </div> 
  );
}
