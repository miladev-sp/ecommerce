import { Skeleton } from "@/components/ui/skeleton";
export default function Loading() {
  return (
    <div className="px-8">
      <Skeleton className="w-full h-10" />
      <Skeleton className="w-1/4 mt-1.5 h-10" />
      <div className="flex items-center justify-center h-[80vh]">
        <div className="dot-spinner mt-11">
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
        </div>
      </div>
    </div>
  );
}
