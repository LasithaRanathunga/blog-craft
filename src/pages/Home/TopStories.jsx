import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function TopStories() {
  return (
    <div className="min-w-[60%]">
      <h3 className="text-semibold text-3xl text-gray-500  mb-6">
        Top Stories
      </h3>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="w-full">
            <span className="-mr-12 ml-2 bg-gray-200 rounded-full h-6 w-6 text-xs lg:flex hidden items-center justify-center">
              1
            </span>
            <img
              src="https://t4.ftcdn.net/jpg/05/85/03/65/360_F_585036500_u2PzD55XLfS4OY5IbyZNOwCw8mnCmkDP.jpg"
              className="w-24 rounded-md -mr-14 sm:block hidden"
            />
            <p
              className="
              sm:max-w-[60%] text-left lg:text-2xl text-lg lg:pl-0 pl-4"
            >
              How Vertical Farming is Revolutionizing Urban Agriculture
            </p>
          </AccordionTrigger>
          <AccordionContent>
            <p className="max-w-2xl text-base">
              Discover how vertical farming is reshaping urban landscapes,
              maximizing space, and revolutionizing access to fresh produce in
              densely populated areas{" "}
              <Button variant="link" className="font-normal -ml-2">
                Read More...
              </Button>
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="w-full">
            <span className="-mr-12 ml-2 bg-gray-200 rounded-full h-6 w-6 text-xs lg:flex hidden items-center justify-center">
              2
            </span>
            <img
              src="https://t4.ftcdn.net/jpg/05/85/03/65/360_F_585036500_u2PzD55XLfS4OY5IbyZNOwCw8mnCmkDP.jpg"
              className="w-24 rounded-md -mr-14 sm:block hidden"
            />{" "}
            <p className="sm:max-w-[60%] text-left lg:text-2xl text-lg lg:pl-0 pl-4">
              How Vertical Farming is Revolutionizing Urban Agriculture
            </p>
          </AccordionTrigger>
          <AccordionContent>
            <p className="max-w-2xl">
              Discover how vertical farming is reshaping urban landscapes,
              maximizing space, and revolutionizing access to fresh produce in
              densely populated areas
              <Button variant="link" className="font-normal -ml-2">
                Read More...
              </Button>
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="w-full">
            <span className="-mr-12 ml-2 bg-gray-200 rounded-full h-6 w-6 text-xs lg:flex hidden items-center justify-center">
              3
            </span>
            <img
              src="https://t4.ftcdn.net/jpg/05/85/03/65/360_F_585036500_u2PzD55XLfS4OY5IbyZNOwCw8mnCmkDP.jpg"
              className="w-24 rounded-md -mr-14 sm:block hidden"
            />{" "}
            <p className="sm:max-w-[60%] text-left lg:text-2xl text-lg lg:pl-0 pl-4">
              How Vertical Farming is Revolutionizing Urban Agriculture
            </p>
          </AccordionTrigger>
          <AccordionContent>
            <p className="max-w-2xl">
              Discover how vertical farming is reshaping urban landscapes,
              maximizing space, and revolutionizing access to fresh produce in
              densely populated areas
              <Button variant="link" className="font-normal -ml-2">
                Read More...
              </Button>
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
