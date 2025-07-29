import SlideHomePage from "./component/SlideHomePage";
import SectionHeading from "@/component/Section/SectionHeading";
import { HorizonCard, VerticalCard, MiniVerticalCard } from '../../component/Card'


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
                <VerticalCard
                  link="/anime/boruto"
                  thumbnail="https://i.redd.it/w6541yr1pamb1.jpg"
                  episode="11/98"
                  comments={11}
                  views={9149}
                  title="Boruto: Naruto Next Generations"
                />
                <VerticalCard
                  link="/anime/boruto"
                  thumbnail="https://i.redd.it/w6541yr1pamb1.jpg"
                  episode="11/98"
                  comments={11}
                  views={9149}
                  title="Boruto: Naruto Next Generations"
                />
                <VerticalCard
                  link="/anime/boruto"
                  thumbnail="https://i.redd.it/w6541yr1pamb1.jpg"
                  episode="11/98"
                  comments={11}
                  views={9149}
                  title="Boruto: Naruto Next Generations"
                />
               
              </div>
            </div>

            {/* Section: Popular Show */}
            <div>
               <SectionHeading title="Popular Now" size="large"></SectionHeading>
              <div className="grid grid-cols-3 gap-10">
               <VerticalCard
                  link="/anime/boruto"
                  thumbnail="https://i.redd.it/w6541yr1pamb1.jpg"
                  episode="11/98"
                  comments={11}
                  views={9149}
                  title="Boruto: Naruto Next Generations"
                />
                <VerticalCard
                  link="/anime/boruto"
                  thumbnail="https://i.redd.it/w6541yr1pamb1.jpg"
                  episode="11/98"
                  comments={11}
                  views={9149}
                  title="Boruto: Naruto Next Generations"
                />
                <VerticalCard
                  link="/anime/boruto"
                  thumbnail="https://i.redd.it/w6541yr1pamb1.jpg"
                  episode="11/98"
                  comments={11}
                  views={9149}
                  title="Boruto: Naruto Next Generations"
                />
              </div>
            </div>

            {/* Section: Live Action */}
            <div>
              <SectionHeading title="Live Action" size="large"></SectionHeading>
              <div className="grid grid-cols-3 gap-10">
               <VerticalCard
                  link="/anime/boruto"
                  thumbnail="https://i.redd.it/w6541yr1pamb1.jpg"
                  episode="11/98"
                  comments={11}
                  views={9149}
                  title="Boruto: Naruto Next Generations"
                />
                <VerticalCard
                  link="/anime/boruto"
                  thumbnail="https://i.redd.it/w6541yr1pamb1.jpg"
                  episode="11/98"
                  comments={11}
                  views={9149}
                  title="Boruto: Naruto Next Generations"
                />
                <VerticalCard
                  link="/anime/boruto"
                  thumbnail="https://i.redd.it/w6541yr1pamb1.jpg"
                  episode="11/98"
                  comments={11}
                  views={9149}
                  title="Boruto: Naruto Next Generations"
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Top Views section (HorizonCard) */}
          <div>
            <SectionHeading title="Top View" size="medium"></SectionHeading>
            <div className="flex flex-col gap-3 mb-12">
              <HorizonCard
                link="#"
                episode="11/98"
                views={9149}
                title="Boruto: Naruto Next Generations"
                thumbnail="https://i.redd.it/w6541yr1pamb1.jpg"
              />
               <HorizonCard
                link="#"
                episode="11/98"
                views={9149}
                title="Boruto: Naruto Next Generations"
                thumbnail="https://i.redd.it/w6541yr1pamb1.jpg"
              />
               <HorizonCard
                link="#"
                episode="11/98"
                views={9149}
                title="Boruto: Naruto Next Generations"
                thumbnail="https://i.redd.it/w6541yr1pamb1.jpg"
              />
               <HorizonCard
                link="#"
                episode="11/98"
                views={9149}
                title="Boruto: Naruto Next Generations"
                thumbnail="https://i.redd.it/w6541yr1pamb1.jpg"
              />
               <HorizonCard
                link="#"
                episode="11/98"
                views={9149}
                title="Boruto: Naruto Next Generations"
                thumbnail="https://i.redd.it/w6541yr1pamb1.jpg"
              />
            </div>

            <SectionHeading title="New Comment" size="medium"></SectionHeading>
            <div className="flex flex-col gap-3">
              <MiniVerticalCard
                link="#"
                title="The Seven Deadly Sins"
                views={19141}
                thumbnail="https://i.redd.it/w6541yr1pamb1.jpg"
              />
              <MiniVerticalCard
                link="#"
                title="The Seven Deadly Sins"
                views={19141}
                thumbnail="https://i.redd.it/w6541yr1pamb1.jpg"
              />
              <MiniVerticalCard
                link="#"
                title="The Seven Deadly Sins"
                views={19141}
                thumbnail="https://i.redd.it/w6541yr1pamb1.jpg"
              />
              

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;