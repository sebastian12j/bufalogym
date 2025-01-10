import React from 'react';

interface WarmUpCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const WarmUpCard: React.FC<WarmUpCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div style={styles.card}>
      <div style={styles.textContainer}>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.description}>{description}</p>
      </div>
      <img src={imageUrl} alt="Warm up" style={styles.image} />
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#283593',
    borderRadius: '10px',
    padding: '20px',
    color: '#FFFFFF',
    maxWidth: '400px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  textContainer: {
    maxWidth: '60%',
  },
  title: {
    fontSize: '1.5rem',
    margin: '0 0 10px 0',
  },
  description: {
    fontSize: '1rem',
    margin: 0,
  },
  image: {
    width: '120px',
    height: 'auto',
    borderRadius: '5px',
  },
};

export default WarmUpCard;
