import React from 'react';
import FantsTop from './fans/FantsTop';
import FansSecond from './fans/FansSecond';
import FansThird from './fans/FansThird';
import FansFour from './fans/FansFour';
import FansFive from './fans/FansFive';
import HomeFolder from './home/HomeFolder';

const Fans = () => {
  return (
    <div>
      <FantsTop/>
      <FansSecond/>
      <FansThird/>
      <FansFour/>
      <FansFive/>
      <HomeFolder/>
    </div>
  );
}

export default Fans;
