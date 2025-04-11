import Header from "@/components/Header";
import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}

export default Layout;
