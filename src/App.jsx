/* InsumoSmart - Dashboard React + Tailwind

Instructions:
- This is a single-file React component (App.jsx).
- Requires: React, TailwindCSS, framer-motion.
- Copy into your src/App.jsx and ensure Tailwind is configured.

Features included:
- Components: Header, AddForm, ItemCard, CalculationsPanel, Footer
- Dark / Light mode with persistence in localStorage
- Persist items in localStorage
- Smooth animations with framer-motion
- Responsive, modern Tailwind UI
*/

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Component
import AddForm from "./components/AddForm";
import Header from "./components/Header";
import CalculationsPanel from "./components/Panel";
import ItemCard from "./components/ItemCard";
import Footer from "./components/Footer";
// ---------- Helpers ----------
const STORAGE_KEY = "insumosmart_items_v1";
const THEME_KEY = "insumosmart_theme_v1";





// ---------- Main App ----------
export default function App() {
  const [items, setItems] = useState([]);
  const [results, setResults] = useState(null);
  const [themeDark, setThemeDark] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
      const theme = localStorage.getItem(THEME_KEY);
      if (theme) setThemeDark(theme === "dark");
    } catch (e) {
      console.warn("Error reading storage", e);
    }
  }, []);

  // Persist items
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  // Persist theme and apply dark class
  useEffect(() => {
    localStorage.setItem(THEME_KEY, themeDark ? "dark" : "light");
    if (themeDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [themeDark]);

  const addItem = (value) => {
    const newItem = { value, addedAt: Date.now() };
    setItems((s) => [newItem, ...s]);
  };

  const deleteItem = (index) => {
    setItems((s) => s.filter((_, i) => i !== index));
  };

  const editItem = (index) => {
    const current = items[index];
    const newValue = prompt("Edita el valor:", String(current.value));
    if (newValue !== null && newValue !== "") {
      setItems((s) => s.map((it, i) => (i === index ? { ...it, value: Number(newValue) } : it)));
    }
  };

  const calculateValue = (value) => {
    const numericValue = Number(value);
    if (isNaN(numericValue)) return;
    const result = numericValue * 0.18; // agua de alumbre total
    const ValueGraduarte = result * 0.84;
    const result2 = numericValue * 0.02; // bomba
    const ValueBomba = result2;
    const ValueRyzup = result2 * 2.5;

    setResults({ calculatedValue: result, ValueGraduarte, ValueBomba, ValueRyzup });
  };

  const clearAll = () => {
    if (confirm("¿Seguro que deseas eliminar todas las cajas?")) setItems([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <Header dark={themeDark} onToggleTheme={() => setThemeDark((v) => !v)} totalItems={items.length} />

      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - form + list */}
        <section className="lg:col-span-2 space-y-4">
          <AddForm onAdd={addItem} />

          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cajas Agregadas</h2>
            <div className="text-sm text-gray-500 dark:text-gray-300">Total: <span className="font-semibold">{items.length}</span></div>
          </div>

          <div className="space-y-3">
            <AnimatePresence>
              {items.length === 0 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bg-white dark:bg-gray-800 rounded-xl border dark:border-gray-700">
                  <div className="text-sm text-gray-500">No hay cajas registradas. Agrega una arriba.</div>
                </motion.div>
              )}

              {items.map((it, idx) => (
                <ItemCard
                  key={it.addedAt}
                  item={it}
                  index={idx}
                  onDelete={deleteItem}
                  onEdit={editItem}
                  onCalculate={calculateValue}
                />
              ))}
            </AnimatePresence>
          </div>

          <div className="flex justify-end">
            <button onClick={clearAll} className="px-4 py-2 text-sm rounded-lg border border-red-300 text-red-700 hover:bg-red-50 dark:hover:bg-red-900/40">Vaciar todo</button>
          </div>
        </section>

        {/* Right column - results */}
        <aside>
          <CalculationsPanel data={results} />
          <div className="mt-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 border dark:border-gray-700 shadow-sm">
              <h4 className="text-sm text-gray-500 mb-2">Acciones rápidas</h4>
              <div className="flex flex-col gap-2">
                <button onClick={() => navigator.clipboard && results && navigator.clipboard.writeText(JSON.stringify(results))} className="px-3 py-2 rounded-lg border text-sm">Copiar resultado (JSON)</button>
                <button onClick={() => alert('Función en desarrollo') } className="px-3 py-2 rounded-lg border text-sm">Exportar CSV</button>
              </div>
            </div>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
}
