// Reusable custom React hooks
import { useState, useMemo } from 'react'

export function useProjectFilter(projects, initialCategory = 'all') {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return projects
    return projects.filter((project) => project.category === selectedCategory)
  }, [projects, selectedCategory])

  return {
    selectedCategory,
    setSelectedCategory,
    filteredProjects,
  }
}
