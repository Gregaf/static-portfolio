export default function MainPage({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-slate-900 p-24 min-h-screen flex flex-col justify-between items-center">
      {children}
    </main>
  );
}
