import ArticleCard from "@/ui/ArticleCard";
import TopStories from "./TopStories";
import { getBlogLimit } from "@/services/firebase/firebase";
import { useLoaderData } from "react-router-dom";

export default function Home() {
  const data = useLoaderData();
  console.log(data);

  return (
    <>
      <section className="flex md:flex-row flex-col-reverse max-w-screen-xl mx-auto justify-between items-center lg:px-20 px-8 mt-16">
        <div>
          <p className="font-bold lg:text-3xl text-2xl">
            Where Innovation Meets the Earth
            <br /> Unveiling the Future of Farming
          </p>
          <div className="h-1 my-4 w-56 bg-green-500 rounded"></div>
          <p className="md:w-80 md:text-lg text-md mt-10">
            Explore agriculture's essence: tradition, innovation, and community.
            Join us for insights, tips, and trends shaping farming's future!
          </p>
        </div>
        <div className="flex items-center mb-10 md:mb-0">
          <img
            src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA2L3Y5MjEtYXVkaS13aXQtMDQ2LXhfMS5qcGc.jpg"
            className="lg:h-96 md:h-72 h-72  rounded-lg mr-4"
          />
          <div>
            <img
              src="https://media.sciencephoto.com/f0/20/07/81/f0200781-800px-wm.jpg"
              className="lg:h-60 md:h-52 h-52 rounded-lg"
            />
            <img
              src="https://png.pngtree.com/png-vector/20230830/ourlarge/pngtree-farming-illustration-png-image_9200604.png"
              className="lg:h-60 md:h-52 h-52 rounded-lg mt-4"
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
        {/* <div className="flex justify-between items-top w-full mt-14"> */}
        <div className="md:grid grid-cols-3 gap-x-6 gap-y-16 mt-16">
          <ArticleCard
            articleId={data[0].id}
            imgUrl={data[0].imgUrl}
            heading={data[0].heading}
            discription={data[0].discription}
            isEditable={false}
          />
          <div className="col-span-2">
            <TopStories />
          </div>
          {/* </div>
        <div className="flex justify-between items-top w-full mt-12"> */}
          {data.map((article, index) => {
            if (index !== 0) {
              console.log(index);
              return (
                <ArticleCard
                  key={data[index].id}
                  articleId={data[index].id}
                  imgUrl={data[index].imgUrl}
                  heading={data[index].heading}
                  discription={data[index].discription}
                  isEditable={false}
                  className="m-4"
                />
              );
            }
          })}
        </div>
      </section>
    </>
  );
}

export async function getArticles() {
  const data = await getBlogLimit(4);
  return data;
}
