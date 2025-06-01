export default function NotFound() {
  return (
    <div className="p-10 flex flex-col items-center justify-center w-screen bg-white mt-10">
      <h1 className="p-10 text-5xl text-center font-bold text-teal-700 mb-4">Non abbiamo trovato la pagina</h1>
      <img src="/assets/images/404.png" alt="Pagina non trovata" className="w-90 h-60 mb-6" />
      <p className="text-xl p-10 text-center text-gray-700 "> Qualcuno lo chiama errore 404, noi preferiamo chiamarlo una pausa per respirare e ricominciare :{")"}</p>
      <a
        href="/"
        className=" text-center drop-shadow-xl bg-yellow-500 text-teal-700 px-8 py-3 text-2xl rounded-full font-semibold hover:bg-yellow-100 hover:scale-130 hover:-translate-y-1 transition mt-10">
        Torna alla Home
      </a>
    </div>
  );
}