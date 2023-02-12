import { Minus, Plus } from 'lucide-react';

import { useCount } from '@/hooks/useCount';

export function Counter() {
  const counter = useCount();

  return (
    <div className="flex items-center space-x-5 py-2">
      <span className="text-lg font-bold">{counter.count}</span>
      <div className="space-x-2">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border-none bg-slate-100 p-2 text-slate-900 shadow-sm outline-none"
          onClick={counter.decrement}
        >
          <Minus className="h-4 w-4" />
        </button>
        <button
          className="inline-flex items-center justify-center rounded-md border-none bg-slate-100 p-2 text-slate-900 shadow-sm outline-none"
          type="button"
          onClick={counter.increment}
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
