export default function Cta() {
    return (
        <div className="flex flex-col lg:flex-row m-10">
      
            <div className="flex-1 mb:flex-none bg-teal-600/70 text-white p-8 flex flex-col items-center justify-center rounded-lg drop-shadow-xl/30 m-3 ">
                  <h2 className="text-3xl font-body font-bold mb-4">Tutta la meditazione che ti serve</h2>
        <p className="mb-6 text-xl text-center justify-center">Scopri i nostri percorsi meditativi, pensati per guidarti verso il tuo <b>equilibrio interiore.</b> 
            Esplora pratiche uniche che uniscono calma, consapevolezza e benessere, trasformando ogni <b> momento in un'opportunità</b> per ritrovare serenità e crescita personale.
        </p>
         <a href="/meditazione" className="drop-shadow-xl bg-yellow-500 text-teal-700 px-8 py-3 text-2xl rounded-full font-semibold hover:bg-yellow-100 hover:scale-130 hover:-translate-y-1 transition mt-10">
Scopri i percorsi</a>
                </div>
        <div className="flex-1 mb:flex-none p-3 flex flex-col items-center justify-cente drop-shadow-xl/30 ">
            <img src="/assets/images/meditationCTA.png" alt="Meditazione" className="rounded-lg shadow-lg transition duration-1200 hover:scale-105 hover:rotate-3" />
            
            </div>
        </div>
    );
    }

