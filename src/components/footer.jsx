// Footer con link di navigazione e logo

export default function FooterWithLogo() {

  return (
    <div className="w-full bg-white p-8 mt-30">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <h1 className="text-2xl font-bold font-display text-black">FreeMind</h1>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 ">
          <li>
            <a  href="#"
              color="blue-gray"
              className="font-body transition-colors hover:text-blue-500 focus:text-blue-500" >
              About Us</a> 
          </li>
                <li>
            <a  href="#"
              color="blue-gray"
              className="font-body transition-colors hover:text-blue-500 focus:text-blue-500" >
              Contact Us</a> 
          </li>
               <li>
            <a  href="#"
              color="blue-gray"
              className="font-body transition-colors hover:text-blue-500 focus:text-blue-500" >
              Privacy Policy</a> 
          </li>
           
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
     
    </div>
  );
}