import React, { useContext } from "react";
import "./Blog.css";
import BlogCard from "../../components/blogCard/BlogCard";
import { blogSection } from "../../portfolio";
import { Fade } from "react-awesome-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Blogs() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade direction="up" duration={1000} triggerOnce>
      <div className="main" id="blogs">
        <div className="blog-header">
          <h1 className="blog-header-text">{blogSection.title}</h1>
          <p
            className={
              isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"
            }
          >
            {blogSection.subtitle}
          </p>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div">
            {blogSection.blogs.map((blog, index) => {
              return (
                <BlogCard
                  key={index}
                  isDark={isDark}
                  blog={{
                    url: blog.url,
                    image: blog.image,
                    title: blog.title,
                    description: blog.description,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
