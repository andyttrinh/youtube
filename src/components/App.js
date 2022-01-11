import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = {videos: ''};

    onSubmit = (term) => {
        
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