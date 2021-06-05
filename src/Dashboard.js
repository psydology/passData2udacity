import React , {Component} from 'react';
import MovieCard from './Moviecard'

class Dashboard extends Component {

    render() {
        const { usersByMovie, users, movies } = this.props;

    const movieCards = Object.keys(movies).map(id => (
      <MovieCard
        key={id}
        users={users}
        usersWhoLikedMovie={usersByMovie[id]}
        movieInfo={movies[id]}
      />
      
    ));
    console.log ('moviecards' ,movieCards); 
    /*
    Return JSX
    */
    return <ul>{movieCards}</ul>;
        
    }
}

export default Dashboard;