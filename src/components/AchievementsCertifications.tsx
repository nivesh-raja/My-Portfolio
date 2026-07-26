import { config } from "../config";
import "./styles/AchievementsCertifications.css";
import { FaTrophy, FaCertificate, FaMedal, FaAward, FaCheckDouble } from "react-icons/fa6";

const AchievementsCertifications = () => {
  return (
    <div className="achievements-section section-container" id="achievements">
      <div className="achievements-container">
        <h2>
          Achievements <span>&</span> Certifications
        </h2>
        <p className="achievements-subtitle">
          Recognitions, hackathon awards, and professional certifications
        </p>

        <div className="achievements-grid-wrapper">
          {/* ACHIEVEMENTS COLUMN */}
          <div className="achievements-col">
            <div className="col-header">
              <FaTrophy className="col-icon trophy" />
              <h3>Key Achievements</h3>
            </div>
            <div className="cards-list">
              {config.achievements.map((item, index) => {
                const parts = item.split(" – ");
                const title = parts[0] || item;
                const location = parts[1] || "";

                return (
                  <div key={index} className="achievement-card" data-cursor="disable">
                    <div className="card-badge">
                      <FaMedal />
                    </div>
                    <div className="card-info">
                      <h4>{title}</h4>
                      {location && <p className="card-sub">{location}</p>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CERTIFICATIONS COLUMN */}
          <div className="achievements-col">
            <div className="col-header">
              <FaCertificate className="col-icon cert" />
              <h3>Certifications</h3>
            </div>
            <div className="cards-list">
              {config.certifications.map((item, index) => {
                const parts = item.split(" – ");
                const title = parts[0] || item;
                const issuer = parts[1] || "";

                return (
                  <div key={index} className="achievement-card cert-card" data-cursor="disable">
                    <div className="card-badge cert-badge">
                      <FaAward />
                    </div>
                    <div className="card-info">
                      <h4>{title}</h4>
                      {issuer && <p className="card-sub">{issuer}</p>}
                    </div>
                    <div className="verified-chip">
                      <FaCheckDouble /> Verified
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsCertifications;
