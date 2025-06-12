import BrandInput from "./components/client/BrandInput";
import Sidebar from "./components/client/Sidebar";
import TopPanel from "./components/client/TopPanel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <div className="flex flex-col items-center justify-center flex-1 py-2">
          <TopPanel />
          <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <h1 className="text-2xl mb-6">
              Let&apos;s start with a logo...
            </h1>
            <BrandInput />
          </main>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
