import ArticleCard from "@/ui/ArticleCard";
import Navbar from "@/ui/Navbar";
import TopStories from "../pages/Home/TopStories";
import Footer from "@/ui/Footer";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div className="main-container">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
