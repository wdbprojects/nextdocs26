import { Route } from "lucide-react";
import { oxanium } from "@/app/layout";

export default function AcmeLogo() {
  return (
    <div
      className={`${oxanium.className} flex flex-row items-center gap-2 leading-none text-white`}
    >
      <Route className="size-10 rotate-15" />
      <p className="text-[44px]">NextDocs26</p>
    </div>
  );
}
