import SlideHomePage from "../component/SlideHomePage";
import TrendingSection from "../component/TrendingSection";
import PopularSection from "../component/PopularSection";
import LiveActionSection from "../component/LiveActionSection";
import TopViewSection from "../component/TopViewSection";
import NewCommentSection from "../component/NewCommentSection";



const HomePage = () => {
  return (
    <div className="w-full bg-[rgb(3,3,43)] flex justify-center flex-col items-center">
      <SlideHomePage />
      <div className="py-10 pl-8 pr-3 w-[900px]">
        <div className="grid grid-cols-[60%_auto] gap-[40px]">
          {/* LEFT COLUMN */}
          <div className="space-y-10">
            <section>
             <TrendingSection/>
            </section>
          
            <section>
              <PopularSection/>
            </section>
        
            <section>
              <LiveActionSection/>
            </section>
          </div>

          {/* RIGHT COLUMN */}
          <div>
           <TopViewSection/>
           <NewCommentSection/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;