export const metadata = {
  title: "Contact | Gregory Freitas",
  description:
    "Contact page to allow viewers to contact the developer of this website",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
