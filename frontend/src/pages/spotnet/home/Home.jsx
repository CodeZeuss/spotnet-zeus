import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as SmallStar } from 'assets/particles/small_star.svg';
import StarMaker from '../../../components/StarMaker';
import { ReactComponent as Decoration } from 'assets/particles/deco.svg';
import { ReactComponent as Starknet } from 'assets/particles/starknet.svg';
import { ReactComponent as Rocket } from 'assets/icons/rocket.svg';
import { Notifier } from 'components/Notifier/Notifier';
import { notifyWarning } from 'utils/notification';
import './home.css';

function Home({ walletId }) {
  const navigate = useNavigate();

  const handleLaunchApp = async () => {
    if (walletId) {
      navigate('/form');
    } else {
      notifyWarning('Please connect to your wallet');
    }
  };

  const starsData = [
    { top: 15, left: 20 },
    { top: 20, left: 40 },
    { top: 15, left: 70 },
    { top: 15, left: 0 },
    { top: 90, left: 80 },
    { top: 60, left: 85 },
    { top: 40, left: 106 },
    { top: 85, left: 100 },
    { top: 90, left: 0 },
    { top: 75, left: 20 },
    { top: 50, left: 5 },
  ];

  const starData = [
    { top: 0, left: 5, size: 5 },
    { top: 26, left: 0, size: 7 },
    { top: 90, left: 10, size: 8 },
    { top: 0, left: 76, size: 8 },
    { top: 30, left: 88, size: 8 },
    { top: 70, left: 84, size: 10 },
  ];

  const decorationData = [
    { top: -10, left: -10, size: 50 },
    { top: -10, left: -39, size: 90 },
    { top: -35, left: 50, size: 65 },
    { top: -30, left: 45, size: 95 },
  ];

  return (
    <div className="home">
      <div>
        {decorationData.map((decoration, index) => (
          <Decoration
            key={index}
            className="decoration"
            style={{
              '--top': `${decoration.top}%`,
              '--left': `${decoration.left}%`,
              '--size': `${decoration.size}%`,
            }}
          />
        ))}
      </div>
      <div className="top-gradient"></div>
      <div>
        {starsData.map((star, index) => (
          <SmallStar
            key={index}
            className="small-star"
            style={{
              '--top': `${star.top}%`,
              '--left': `${star.left}%`,
            }}
          />
        ))}
        <StarMaker starData={starData} />

        <Starknet className="starknet" />
      </div>
      <div className="center-text-container">
        <h2 className="center-text">
          <span className="blue-color">Earn</span> by leveraging your assets
          <span className="text-gradient"> with Spotnet</span>
        </h2>
        <h5 className="maximize-potential">
          Maximize the potential of your resources and start earning today. Join Spotnet and unlock new opportunities to
          grow your wealth!
        </h5>
      </div>

      <button className="launch-button" onClick={handleLaunchApp}>
        Launch App <Rocket />
      </button>
      <Notifier />
      <div className="bottom-gradient"></div>
    </div>
  );
}

export default Home;
