import { MiniVerticalCard } from "@/component/Card";
import { SectionHeading } from "@/component/Section";

const mockNewCommentData = [
  {
    id: 1,
    link: "#",
    title: "The Seven Deadly Sins",
    views: 19141,
    thumbnail: "https://preview.colorlib.com/theme/anime/img/trending/trend-1.jpg",
  },
  {
    id: 2,
    link: "#",
    title: "The Seven Deadly Sins",
    views: 19141,
    thumbnail: "https://preview.colorlib.com/theme/anime/img/sidebar/comment-1.jpg.webp",
  },
  {
    id: 3,
    link: "#",
    title: "The Seven Deadly Sins",
    views: 19141,
    thumbnail: "https://preview.colorlib.com/theme/anime/img/sidebar/comment-2.jpg.webp",
  },
  {
    id: 3,
    link: "#",
    title: "The Seven Deadly Sins",
    views: 19141,
    thumbnail: "https://preview.colorlib.com/theme/anime/img/sidebar/comment-3.jpg.webp",
  },

];

const NewCommentSection = () => {
  return (
    <section className="mb-6">
      <SectionHeading title="New Comment" size="medium" />
      <div className="flex flex-col gap-3">
        {mockNewCommentData.map((movie) => (
          <MiniVerticalCard
            key={movie.id}
            link={movie.link}
            title={movie.title}
            views={movie.views}
            thumbnail={movie.thumbnail}
          />
        ))}
      </div>
    </section>
  );
};

export default NewCommentSection;
