import { Skeleton } from "@/components/ui/skeleton";
export default function Loading() {
  return (
    <>
      <div className="mx-8 relative">
        <div>
          <Skeleton className="min-w-87.5 min-h-10.5 rounded-full " />
        </div>
        <div className="h-screen flex items-center justify-center">
          <div className="dot-spinner">
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
    </>
  );
}
