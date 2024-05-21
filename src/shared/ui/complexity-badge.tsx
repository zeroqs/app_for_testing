import { showComplexity } from '@/shared/lib/show-complexity'

export const ComplexityBadge = ({ complexity }: { complexity: number }) => {
  return (
    <div
      className={`${
        complexity === 0
          ? 'bg-green-100 text-green-800'
          : complexity === 1
            ? 'bg-yellow-100 text-yellow-800'
            : 'bg-red-100 text-red-800'
      } inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium`}
    >
      {showComplexity(complexity)}
    </div>
  )
}
