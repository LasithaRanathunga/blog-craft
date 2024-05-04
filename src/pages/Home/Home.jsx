import ArticleCard from "@/ui/ArticleCard";
import TopStories from "./TopStories";

export default function Home() {
  return (
    <>
      <section className="flex max-w-screen-xl mx-auto justify-between items-center px-20 mt-16">
        <div>
          <p className="font-bold text-3xl">
            Where Innovation Meets the Earth
            <br /> Unveiling the Future of Farming
          </p>
          <div className="h-1 my-4 w-56 bg-green-500 rounded"></div>
          <p className="w-80 text-lg mt-10">
            Explore agriculture's essence: tradition, innovation, and community.
            Join us for insights, tips, and trends shaping farming's future!
          </p>
        </div>
        <div className="flex items-center">
          <img
            src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA2L3Y5MjEtYXVkaS13aXQtMDQ2LXhfMS5qcGc.jpg"
            className="h-96 rounded-lg mr-4"
          />
          <div>
            <img
              src="https://media.sciencephoto.com/f0/20/07/81/f0200781-800px-wm.jpg"
              className="h-60 rounded-lg"
            />
            <img
              src="https://png.pngtree.com/png-vector/20230830/ourlarge/pngtree-farming-illustration-png-image_9200604.png"
              className="h-60 rounded-lg mt-4"
            />
          </div>
        </div>
      </section>
      <section className="px-20 mx-auto max-w-screen-xl">
        <h2 className="text-green-600 text-3xl font-semibold mt-16 mb-6 text-center">
          Latest Articles
        </h2>
        <p className="text-gray-600 text-md mx-auto max-w-xl text-center">
          Stay ahead of the curve with our latest articles, offering fresh
          perspectives and cutting-edge insights on all things agriculture!
        </p>
        <div className="flex justify-between items-top w-full mt-14">
          <ArticleCard />
          <TopStories />
        </div>
        <div className="flex justify-between items-top w-full mt-12">
          <ArticleCard isEditable={false} />
          <ArticleCard isEditable={false} />
          <ArticleCard isEditable={false} />
        </div>
      </section>
    </>
  );
}
