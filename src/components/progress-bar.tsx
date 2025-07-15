import React from "react";

interface ProgressBarProps {
  /**
   * Porcentagem de progresso (0 a 100)
   */
  progress?: number;
  /**
   * Se true, mostra animação contínua de loading
   */
  loading?: boolean;
  /**
   * Altura da barra (ex: '8px', '1rem')
   */
  height?: string;
  /**
   * Cor da barra de progresso (classe Tailwind ex: 'bg-indigo-600')
   */
  colorClass?: string;
}

/**
 * Barra de progresso animada para loading.
 * Pode ser usada tanto com valor fixo (progress) quanto em modo loading contínuo.
 */
const ProgressBar: React.FC<ProgressBarProps> = ({
  progress = 0,
  loading = false,
  height = "h-1.5", // Tailwind: h-1.5 = 6px
  colorClass = "bg-orange-500", // Preto
}) => {
  return (
    <div
      className={`w-full bg-gray-200 rounded ${height} relative overflow-hidden`}
    >
      <div
        className={`absolute left-0 top-0 ${height} ${colorClass} rounded transition-all duration-400 ease-[cubic-bezier(.4,1,.7,1)] ${loading ? "progress-bar-loading" : ""}`}
        style={{ width: loading ? undefined : `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar; 