export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="flex items-center gap-2 mb-6">
        {[36, 8, 42, 8, 72, 8, 120].map((w, i) => (
          <div
            key={i}
            className="h-3 bg-gray-200 rounded"
            style={{ width: w }}
          />
        ))}
      </div>

      <div className="grid grid-cols-[72px_1fr_1fr] gap-6 items-start">
        <div className="flex flex-col gap-2">
          <div className="w-18 h-18 bg-gray-200 rounded-xl" />
          <div className="w-18 h-18 bg-gray-200 rounded-xl opacity-60" />
        </div>

        <div className="w-full aspect-square max-h-85 bg-gray-200 rounded-2xl" />

        <div className="flex flex-col gap-4 pt-1">
          <div className="h-7 bg-gray-200 rounded w-4/5" />
          <div className="h-7 bg-gray-200 rounded w-1/2 -mt-2" />

          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="w-4 h-4 bg-gray-200 rounded-full" />
              ))}
            </div>
            <div className="h-3 bg-gray-200 rounded w-11" />
          </div>

          <div className="flex items-center gap-2">
            <div className="h-6 bg-gray-200 rounded w-14" />
            <div className="h-5 bg-gray-200 rounded w-16 opacity-50" />
            <div className="h-5 bg-gray-200 rounded-full w-11" />
          </div>

          <div className="space-y-1.5">
            <div className="h-3 bg-gray-200 rounded w-full" />
            <div className="h-3 bg-gray-200 rounded w-11/12" />
          </div>
          <div className="border-t border-gray-100 pt-3">
            <div className="h-3 bg-gray-200 rounded w-20 mb-3" />
            <div className="flex gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 bg-gray-200 rounded-full" />
              ))}
            </div>
          </div>

          <div className="border-t border-gray-100 pt-3">
            <div className="h-3 bg-gray-200 rounded w-16 mb-3" />
            <div className="flex gap-2">
              {[68, 80, 66, 76].map((w, i) => (
                <div
                  key={i}
                  className="h-9 bg-gray-200 rounded-full"
                  style={{ width: w }}
                />
              ))}
            </div>
          </div>

          <div className="flex gap-3 mt-1">
            <div className="h-11 w-28 bg-gray-200 rounded-full" />
            <div className="h-11 flex-1 bg-gray-200 rounded-full" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 mt-8 pt-4">
        <div className="grid grid-cols-3 pb-3 border-b border-gray-100">
          {[90, 110, 50].map((w, i) => (
            <div key={i} className="flex justify-center">
              <div className="h-3.5 bg-gray-200 rounded" style={{ width: w }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
