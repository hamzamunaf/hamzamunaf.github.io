import React from "react";
import "./AchievementCard.css";

export default function AchievementCard({ cardInfo, isDark }) {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="certificate-image-div">
        <img 
          src={cardInfo.image} 
          alt={cardInfo.title} 
          className="card-image"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            // Create a fallback SVG icon
            const emoji = cardInfo.title.includes("Integration") ? "🔗" : 
                         cardInfo.title.includes("IAM") ? "🔐" :
                         cardInfo.title.includes("System") ? "🏗️" :
                         cardInfo.title.includes("Deployment") ? "⚙️" :
                         cardInfo.title.includes("Certifications") ? "⭐" :
                         cardInfo.title.includes("Scholarship") ? "🏆" : "🎖️";
            e.target.src = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#667eea" rx="20"/><text x="50%" y="50%" font-family="Arial" font-size="60" fill="white" text-anchor="middle" dominant-baseline="middle">${emoji}</text></svg>`)}`;
          }}
        ></img>
      </div>
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => {
          return (
            <span
              class={isDark ? "dark-mode certificate-tag" : "certificate-tag"}
              onClick={() => openUrlInNewTab(v.url)}
            >
              {v.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
