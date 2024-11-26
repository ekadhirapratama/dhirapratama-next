export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center pb-12">
        <div>
          <div className="lg:text-4xl text-2xl font-bold text-slate-600">
            EKA PRATAMANDHIRA
          </div>
          <div className="text-lg font-bold text-slate-600">
            Software Programmer
          </div>
          <div className="text-slate-400">
            short tagline
          </div>
          <div>
            contacts
          </div>
        </div>

        <div>
          <img 
            className="w-[72px] rounded-full" 
            src="https://avatars2.githubusercontent.com/u/9100683?s=400&u=6306b1499da233a4d873ced25f4e4a76f4f66135&v=4" 
            alt="avatar"
          />
        </div>
      </div>

      <div>
        <header className="sticky z-10 main-header backdrop-blur-md bg-header">
          <nav className="px-4 md:px-6 py-2 mx-auto flex justify-center items-center">
            <ul>About</ul>
            <ul className="px-12">Experiences</ul>
            <ul>Projects</ul>
          </nav>
        </header>
      </div>
    </>
  );
}
