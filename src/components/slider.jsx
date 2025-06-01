import Slider from "react-slick";
import './slider.css'

export default function SliderCards({ picture, color }) {  
  const defaultColor = color || 'bg-teal-600/60';
  console.log(color);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1280, // sotto i 1024px mostra 2 slide
        settings: {
          slidesToShow: 2,
          centerPadding: "40px"
        }
      },
      {
        breakpoint: 840, // sotto i 640px mostra 1 slide
        settings: {
          slidesToShow: 1,
          centerPadding: "15px",
          
        }
      }
    ]
  };
    return (
        
       <div className="w-full overflow-x-auto tmb-100 p-10">
        <Slider {...settings}>
            {picture.map((item, index) => (
                <div key={index} className="slide-item p-4 relative min-w-[300px] min-h-[300px] ">
                    
                    <div className="relative">
                    <img src={item.picture} alt={item.name} className="rounded-lg"></img>

                    </div>
                 <span className={`absolute inset-0 mt-50 flex items-center justify-center ml-6 mr-6 rounded-lg text-center`+ ` ${defaultColor}`}>
                       <a href={`meditazione/${item.id}`}> <h2 className="text-3xl font-body font-bold text-white">{item.name}</h2>  
                       <p className="text-xl font-body text-white">Durata: {item.duration} minuti</p> </a>
                    </span>
                 

                </div>
      ))}
        </Slider>
        </div>

    );}