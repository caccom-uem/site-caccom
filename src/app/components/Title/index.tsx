export function Title({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl text-red font-bold mb-4 text-center lg:text-left">
      {children}
    </h1>
  );
}
