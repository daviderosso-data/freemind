
function Menu(){

return(
    <nav className="bg-white w-full z-10">
         <div className="max-w-screen-xl mx-auto flex justify-between items-center p-2">
        <h1 className="text-3xl font-bold font-display text-teal-600">FreeMind</h1>
        <ul className="flex space-x-3 pr-2 text-xl text-teal-900 text-bold font-body">
            <li>
            <a href="/" className="hover:underline decoration-teal-400 transition">Home</a>
          </li>
          <li>
            <a href="/meditazione" className="hover:underline decoration-teal-400 transition">Meditazione</a>
          </li>
        </ul>
      </div>
    </nav>  
)
}
export default Menu;