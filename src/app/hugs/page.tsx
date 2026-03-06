"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HugsRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/board");
  }, [router]);
  return null;
}
