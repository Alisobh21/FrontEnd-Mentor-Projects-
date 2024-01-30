import React from "react";

function Laptop() {
  return (
    <div className="laptop">
      <img src="illustration-laptop-desktop.svg" alt="" className="l-img" />
      <img src="illustration-laptop-mobile.svg" alt="" className="m-img" />
      <div className="lap-text">
        <div className="l-text">
          <h3>Free, open, simple</h3>
          <p>
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
        </div>
        <div className="l-text">
          <h3>Introducing an extensible editor</h3>
          <p>
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Laptop;
