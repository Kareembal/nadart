export default function Footer() {
  return (
    <footer className="text-center py-8 text-sm text-purple-400">
      &copy; {new Date().getFullYear()} NadArt. Built on Monad.
    </footer>
  );
}