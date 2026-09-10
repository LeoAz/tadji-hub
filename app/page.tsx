import Link from "next/link";

const APPLICATIONS = [
  {
    name: "TADJI TRANSPORT",
    description: "Gestion complète du parc automobile, version 2",
    href: "https://tadji-ecofleet.kiri-app.com/",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    name: "TADJI APPRO",
    description: "gestion de la chaine d'approvisionnement",
    href: "https://tadji-appro.kiri-app.com",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#1A1A1A]">
      <main className="grow flex flex-col items-center justify-center px-6 py-24">
        <div className="w-full max-w-5xl">
          <header className="mb-24 text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-black">
              TADJI Hub
            </h1>
            <p className="text-base md:text-lg text-gray-500 font-normal max-w-lg mx-auto leading-relaxed">
              Une plateforme centralisée pour piloter l&apos;ensemble de vos opérations métier en toute simplicité.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {APPLICATIONS.map((app) => (
              <Link
                key={app.name}
                href={app.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group uppercase flex flex-col p-8 bg-[#F9F9F9] transition-all duration-300 hover:bg-black"
              >
                <div className="w-10 h-10 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors duration-300 mb-12">
                  {app.icon}
                </div>
                <div className="mt-auto space-y-2">
                  <h3 className="text-sm font-bold tracking-tight text-black group-hover:text-white transition-colors duration-300">
                    {app.name}
                  </h3>
                  <p className="text-[12px] text-gray-500 group-hover:text-gray-400 transition-colors duration-300 leading-snug font-medium">
                    {app.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <footer className="py-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[11px] text-gray-400 font-semibold tracking-widest uppercase">
            © 2026 Tadji Hub
          </div>
          <nav className="flex gap-8">
            {["Conditions", "Confidentialité", "Support"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-[11px] text-gray-400 hover:text-black transition-colors duration-300 font-bold uppercase tracking-widest"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
