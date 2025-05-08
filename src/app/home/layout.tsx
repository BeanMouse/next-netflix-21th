import HeaderNavigation from "./header-navigation";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <HeaderNavigation />
      {children}
    </div>
  );
}
