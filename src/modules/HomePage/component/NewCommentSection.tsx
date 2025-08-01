import { MiniVerticalCard } from "@/component/Card";
import { SectionHeading } from "@/component/Section";
import { useNewCommentMovies } from "../QueryHooks";
import { MoviePreview } from "../types";


// const mockNewCommentData = [
//   {
//     id: 1,
//     link: "#",
//     title: "The Seven Deadly Sins",
//     views: 19141,
//     thumbnail: "https://preview.colorlib.com/theme/anime/img/trending/trend-1.jpg",
//   },
//   {
//     id: 2,
//     link: "#",
//     title: "The Seven Deadly Sins",
//     views: 19141,
//     thumbnail: "https://preview.colorlib.com/theme/anime/img/sidebar/comment-1.jpg.webp",
//   },
//   {
//     id: 3,
//     link: "#",
//     title: "The Seven Deadly Sins",
//     views: 19141,
//     thumbnail: "https://preview.colorlib.com/theme/anime/img/sidebar/comment-2.jpg.webp",
//   },
//   {
//     id: 4,
//     link: "#",
//     title: "The Seven Deadly Sins",
//     views: 19141,
//     thumbnail: "https://preview.colorlib.com/theme/anime/img/sidebar/comment-3.jpg.webp",
//   },

// ];

const NewCommentSection = () => {
  const { data: movies } = useNewCommentMovies()
  console.log(movies);
  
  
  return (
    <section className="mb-6">
      <SectionHeading title="New Comment" size="medium" />
      <div className="flex flex-col gap-3">
        {movies?.map((movie: MoviePreview) => (
          <MiniVerticalCard
            key={movie.id}
            link={movie.link}
            title={movie.title}
            views={movie.viewsCount}
            thumbnail={movie.img_url}
          />
        ))}
      </div>
    </section>
  );
};

export default NewCommentSection;
