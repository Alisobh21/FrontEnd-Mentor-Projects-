import React from "react";

function Future() {
  return (
    <div className="future content">
      <h2>Designed for the future</h2>
      <div className="f-box">
        <div className="f-left">
          <div className="f-text">
            <h4>Introducing an extensible editor</h4>
            <p>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>

          <div className="f-text">
            <h4>Robust content management</h4>
            <p>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </div>
        <div className="f-right">
          <img
            src="illustration-editor-desktop.svg"
            alt=""
            className="img-desktop"
          />
          <img
            src="illustration-editor-mobile.svg"
            alt=""
            className="img-mobile"
          />
        </div>
      </div>
    </div>
  );
}

export default Future;
