import Sidebar from "./components/ui/Sidebar";
import TopPanel from "./components/ui/TopPanel";
import BrandBuilder from "./components/ui/BrandBuilder";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <div className="flex flex-col items-center justify-center flex-1 py-2">
          <TopPanel />
          <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <BrandBuilder />
          </main>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
