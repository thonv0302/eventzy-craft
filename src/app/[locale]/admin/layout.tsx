import LanguageSwitcher from "@/app/components/LanguageSwitcher";

type AdminLayoutProps = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <>
      <LanguageSwitcher />
      {children}
    </>
  );
}
