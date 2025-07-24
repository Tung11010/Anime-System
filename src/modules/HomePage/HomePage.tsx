import VerticalCard from "@/component/Card/VerticalCard";
import HorizonCard from "@/component/Card/HorizonCard";
import SlideHomePage from "./component/SlideHomePage";
import SectionHeading from "@/component/SectionHeading/SectionHeading";
import CommentCard from "@/component/Card/CommentCard";

const HomePage = () => {
  return (
    <div className="w-full bg-[rgb(3,3,43)] flex justify-center flex-col items-center">
      <SlideHomePage />

      <div className="py-10 pl-8 pr-3 w-[900px]">
        <div className="grid grid-cols-[60%_auto] gap-[40px]">
          {/* LEFT COLUMN: VerticalCard sections */}
          <div className="space-y-10">
            {/* Section: Trending Now */}
            <div>
              <SectionHeading title="Trending Now" size="large"></SectionHeading>
              <div className="grid grid-cols-3 gap-10">
                <VerticalCard />
                <VerticalCard />
                <VerticalCard />
              </div>
            </div>

            {/* Section: Popular Show */}
            <div>
               <SectionHeading title="Popular Now" size="large"></SectionHeading>
              <div className="grid grid-cols-3 gap-10">
                <VerticalCard />
                <VerticalCard />
                <VerticalCard />
              </div>
            </div>

            {/* Section: Live Action */}
            <div>
              <SectionHeading title="Live Action" size="large"></SectionHeading>
              <div className="grid grid-cols-3 gap-10">
                <VerticalCard />
                <VerticalCard />
                <VerticalCard />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Top Views section (HorizonCard) */}
          <div>
            <SectionHeading title="Top View" size="small"></SectionHeading>
            <div className="flex flex-col gap-3 mb-12">
              <HorizonCard />
              <HorizonCard />
              <HorizonCard />
              <HorizonCard />
              <HorizonCard />
            </div>

            <SectionHeading title="New Comment" size="small"></SectionHeading>
            <div className="flex flex-col gap-3">
              <CommentCard></CommentCard>
              <CommentCard></CommentCard>
              

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;