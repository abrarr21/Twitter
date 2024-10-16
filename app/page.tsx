import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <Sidebar />
        {/* 2nd Column */}
        <div className="col-span-6 border-r-2 border-l-2 border-gray-500"></div>
        {/* 3rd Coumn */}
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
