import { Terminal } from "lucide-react";
import { useEffect, useState } from "react";

const WavyText = ({ text }: { text: string }) => {
  return (
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
};

const Index = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div
        className={`text-center transition-all duration-1000 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="mb-8 flex justify-center">
          <Terminal
            size={48}
            className="text-foreground animate-pulse"
            style={{ filter: "drop-shadow(0 0 12px hsl(0 0% 95% / 0.3))" }}
          />
        </div>

        <h1
          className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-7xl"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          sakn's edits
        </h1>

        <p
          className="text-xl text-muted-foreground sm:text-2xl tracking-widest uppercase"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <WavyText text="Coming Soon" />
        </p>
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
