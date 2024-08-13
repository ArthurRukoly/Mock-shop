import { ReactNode } from "react";

export default function NavButton({ children }: { children: ReactNode }) {
  return <button className="text-xl">{children}</button>;
}
