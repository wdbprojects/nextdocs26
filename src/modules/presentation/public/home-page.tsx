import { lusitana } from "@/app/layout";
import AcmeLogo from "@/components/shared/acme-logo";
import { cn } from "@/lib/utils";
import LoginButton from "@/modules/components/auth/login-button";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <main className="flex h-[calc(100vh-50px)] flex-col p-6">
      <div className="bg-primary/80 flex h-20 shrink-0 items-end rounded-lg p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="bg-primary/10 flex flex-col justify-center gap-6 rounded-lg px-6 py-10 md:w-2/5 md:px-20">
          <div className="relative h-0 w-0 border-r-15 border-b-26 border-l-15 border-r-transparent border-b-blue-600 border-l-transparent dark:border-b-blue-500" />
          <p className={cn("text-muted-foreground text-2xl")}>
            <strong>Welcome to NextDocs26.</strong>
          </p>
          <p className={cn(lusitana.className, "text-muted-foreground")}>
            This is a example for the{" "}
            <Link
              href="https://nextjs.org/learn/"
              className="font-bold text-blue-500 transition-all hover:text-blue-600"
            >
              Next.js Learn Course
            </Link>
            , brought to you by Vercel.
          </p>
          <LoginButton
            variant="default"
            size="lg"
            className="text-sm font-bold"
          />
        </div>
        <div className="flex items-center justify-center p-6">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            alt="Screenshots of the dashboard project showing desktop version"
            className="hidden md:block"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            alt="Screenshots of the dashboard project showing mobile version"
            className="block md:hidden"
          />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
