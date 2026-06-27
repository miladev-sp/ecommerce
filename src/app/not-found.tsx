import Image from "next/image";
import notFound from "@/public/notfound.webp";
export default function NotFound() {
  return (
    <div className="w-screen h-screen relative">
      <Image src={notFound} alt="" fill />
    </div>
  );
}
