import {React, useState} from 'react';
import Video from "react-youtube";
import PropTypes from 'prop-types';

const VideoPlayer = ({videoId}) => {
  const [delayIframe, setDelayIframe] = useState(false)

  const onPlayerReady = (event) => {
    const player = event.target;
    player.playVideo();
    // setTimeout(() => {
      setDelayIframe(true);
    // }, 10000);
  };

  const onPlayerStateChange = (event) => {
    const player = event.target;
    player.playVideo();
  };

  const options = {
    playerVars: {
      autoplay: 1,
      loop: 1,
      controls: 0,
      mute: 1,
      showInfo: 0,
      playlist: videoId
    },
  };

  return (
    <Video
      videoId={videoId}
      opts={options}
      onReady={onPlayerReady}
      onStateChange={onPlayerStateChange}
      style={{ pointerEvents: 'none', display: delayIframe ? 'block' : 'none'  }}
      loading='lazy'
    />
  );
}

VideoPlayer.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default VideoPlayer;