import React from 'react'
import { CalendarDays, BellRing, NotebookPen } from 'lucide-react'

export default function Header({ onClearFilter }) {
  return (
    <header className="w-full bg-gradient-to-r from-brand-600 to-brand-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <NotebookPen className="w-8 h-8" />
          <h1 className="text-2xl font-bold tracking-tight">📚 Study Planner</h1>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="hidden sm:flex items-center gap-1 opacity-90"><BellRing className="w-4 h-4"/> Reminders On</span>
          <button
            onClick={onClearFilter}
            className="bg-white/10 hover:bg-white/20 transition rounded-xl px-3 py-2 flex items-center gap-2"
            title="Show all dates"
          >
            <CalendarDays className="w-4 h-4"/> Reset Date Filter
          </button>
        </div>
      </div>
    </header>
  )
}