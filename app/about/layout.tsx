export const metadata = {
  title: "About | Gregory Freitas",
  description:
    "About page to explain the purpose of this website and the developer",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
