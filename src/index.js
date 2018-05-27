import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import Videolist from './components/video_item_list';
import VideoDetail from './components/video_details';
import _ from 'lodash';

var API_KEY='AIzaSyBLFnVxgguUE0jlzG9wBnO-Qyz6W3cxepQ';


class App extends Component{

constructor(props){
    super(props);

    this.state={
        videos:[],
        selectedVideo:null
    };
    this.videoSearch('shakira');
}

videoSearch(term){
    YTSearch({key:API_KEY,term:term},(videos)=>{
        this.setState({
            videos:videos,
            selectedVideo:videos[0]
        });
    });
}

render(){

    const videoSearch=_.debounce(
        (term)=>{this.videoSearch(term)},300
        );
    return (
        <div>
            <SearchBar onSearchTermChange={
                videoSearch
            }   
            />
            <VideoDetail video={this.state.selectedVideo} />
            <Videolist
            onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
            videos={this.state.videos} />
        </div>
    );
}

}

ReactDOM.render(<App />,document.querySelector('.container-fluid'));