import { useEffect } from "react";

const useDomCountLogger = (componentName = "Componente") => {
  useEffect(() => {
    const count = document.querySelectorAll("*").length;
    console.log(`🔎 ${componentName} → DOM nodes:`, count);
  }, []);
};

export default useDomCountLogger;
