import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  );
}
