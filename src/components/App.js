import React from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';


class App extends React.Component {
    state = {videos: ''};

    onSubmit = async (term) => {
        const res = await youtube.get('/search', {
            params: {
                q: term
            }
        })

        console.log(res);
        
    }

    render() {
        return (
            <div>
                <SearchBar onSubmit={this.onSubmit} />
            </div>
        );
    }
    
}

export default App;