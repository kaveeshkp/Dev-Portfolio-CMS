function Skeleton({ className = "" }) {
  return (
    <div className={`animate-pulse rounded-lg bg-slate-200 dark:bg-slate-700 ${className}`} />
  );
}

function ProjectCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm">
      <Skeleton className="h-48 rounded-none" />
      <div className="p-6">
        <Skeleton className="h-6 w-3/4 mb-3" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mb-4" />
        <div className="flex gap-2 mb-6">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-14 rounded-full" />
        </div>
        <div className="flex gap-3">
          <Skeleton className="h-10 w-24 rounded-xl" />
          <Skeleton className="h-10 w-28 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

function SkillCardSkeleton() {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <Skeleton className="h-5 w-24" />
        <Skeleton className="h-5 w-12" />
      </div>
      <Skeleton className="h-4 w-16 mb-4" />
      <Skeleton className="h-2 w-full rounded-full" />
    </div>
  );
}

function BlogCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm">
      <Skeleton className="h-48 rounded-none" />
      <div className="p-6">
        <Skeleton className="h-4 w-24 mb-3" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  );
}

export { Skeleton, ProjectCardSkeleton, SkillCardSkeleton, BlogCardSkeleton };
