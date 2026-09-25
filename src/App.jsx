import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { TechnologySolutionsPage } from "./tech";

function App() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const scrollToHash = () => {
      const { hash } = window.location;
      if (!hash) return;
      const targetId = hash.replace(/^#/, "");
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <div className="site-shell min-h-screen w-full max-w-full bg-bg-primary text-text-primary">
      <Navbar isTechnologyPage={true} />
      <main className="w-full max-w-full">
        <TechnologySolutionsPage />
      </main>
      <Footer isTechnologyPage={true} />
    </div>
  );
}

export default App;
