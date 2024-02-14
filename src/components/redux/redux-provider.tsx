"use client";
import React, { ReactNode } from "react";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { dummyApi } from "./api";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <ApiProvider api={dummyApi}>{children}</ApiProvider>;
}
