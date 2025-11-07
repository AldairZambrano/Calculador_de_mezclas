import { useState } from "react";

function AddForm({ onAdd }) {
  const [value, setValue] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!value || isNaN(Number(value))) return;
    onAdd(Number(value));
    setValue("");
  };

  return (
    <form onSubmit={submit} className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm border dark:border-gray-700">
      <label className="block text-sm text-gray-600 dark:text-gray-300 font-medium mb-2">Ingrese el valor de las cajas</label>
      <div className="flex gap-3">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="flex-1 p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-green-400"
          placeholder="e.g. 120"
        />
        <button className="px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold shadow-md">Agregar</button>
      </div>
    </form>
  );
}

export default AddForm