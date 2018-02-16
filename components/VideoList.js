import VideoListEntry from './VideoListEntry.js';
import Head from 'next/head';

var VideoList = ({videos, handleVideoListEntryTitleClick}) => (
  <div className="video-list">
   
    {videos.map((video) =>
      <VideoListEntry
        key={video.etag}
        video={video}
        handleVideoListEntryTitleClick={handleVideoListEntryTitleClick}
      />
    )}
  </div>
);

export default VideoList   