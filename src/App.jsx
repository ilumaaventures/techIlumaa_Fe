import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { TechnologySolutionsPage } from "./tech";

function App() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Ensure browser starts at top on refresh instead of restoring scroll
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const navEntry = performance.getEntriesByType("navigation")[0];
    const isReload = navEntry?.type === "reload" || performance.navigation?.type === 1;

    if (isReload) {
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }
      window.scrollTo(0, 0);
      return;
    }

    const scrollToHash = () => {
      const { hash } = window.location;
      if (!hash) return;
      const targetId = hash.replace(/^#/, "");
      const target = document.getElementById(targetId);
      if (target) {
        const navEl = document.querySelector("header");
        const navHeight = navEl ? navEl.offsetHeight : 68;
        const targetY = Math.max(0, target.getBoundingClientRect().top + window.scrollY - (navHeight - 1));
        window.scrollTo({ top: targetY, behavior: "smooth" });
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
