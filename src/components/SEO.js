import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SEO({ title, description, keywords }) {
  const location = useLocation();

  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute("content", description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && keywords) {
      metaKeywords.setAttribute("content", keywords);
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      const baseUrl = "https://hamzamunaf.github.io";
      canonical.setAttribute("href", baseUrl + location.pathname);
    }

    // Update Open Graph URL
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      const baseUrl = "https://hamzamunaf.github.io";
      ogUrl.setAttribute("content", baseUrl + location.pathname);
    }
  }, [location, title, description, keywords]);

  return null;
}

