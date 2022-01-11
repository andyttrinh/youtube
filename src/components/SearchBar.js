import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''};

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }



    render() {
        return (
            <div>
                <form onSubmit={(this.handleSubmit)}>
                    <input
                        type="text"
                        placeholder='Search for video'
                        value={this.state.term}
                        onChange={e => this.setState({term: e.target.value})}>

                    </input>
                </form>
            </div>
        );
    }
}

export default SearchBar;