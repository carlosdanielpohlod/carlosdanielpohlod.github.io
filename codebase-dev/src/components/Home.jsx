import React from 'react';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal';

const styles = {
  nameStyle: {
    fontSize: '5em',
  },
  inlineChild: {
    display: 'inline-block',
  },
  mainContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
  },
  imageContainer: {
    width: '100%',
    maxWidth: '500px',
    marginTop: '2rem',
    marginBottom: '1rem',
    borderRadius: '1rem',
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
    borderRadius: '1rem',
  },
  banner: {
    backgroundColor: '#1e1e1e',
    border: '1px solid #333',
    borderRadius: '0.75rem',
    padding: '1rem 1.5rem',
    color: '#facc15',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    textAlign: 'center',
    marginTop: '1.5rem',
    marginBottom: '1rem',
    textDecoration: 'none',
  },
  beaconList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '100%',
    maxWidth: '500px',
  },
  beaconItem: {
    backgroundColor: '#111',
    border: '1px solid #333',
    borderRadius: '1rem',
    padding: '1rem 1.5rem',
    textDecoration: 'none',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    transition: '0.3s',
  },
  beaconIcon: {
    width: '24px',
    height: '24px',
    marginRight: '1rem',
    objectFit: 'contain',
  },
};

const beacons = [
  {
    label: 'GitHub',
    url: 'https://github.com/carlosdanielpohlod',
    imageSrc: 'images/home/github.png',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/carlos-daniel-pohlod-software-engineer/',
    imageSrc: 'images/home/linkedin.png',
  },
  {
    label: 'YouTube channel',
    url: 'https://www.youtube.com/@carlospohlod',
    imageSrc: 'images/home/youtube.png',
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/carlospohlod/',
    imageSrc: 'images/home/instagram.png',
  },
];

const handleMouseEnter = (e) => {
  e.currentTarget.style.backgroundColor = '#222';
};

const handleMouseLeave = (e) => {
  e.currentTarget.style.backgroundColor = '#111';
};

function Home() {
  const roles = [
    'Learn Ruby with me! <img src="https://i.pinimg.com/originals/3f/f8/de/3ff8de311854ae91dae1919f7806ff86.gif" width="50px" height="50px">',
    '',
  ];

  return (
    <Fade>
      <div style={styles.mainContainer}>
        <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
              strings: roles,
            }}
          />
        </div>

        <a
          style={styles.banner}
          href="https://www.youtube.com/watch?v=6VhH086qI6M&list=PLO1AsvDsQljeLC70e3dfqyVRBvbDP9XfA"
          target="_blank"
          rel="noopener noreferrer"
        >
          🇧🇷 [Pt-BR] Aprenda Ruby do zero até o backend, grátis!
        </a>

        <a
          style={styles.banner}
          href="https://www.linkedin.com/in/carlospohlod/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="images/home/linkedin.png" alt="LinkedIn logo" width={24} height={24} />
          Learn advanced Ruby with my posts on LinkedIn
        </a>

        <div style={styles.beaconList}>
          {beacons.map((item) => (
            <a
              key={item.label}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.beaconItem}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={item.imageSrc} alt={`${item.label} logo`} style={styles.beaconIcon} />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </Fade>
  );
}

export default Home;
