import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = {videos: ''};

    onSubmit = (term) => {
        this.setState({videos: term});
    }

    render() {
        return (
            <div>
                <SearchBar onSubmit={this.onSubmit} />
                <div>{this.state.videos}</div>
            </div>
        );
    }
    
}

export default App;