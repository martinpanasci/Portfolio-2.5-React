import { useEffect, useState } from "react";

export default function LogConsole() {
  const [logs, setLogs] = useState([]);
  const [platformInfo, setPlatformInfo] = useState("");

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    let info = "Dispositivo desconocido";

    if (/iphone|ipad|ipod/.test(ua)) info = "iOS";
    else if (/android/.test(ua)) info = "Android";
    else if (/windows/.test(ua)) info = "Windows";
    else if (/mac/.test(ua)) info = "Mac";

    setPlatformInfo(info);

    const originalLog = console.log;
    const originalError = console.error;

    console.log = (...args) => {
      setLogs(prev => [...prev, { type: "log", text: args.join(" ") }]);
      originalLog(...args);
    };

    console.error = (...args) => {
      setLogs(prev => [...prev, { type: "error", text: args.join(" ") }]);
      originalError(...args);
    };

    window.addEventListener("error", (e) => {
      setLogs(prev => [...prev, { type: "error", text: e.message }]);
    });

    return () => {
      console.log = originalLog;
      console.error = originalError;
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] bg-black text-white text-xs p-2 overflow-y-auto max-h-40 border-b border-emerald-400">
      <div className="font-bold text-emerald-300">📱 Plataforma: {platformInfo}</div>
      {logs.map((log, i) => (
        <div key={i} className={log.type === "error" ? "text-red-400" : "text-gray-200"}>
          {log.text}
        </div>
      ))}
    </div>
  );
}
