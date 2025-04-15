import { useEffect } from "react";

export default function TestModal({ onClose }) {
  useEffect(() => {
    const count = document.querySelectorAll("*").length;
    console.log("🧠 Total DOM nodes desde TestModal:", count);
  }, []);

  return (
    <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
      <div className="bg-white text-black p-10 rounded-xl max-w-md">
        <button onClick={onClose} className="mb-4 bg-red-500 text-white px-3 py-1 rounded">
          Cerrar
        </button>
        <h2 className="text-xl font-bold">Este es un Test Modal</h2>
        <p>Solo tiene contenido mínimo para probar la cantidad de nodos.</p>
      </div>
    </div>
  );
}
