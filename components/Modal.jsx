export default function Modal({ children }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white text-black p-6 rounded-xl max-w-lg w-full">
        {children}
      </div>
    </div>
  );
}