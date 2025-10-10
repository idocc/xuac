"use client";

import { useState } from "react";
import PreloadResources from "@/components/PreloadResources";

export function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <PreloadResources onLoadComplete={() => setIsLoaded(true)} />}
      {children}
    </>
  );
}

