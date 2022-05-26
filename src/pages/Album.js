import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';

class Album extends React.Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    const { id } = match.params;
    this.state = {
      id,
      musics: [],
      artistFound: '',
      album: '',
    };
  }

  async componentDidMount() {
    const { id } = this.state;
    const musicsFound = await getMusics(id);
    this.setState({
      musics: musicsFound,
      artistFound: musicsFound[0].artistName,
      album: musicsFound[0].collectionName,
    });
  }

  render() {
    const { artistFound, album, musics } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <h3 data-testid="artist-name">{artistFound}</h3>
        <span data-testid="album-name">{album}</span>
        {musics.map((music, index) => {
          let result;
          if (index !== 0) {
            result = <MusicCard music={ music } />;
          }
          return result;
        })}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.objectOf.isRequired,
};

export default Album;
