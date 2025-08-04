import SlideHomePage from "../component/SlideHomePage";
// import TrendingSection from "../component/AnimeSection";
// import PopularSection from "../component/China3dSection";
import LiveActionSection from "../component/LiveActionSection";
import TopViewSection from "../component/TopViewSection";
import NewCommentSection from "../component/NewCommentSection";
import AnimeSection from "../component/AnimeSection";
import China3dSection from "../component/China3dSection";

const HomePage = () => {
  return (
    <div className="w-full bg-[rgb(3,3,43)] flex flex-col items-center">
      <div className="w-full">
        <SlideHomePage />
      </div>

      <div className="w-full max-w-3xl lg:max-w-[56.3rem] px-14 md:px-8 lg:px-4 py-6 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_auto] gap-8 md:gap-10">
          {/* LEFT COLUMN */}
          <div className="space-y-12 md:space-y-15">
            <section>
              <AnimeSection />
            </section>
            <section>
              <China3dSection />
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
