import Search from './Search.js'
import VideoList from './VideoList.js'
import VideoPlayer from './VideoPlayer.js'
import Head from 'next/head';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      currentVideo: null
    };
  }

  componentDidMount() {
    this.getYouTubeVideos();
  }

  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (videos) =>
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      })
    );
  }

  handleVideoListEntryTitleClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <Head>
          <title>React Example</title>
        </Head>
        <nav className="navbar">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Search
              handleSearchInputChange={this.getYouTubeVideos.bind(this)}
            />
          </div>
        </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList
              handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(this)}
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    );
  }

  // render() {
  //   return (
  //     <div>
  //       Hello Werld
  //     </div>
  //   )
  // }
}

export default App