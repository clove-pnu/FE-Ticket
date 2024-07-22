import { reissue } from '../../apis/auth';
import PlayList from '../../components/common/PlayList';
import {
  getExistRefreshToken, getExistToken, setRefreshToken, setToken,
} from '../../utils/auth';
import { fetchWithHandler } from '../../utils/fetchWithHandler';
import { PlayCardInfo } from '../../utils/type';

const PlayListMockData: PlayCardInfo[] = [
  {
    pid: 0,
    thumbnailUrl: '',
    title: '테스트 공연 0',
    location: '테스트 장소',
    startDate: new Date(2024, 6, 15),
    endDate: new Date(2024, 6, 17),
  },
  {
    pid: 1,
    thumbnailUrl: '',
    title: '테스트 공연 1',
    location: '테스트 장소',
    startDate: new Date(2024, 6, 22),
    endDate: new Date(2024, 6, 23),
  },
  {
    pid: 2,
    thumbnailUrl: '',
    title: '테스트 공연 2',
    location: '테스트 장소',
    startDate: new Date(2024, 7, 1),
    endDate: new Date(2024, 7, 3),
  },
];

const handleTest = async () => {
  const accessToken = getExistToken();
  const refreshToken = getExistRefreshToken();
  fetchWithHandler(() => reissue({ accessToken, refreshToken }), {
    onSuccess: (response) => {
      setToken({
        accessToken: `${response.data.grantType} ${response.data.accessToken}`,
        accessTokenExpiresIn: response.data.accessTokenExpiresIn,
      });
      setRefreshToken({ refreshToken: `${response.data.grantType} ${response.data.refreshToken}` });
    },
    onError: (error) => {
      throw error;
    },
  });
};

export default function MainPage() {
  return (
    <main>
      <div>
        <PlayList PlayCards={PlayListMockData} />
      </div>
      <button
        type="button"
        onClick={handleTest}
      >
        test
      </button>
    </main>
  );
}
