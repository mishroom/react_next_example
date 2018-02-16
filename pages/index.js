
import App from '../components/App.js';
import Head from 'next/head';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

export default () => ( 
  <div className="container">
    <Head>

      <link rel="stylesheet" href="/static/style.css" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
    </Head>
    <App searchYouTube={searchYouTube} API_KEY={YOUTUBE_API_KEY}/>
  </div> 
);