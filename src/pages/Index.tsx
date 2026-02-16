import { Terminal } from "lucide-react";
import { useEffect, useState } from "react";

const WavyText = ({ text }: { text: string }) => (
  <span className="inline-flex">
    {text.split("").map((char, i) => (
      <span
        key={i}
        className="inline-block"
        style={{
          animation: `wave 2.5s ease-in-out infinite`,
          animationDelay: `${i * 0.08}s`,
        }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ))}
  </span>
);

const Index = () => {
  const [phase, setPhase] = useState<"splash" | "fading" | "main">("splash");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("fading"), 2500);
    const t2 = setTimeout(() => setPhase("main"), 3500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Splash screen */}
      <div
        className={`absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-1000 ${
          phase === "splash" ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="text-center animate-fade-in">
          <div className="mb-6 flex justify-center">
            <Terminal
              size={56}
              className="text-foreground animate-pulse"
              style={{ filter: "drop-shadow(0 0 16px hsl(0 0% 95% / 0.4))" }}
            />
          </div>
          <h1
            className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            sakn's edits
          </h1>
        </div>
      </div>

      {/* Main coming soon page */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
          phase === "main" ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-center">
          <p
            className="text-2xl text-muted-foreground sm:text-4xl tracking-widest uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <WavyText text="Coming Soon" />
          </p>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');
        @keyframes wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  );
};

export default Index;
