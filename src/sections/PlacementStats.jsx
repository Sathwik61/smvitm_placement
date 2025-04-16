import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import './PlacementStats.css';

const PlacementStats = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('stats');
      if (element) {
        const position = element.getBoundingClientRect();

        // Check if element is in viewport
        if(position.top < window.innerHeight && position.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const stats = [
    {
      id: 1,
      title: 'Highest Package',
      value: 9,
      suffix: 'LPA',
      icon: '💰',
    },
    {
      id: 2,
      title: 'Average Package',
      value: 7,
      suffix: 'LPA',
      icon: '📈',
    },
    {
      id: 3,
      title: 'Placement Rate',
      value: 80,
      suffix: '%',
      icon: '🎯',
    },
    {
      id: 4,
      title: 'Recruiting Companies',
      value: 90,
      suffix: '+',
      icon: '🏢',
    }
  ];

  return (
    <section className="stats section" id="stats">
      <div className="container">
        <h2 className="section-title">Placement Statistics</h2>
        <p className="section-description">
          Our placement records demonstrate our commitment to excellence and industry relevance.
        </p>

        <div className="stats-container">
          {stats.map(stat => (
            <div className="stat-card" key={stat.id}>
              <div className="stat-icon">{stat.icon}</div>
              <h3 className="stat-title">{stat.title}</h3>
              <div className="stat-value">
                {isVisible ? (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                    suffix={stat.suffix}
                  />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="stats-cta">
          <a href="#" className="btn btn-secondary">Download Detailed Report</a>
        </div>
      </div>
    </section>
  );
};

export default PlacementStats;
