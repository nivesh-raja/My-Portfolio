import DeveloperIDCard from "./DeveloperIDCard";
import "./styles/IDCardSection.css";

const IDCardSection = () => {
  return (
    <div className="idcard-section section-container" id="idcard">
      <div className="idcard-container">
        <h2>
          Developer <span>ID</span> Badge
        </h2>
        <p className="idcard-subtitle">
          Interactive verified credentials & student identity
        </p>
        <div className="idcard-card-holder">
          <DeveloperIDCard />
        </div>
      </div>
    </div>
  );
};

export default IDCardSection;
