// ---------- CalculationsPanel ----------
function CalculationsPanel({ data }) {
  if (!data) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 border dark:border-gray-700 shadow-sm">
        <div className="text-sm text-gray-500">Realiza un cálculo seleccionando "Calcular" en una caja.</div>
      </div>
    );
  }

  return (
    <motion.div layout className="bg-white dark:bg-gray-800 rounded-2xl p-4 border dark:border-gray-700 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Resultados</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
          <div className="text-sm text-gray-500">Agua de Alumbre total</div>
          <div className="text-xl font-bold text-gray-800 dark:text-white">{formatNumber(Math.round(data.calculatedValue || 0))} Litros</div>
        </div>

        <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
          <div className="text-sm text-gray-500">Agua de bomba 20LT</div>
          <div className="text-xl font-bold text-gray-800 dark:text-white">{formatNumber(Math.round(data.ValueBomba || 0))} Litros</div>
        </div>

        <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
          <div className="text-sm text-gray-500">Centímetros cúbicos de Graduate</div>
          <div className="text-xl font-bold text-gray-800 dark:text-white">{formatNumber(Math.round(data.ValueGraduarte || 0))} CC</div>
        </div>

        <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
          <div className="text-sm text-gray-500">Gramos de Ryzup</div>
          <div className="text-xl font-bold text-gray-800 dark:text-white">{formatNumber(Math.round(data.ValueRyzup || 0))} g</div>
        </div>
      </div>
    </motion.div>
  );
}

export default CalculationsPanel