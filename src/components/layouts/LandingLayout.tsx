import Navbar from "../landing/Navbar";
import Footer from "../landing/Footer";

interface LandingLayoutProps {
  children: React.ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
