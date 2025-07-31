
import TopViewSection from "../component/TopViewSection"
import NewCommentSection from "../component/NewCommentSection"
import CategorySection from "../component/CategorySection"
import CategoryBreadcrum from "../component/CategoryBreadcrumb"

const Category = () => {
    return (
        <div className="w-full bg-[rgb(3,3,43)] flex flex-col items-center">
          <div className="w-full max-w-3xl lg:max-w-[56.3rem] px-4 md:px-8 lg:px-0 pt-6 md:pt-10">
            <CategoryBreadcrum />
          </div>
          <div className="w-full max-w-3xl lg:max-w-[56.3rem] px-4 md:px-8 lg:px-0 py-6 md:py-10">
            <div className="grid grid-cols-1 lg:grid-cols-[60%_auto] gap-8 md:gap-10">
              {/* LEFT COLUMN */}
              <div className="space-y-8 md:space-y-10">
                <section>
                  <CategorySection />
                </section>
              </div>
    
              {/* RIGHT COLUMN */}
              <div className="space-y-8 md:space-y-10">
                <TopViewSection/>
                <NewCommentSection />
              </div>
            </div>
          </div>
        </div>
    )
}

export default Category