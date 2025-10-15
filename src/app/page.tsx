export default function Home() {
  return (
    <div>
      <main className="flex min-h-1/2 flex-col items-right justify-between p-24 bg-[#F6F1FB]">
          <div className="flex flex-col md:flex-row justify-between items-center" title={"About-Us-Summary"}>
              <h1 className="text-black text-3xl font-bold tracking-wide"> ABOUT US </h1>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center" title={"Animals-Summary"}>
              <h1 className="text-black text-3xl font-bold tracking-wide"> ANIMALES </h1>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center" title={"Contact-Summary"}>
              <h1 className="text-black text-3xl font-bold tracking-wide"> CONTACT US </h1>
          </div>
      </main>
    </div>
  );
}
