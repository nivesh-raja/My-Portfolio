import { useState, useRef, MouseEvent } from "react";
import { config } from "../config";
import "./styles/DeveloperIDCard.css";
import { FaShieldHalved, FaQrcode, FaBarcode, FaRotate, FaCertificate, FaTrophy, FaLocationDot, FaEnvelope } from "react-icons/fa6";

const DeveloperIDCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isFlipped) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -12;
    const rY = ((x - centerX) / centerX) * 12;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const handleCopyId = () => {
    navigator.clipboard.writeText(`NIVESH RAJA R | ID: NR-AIML-2025 | ${config.contact.email}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="id-card-wrapper">
      <div 
        className={`id-card-container ${isFlipped ? "flipped" : ""}`}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isFlipped 
            ? "rotateY(180deg)" 
            : `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
        }}
      >
        {/* FRONT OF ID CARD */}
        <div className="id-card-face id-card-front">
          <div className="id-card-glass-shine"></div>
          <div className="id-card-hologram"></div>
          
          {/* Header */}
          <div className="id-card-header">
            <div className="id-card-org">
              <span className="org-college">V.S.B. ENGINEERING COLLEGE</span>
              <span className="org-dept">DEPARTMENT OF AI & MACHINE LEARNING</span>
            </div>
            <div className="id-card-badge-tag">
              <FaShieldHalved className="shield-icon" />
              <span>VERIFIED</span>
            </div>
          </div>

          {/* Body Section */}
          <div className="id-card-body">
            {/* Photo & Scanner */}
            <div className="id-card-photo-container">
              <div className="id-card-photo-frame">
                <img 
                  src="/images/mypic.jpeg" 
                  alt={config.developer.fullName} 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/mypicnbg.png";
                  }}
                />
                <div className="laser-scanner"></div>
              </div>
              <div className="id-chip-icon">
                <div className="chip-line"></div>
                <div className="chip-line"></div>
              </div>
            </div>

            {/* Main Info */}
            <div className="id-card-info">
              <div className="id-role-tag">STUDENT & AI DEVELOPER</div>
              <h2 className="id-name">{config.developer.fullName}</h2>
              <p className="id-title">{config.developer.title}</p>

              <div className="id-grid-details">
                <div className="id-detail-item">
                  <span className="detail-label">ID NO.</span>
                  <span className="detail-val highlight">NR-AIML-2025</span>
                </div>
                <div className="id-detail-item">
                  <span className="detail-label">CGPA</span>
                  <span className="detail-val">8.00 / 10.0</span>
                </div>
                <div className="id-detail-item">
                  <span className="detail-label">BATCH</span>
                  <span className="detail-val">2023 - 2027</span>
                </div>
                <div className="id-detail-item">
                  <span className="detail-label">STATUS</span>
                  <span className="detail-val status-online">● ACTIVE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer & Barcode */}
          <div className="id-card-footer">
            <div className="barcode-box">
              <FaBarcode className="barcode-img" />
              <span>NR-800-AIML-VSBEC</span>
            </div>
            <div className="qr-box">
              <FaQrcode className="qr-icon" />
            </div>
          </div>
        </div>

        {/* BACK OF ID CARD */}
        <div className="id-card-face id-card-back">
          <div className="id-card-glass-shine"></div>
          
          <div className="id-back-header">
            <h3>DEVELOPER CREDENTIALS</h3>
            <span className="back-subtitle">ACADEMIC & PROFESSIONAL HIGHLIGHTS</span>
          </div>

          <div className="id-back-content">
            {/* Achievements */}
            <div className="id-back-section">
              <h4><FaTrophy className="section-ic" /> Key Achievements</h4>
              <ul>
                {config.achievements.map((ach, idx) => (
                  <li key={idx}>{ach}</li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <div className="id-back-section">
              <h4><FaCertificate className="section-ic" /> Certifications</h4>
              <ul>
                {config.certifications.map((cert, idx) => (
                  <li key={idx}>{cert}</li>
                ))}
              </ul>
            </div>

            {/* Contact Quick Info */}
            <div className="id-back-section contact-mini">
              <h4><FaLocationDot className="section-ic" /> Location & Contact</h4>
              <p><FaEnvelope /> {config.contact.email}</p>
              <p>📍 Kanyakumari, Tamil Nadu, India</p>
            </div>
          </div>

          <div className="id-back-footer">
            <span className="security-text">SECURE DIGITAL IDENTITY // AUTHORIZED PORTFOLIO</span>
          </div>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="id-card-controls">
        <button 
          className="id-ctrl-btn flip-btn"
          onClick={() => setIsFlipped(!isFlipped)}
          data-cursor="disable"
        >
          <FaRotate /> {isFlipped ? "Show Front" : "Flip ID Card"}
        </button>
        <button 
          className="id-ctrl-btn copy-btn"
          onClick={handleCopyId}
          data-cursor="disable"
        >
          {copied ? "✓ Credentials Copied!" : "📋 Copy ID Info"}
        </button>
      </div>
    </div>
  );
};

export default DeveloperIDCard;
