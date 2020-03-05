import React from 'react';
import Particles from 'react-particles-js';
import config from './particlesjs-config.json';

const styles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: -4,
    backgroundRepeat: 'repeat'
};

const P = () => {
    return <Particles style={styles} params={config} />
};

export default P;