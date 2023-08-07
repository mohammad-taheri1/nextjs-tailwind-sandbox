import { ImYoutube2 } from 'react-icons/im';
import { MdOutlinePlaylistPlay } from 'react-icons/md';

const HomePage = () => {
  return (
    <div className='bg-white rounded-lg mx-4 p-4'>
      <h1 className='text-2xl'>Nextjs Tailwind SandBox</h1>
      <div className='flex flex-col gap-4'>
        <a
          className='my-2 text-blue-700 flex items-center'
          href='https://www.youtube.com/@DevEmpower'
          target='_blank'
        >
          <ImYoutube2 className='text-5xl mr-2' /> (channel)
        </a>
        <a
          className='my-2 text-blue-700 flex items-center'
          href='https://www.youtube.com/playlist?list=PLUX0GmrifrwenUM6pdfQdzKk1OZnc2_GG'
          target='_blank'
        >
          <MdOutlinePlaylistPlay className='text-5xl mr-2' /> (plalist)
        </a>
      </div>
    </div>
  );
};

export default HomePage;
