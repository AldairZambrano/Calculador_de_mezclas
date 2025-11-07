function Header({ dark, onToggleTheme, totalItems }) {
  return (
    <header className="flex items-center justify-between py-4 px-6 bg-white dark:bg-gray-900/60 border-b dark:border-gray-800">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 dark:text-white">InsumoSmart</h1>
        <p className="text-sm text-gray-500 dark:text-gray-300">Calculadora y gestor de cajas</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-600 dark:text-gray-300">Items: <span className="font-semibold">{totalItems}</span></div>
        <button
          onClick={onToggleTheme}
          className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border hover:scale-105 transition-transform"
          aria-label="Toggle theme"
        >
          {dark ? "Modo Claro" : "Modo Oscuro"}
        </button>
      </div>
    </header>
  );
}

export default  Header
