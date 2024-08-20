// Icons
import { SyncRounded } from '@mui/icons-material';

const Loading = () => {
    // Or a custom loading skeleton component
    return(
      <div className="w-screen h-screen z-50" 
      >
        <SyncRounded className='animate-spin'
        />
      </div>
    );
}

export default Loading