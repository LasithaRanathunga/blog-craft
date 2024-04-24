import { Button } from "@/components/ui/button";

export default function ArticleCard() {
  return (
    <div className="max-w-[30%]">
      <img
        src="https://t4.ftcdn.net/jpg/05/85/03/65/360_F_585036500_u2PzD55XLfS4OY5IbyZNOwCw8mnCmkDP.jpg"
        className="rounded-lg"
      />
      <h3 className="font-semibold mt-6 mb-2 text-lg">
        How Vertical Farming is Revolutionizing Urban Agriculture
      </h3>
      <p className="text-xs text-gray-500 font-medium">
        Discover how vertical farming is reshaping urban landscapes, maximizing
        space, and revolutionizing access to fresh produce in densely populated
        areas
      </p>
      <Button className="mt-4 p-3">Read More...</Button>
    </div>
  );
}
