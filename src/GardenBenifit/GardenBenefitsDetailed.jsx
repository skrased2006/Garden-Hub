import { Typewriter } from "react-simple-typewriter";

const GardenBenefitsDetailed = () => {
    const benefits = [
      {
        title: "🌱 Improves Mental Peace",
        description:
          "Spending time in nature helps reduce stress and boosts your mood. Taking care of plants creates a meditative experience that can help reduce anxiety and depression.",
        image: "https://i.postimg.cc/GtvhKKJZ/Benefits-of-Indoor-Plants-A-Guide-to-How-They-Help-Relieve-Stress-and-Anxiety-504384.webp"
      },
      {
        title: " Encourages Physical Exercise",
        description:
          "Gardening activities like digging, watering, and weeding act as natural workouts. These regular movements help improve your physical fitness and strength.",
        image: "https://i.postimg.cc/s28jRqTk/Garden-is-a-gym-1-940x627.jpg"
      },
      {
        title: " Provides Healthy Food",
        description:
          "Growing your own vegetables and fruits ensures a safe and organic food supply. You can avoid harmful pesticides and enjoy fresh, nutritious produce.",
        image: "https://i.postimg.cc/7YDxDgNZ/images-2.jpg"
      },
      {
        title: "Protects the Environment",
        description:
          "Plants absorb carbon dioxide and release oxygen, purifying the air. Gardening contributes to a healthier ecosystem and helps combat climate change.",
        image: "https://i.postimg.cc/9QQCwCK3/intro-1678707888.jpg"
      },
      {
        title: " Supports Biodiversity",
        description:
          "A garden offers shelter to birds, bees, butterflies, and other beneficial creatures. It plays a key role in preserving local wildlife and promoting ecological balance.",
        image: "https://i.postimg.cc/zfLNppq0/images-3.jpg"
      }
    ];
  
    return (
      <section className="p-6 bg-green-50 border border-green-200 rounded-2xl shadow-md mt-8 max-w-11/12 mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-green-800 text-center"> 
            <Typewriter
                words={[
               '  Benefits of Gardening ',
                ]}
                             
               cursor
                    loop={true}         
                 cursorStyle="|"
                 typeSpeed={80}
                 deleteSpeed={50}
                delaySpeed={1500}
                            />
          
         </h2>
        <div className="space-y-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-green-400 flex flex-col md:flex-row gap-4 items-start"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full md:w-64 h-40 object-cover rounded-lg shadow-md"
              />
              <div>
                <h3 className="text-xl font-semibold text-green-700">{item.title}</h3>
                <p className="text-gray-700 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default GardenBenefitsDetailed;
  