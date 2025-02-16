import { ReactNode } from "react";

export interface filterProvider {
  children: ReactNode
}

export interface filterInput {
  filter: string,
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}