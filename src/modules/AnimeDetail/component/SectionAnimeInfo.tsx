
import AnimeDetails from './AnimeDetailInfo';

import { useNavigate, useParams } from 'react-router-dom';
import { useMovieDetailSlug } from '../QueryHooks';
import { ButtonFollow, ButtonWatchNow } from '@/components/Button';



const SectionAnimeInfo: React.FC = () => {
  const { slug } = useParams();
  const { data } = useMovieDetailSlug(slug || '')
  const navigate = useNavigate();
  

  return (
    <div className="relative z-[9999]">
      <AnimeDetails animeInfo={data} />
      <div className="flex ml-[32%] gap-4 relative -top-10">
        <ButtonFollow />
        <ButtonWatchNow onClick={() => {navigate(`/movie-watching/${slug}`)}} />
      </div>
    </div>
  );
};

export default SectionAnimeInfo;
