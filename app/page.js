import React from 'react';

const Stream = () => {
  return (
    <div style={styles.container}>
      <div style={styles.videoContainer}>
        <iframe
          src="http://192.168.36.97/stream"
          frameBorder="0"
          style={styles.iframe}
          allowFullScreen
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    margin: 0,
  },
  videoContainer: {
    width: '80%',
    maxWidth: '800px',
    height: '80%',
    backgroundColor: 'white',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none',
  },
};

export default Stream;
