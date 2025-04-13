import grainImage from "../assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";

export default function Card({ className, children }) {
  return (
    <div
      className={twMerge(
        "bg-emerald-300/5 rounded-3xl border border-emerald-500/[0.2] relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0  after:outline after:outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none p-6",
        className
      )}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage})`,
        }}
      />
      {children}
    </div>
  );
}
