import SlideHomePage from "../component/SlideHomePage";
import TrendingSection from "../component/TrendingSection";
import PopularSection from "../component/PopularSection";
import LiveActionSection from "../component/LiveActionSection";
import TopViewSection from "../component/TopViewSection";
import NewCommentSection from "../component/NewCommentSection";

const HomePage = () => {
  return (
    <div className="w-full bg-[rgb(3,3,43)] flex flex-col items-center">
      {/* Slide chiếm toàn màn hình */}
      <div className="w-full">
        <SlideHomePage />
      </div>

      {/* Nội dung body responsive */}
      <div className="w-full max-w-3xl lg:max-w-[56.3rem] px-4 md:px-8 lg:px-0 py-6 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_auto] gap-8 md:gap-10">
          {/* LEFT COLUMN */}
          <div className="space-y-8 md:space-y-10">
            <section>
              <TrendingSection />
            </section>
            <section>
              <PopularSection />
            </section>
            <section>
              <LiveActionSection />
            </section>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8 md:space-y-10">
            <TopViewSection />
            <NewCommentSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
