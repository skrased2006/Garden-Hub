import React from 'react';

const gardenGuides = [
  {
    title: 'Backyard Makeover: Transform Your Outdoor Space',
    description: 'Explore creative ways to turn your backyard into a relaxing, green paradise with minimal effort.',
    img: 'https://i.postimg.cc/XJWWQG4p/Allied-1.jpg',
    link: 'https://outdoormakeover.net/',
  },
  {
    title: 'Grow Your Own Veggies: Beginner Vegetable Garden',
    description: 'Start growing fresh vegetables at home with this easy, beginner-friendly gardening guide.',
    img: 'https://i.postimg.cc/DwfbY0fp/tips-for-raised-bed-vegetable-garden-v2-1140x605.png',
    link: 'https://www.universalclass.com/i/course/vegetable-gardening-101.htm?utm_source=chatgpt.com',
  },
  {
    title: 'Indoor Plant Magic: Houseplant Styling & Care',
    description: 'Discover the best indoor plants and tips to create a fresh, breathable living space.',
    img: 'https://i.postimg.cc/GthCnWBR/promix-comment-disposer-plantes-interieur-06.jpg',
    link: 'https://www.houseplantmasterclass.com/?utm_source=chatgpt.com',
  },
  {
    title: 'Flower Garden Design: Add Color & Beauty',
    description: 'Plan and plant a vibrant flower garden with seasonal blooms that attract butterflies.',
    img: 'https://i.postimg.cc/QMQG981s/Getty-Images-1414023501-adc556405d4c439b8cb077d15522d00e.jpg',
    link: 'https://www.createacademy.com/courses/dan-pearson?srsltid=AfmBOoqZvolSzE7Z_ETzbJpFZzyCCTvPDug-xzP_9imje9kjkXdvgjNX&utm_source=chatgpt.com',
  },
  {
    title: 'Tree Care 101: Planting & Nurturing Trees',
    description: 'Learn how to plant, prune, and care for trees to keep your garden green and healthy.',
    img: 'https://i.postimg.cc/ZnD1tCtP/images-4.jpg',
    link: 'https://treecareindustryassociation.org/education/tree-care-academy/tree-care-specialist/?utm_source=chatgpt.com',
  },
  {
    title: 'Eco-Friendly Gardening: Sustainable Tips',
    description: 'Create a sustainable garden using composting, rainwater harvesting, and organic methods.',
    img: 'https://i.postimg.cc/9MLkZrM3/images-5.jpg',
    link: 'https://courses.finegardening.com/sustainability-in-the-garden?utm_source=chatgpt.com',
  },
];

const GardenIdeas = () => {
  return (
    <section className="px-4 py-10 md:px-10 lg:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">🌿 Garden Inspiration: 6 Great Course</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gardenGuides.map((guide, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img src={guide.img} alt={guide.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-green-700">{guide.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{guide.description}</p>
              <a
                href={guide.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md transition-colors duration-300"
              >
                View Course
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GardenIdeas;
