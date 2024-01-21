"use client";
import CategoryList from "@/components/Home/CategoryList";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session?.user) {
      router.push("/Login");
    }
  }, [session]);
  return (
    <div className="grid grid-cols-4 h-screen">
      <div className="p-3">
        <CategoryList />
      </div>
      <div className=" col-span-3">Second</div>
    </div>
  );
}
