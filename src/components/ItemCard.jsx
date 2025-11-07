// ---------- ItemCard ----------
const formatNumber = (n) => Number(n).toLocaleString("es-CO");


function ItemCard({ item, index, onDelete, onEdit, onCalculate }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 border dark:border-gray-700 flex flex-col sm:flex-row items-start sm:items-center gap-3"
    >
      <div className="flex-1">
        <div className="text-lg font-medium text-gray-800 dark:text-white">{formatNumber(item.value)}</div>
        <div className="text-xs text-gray-500 dark:text-gray-300">Registrado: {new Date(item.addedAt).toLocaleString()}</div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onCalculate(item.value)}
          className="px-3 py-2 rounded-lg border border-green-300 text-sm text-green-700 hover:bg-green-50 dark:hover:bg-green-900/40"
        >
          Calcular
        </button>

        <button
          onClick={() => onEdit(index)}
          className="px-3 py-2 rounded-lg border border-gray-300 text-sm text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          Editar
        </button>

        <button
          onClick={() => onDelete(index)}
          className="px-3 py-2 rounded-lg border border-red-300 text-sm text-red-700 hover:bg-red-50 dark:hover:bg-red-900/40"
        >
          Eliminar
        </button>
      </div>
    </motion.div>
  );
}

export default ItemCard