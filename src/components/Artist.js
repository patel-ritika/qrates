import React from 'react';
import ArtistTop from './artist/ArtistTop';
import ArtistSecond from './artist/ArtistSecond';
import ArtistThird from './artist/ArtistThird';
import ArtistFour from './artist/ArtistFour';
import ArtistFive from './artist/ArtistFive';
import FansFive from './fans/FansFive';
import HomeChange from './home/HomeChange';

const Artist = () => {
  return (
    <div>
      <ArtistTop/>
      <ArtistSecond/>
      <ArtistThird/>
      <ArtistFour/>
      <ArtistFive/>
      <FansFive/>
      <HomeChange/>
    </div>
  );
}

export default Artist;
