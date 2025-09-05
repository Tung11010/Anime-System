import AnimeDetails from './AnimeDetailInfo';
import { useNavigate, useParams } from 'react-router-dom';
import { useMovieDetailSlug } from '../QueryHooks';
import { ButtonFollow, ButtonWatchNow } from '@/components/Button';
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { RootState } from '@/modules/Auth/store/store';
import { toast } from 'react-toastify';
import { handleFollowApi } from '../services/AnimeDetaild.services';

const SectionAnimeInfo: React.FC = () => {
  const { slug } = useParams();
  const { data } = useMovieDetailSlug(slug || '');
  const movieId = data?.id;
  
  

  const tokenRaw = useSelector((state: RootState) => state.auth.accessToken);
  const token = tokenRaw ? tokenRaw.replace(/^"|"$/g, '') : null;
  const userId = Number(useSelector((state: RootState) => state.auth.currentUser?.id))

  console.log(movieId, userId);
  
  const navigate = useNavigate();
  const [isFollowed, setIsFollowed] = useState(false);

  // khi data load xong thì cập nhật state
  useEffect(() => {
    if (data?.isFollowed !== undefined) {
      setIsFollowed(data.isFollowed);
    }
  }, [data]);

  const handleFollow = async () => {
    if (!token) {
      navigate('/login')
      return toast.error('Please log in to follow.');
    }
    setIsFollowed(!isFollowed)
    const res = await handleFollowApi(movieId, userId)
    return res
  }

  return (
    <div className="relative">
      <AnimeDetails animeInfo={data} />
      <div className="flex ml-[32%] gap-4 relative -top-10">
        <ButtonFollow 
          isFollowed={isFollowed} 
          onClick={() => handleFollow()} 
        />
        <ButtonWatchNow onClick={() => navigate(`/movie-watching/${slug}`)} />
      </div>
    </div>
  );
};

export default SectionAnimeInfo;
