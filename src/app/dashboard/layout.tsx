import Sidebar from "../components/Sidebar"



export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (

   
    <div className="flex min-h-screen">
   
      <aside className="w-[20%] min-h-screen fixed z-10 ">
        <Sidebar />
      </aside>

 
      <main className=" w-[80%] ml-[20%]">
        {children}
      </main>
    </div>
   

  );
}
