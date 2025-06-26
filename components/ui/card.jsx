export const Card = ({ children, className = '' }) => (
  <div className={`bg-zinc-800 rounded-xl p-4 shadow-lg ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children, className = '' }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);