import { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Nav />
    <main className="flex-1 pt-16">{children}</main>
    <Footer />
  </div>
);

export default Layout;
