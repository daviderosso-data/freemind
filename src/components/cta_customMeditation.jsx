export default function cta_customMeditation() {
    return (
        <div className="flex flex-col lg:flex-row m-10">
      
            <div className="flex-1 mb:flex-none bg-teal-600/70 text-white p-8 flex flex-col items-center justify-center rounded-lg drop-shadow-xl m-3 ">
                  <h2 className="text-3xl font-body font-bold mb-4 text-center">Personalizza la tua meditazione</h2>
        <p className="mb-6 text-xl text-center justify-center">Scelgli il tuo tempo e <b>medita</b>, nessuna fretta, nessuna pressione. Oppure scegli tra i numerosi <b>percorsi</b> meditativi.
        </p>
         <a href="/meditazionecustom" className=" text-center drop-shadow-xl bg-yellow-500 text-teal-700 px-8 py-3 text-2xl rounded-full font-semibold hover:bg-yellow-100 hover:scale-130 hover:-translate-y-1 transition mt-10">
Meditazione Personalizzata</a>
                </div>
        <div className="flex-1 mb:flex-none p-3 flex flex-col items-center justify-cente drop-shadow-xl ">
            <img src="/assets/images/meditation_pic1.png" alt="Meditazione" className="rounded-lg shadow-lg transition duration-1200 hover:scale-105 hover:rotate-3" />
            
            </div>
        </div>
    );
    }