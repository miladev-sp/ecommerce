export default function ProductsSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-y-7 gap-x-4 min-[1211px]:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="w-full shrink-0 animate-pulse">
          <div className="bg-gray-200 rounded-xl aspect-square mb-3" />
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
        </div>
      ))}
    </div>
  );
}
