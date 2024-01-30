import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement } from "./store/CounterSlicer";

function Box({ img, name, interacte, post, time, message, pic, i }) {
  const [active, SetActive] = useState(true);
  const mark = useSelector((state) => state.counter.mark);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(decrement());
    SetActive(false);
  };

  return (
    <>
      {pic ? (
        <>
          <div className="single-box comment">
            <div className="left">
              <div className="avatar">
                <img src={img} alt="" />
              </div>
              <div className="box-text">
                <p className="notifi">
                  <a href="##" className="name">
                    {name}{" "}
                  </a>
                  {interacte}
                </p>
                <p className="time">{time}</p>
              </div>
            </div>
            <div className="img-box">
              <img src={pic} alt="" />
            </div>
          </div>
        </>
      ) : (
        <div
          onClick={() => handleClick()}
          className={`single-box  ${message ? "with-mssg" : ""} ${
            i <= 2 ? `${active ? `${mark ? "" : "unseen"}` : ""}` : ""
          }`}
        >
          <div className="avatar">
            <img src={img} alt="Imagee" />
          </div>
          <div className="box-text">
            <p className="notifi">
              <a href="##" className="name">
                {name}{" "}
              </a>
              {interacte}{" "}
              {post && (
                <a href="##" className="post">
                  {post}
                </a>
              )}
              {i <= 2 && (
                <span
                  className={`${active ? `${mark ? "" : "dot"}` : ""}`}
                ></span>
              )}
            </p>
            <p className="time">{time}</p>
            {message && (
              <div className="message">
                <p>
                  Hello, thanks for setting up the Chess Club. I've been a
                  member for a few weeks now and I'm already having lots of fun
                  and improving my game.
                </p>
              </div>
            )}
            {pic && (
              <div className="img-box">
                <img src={pic} alt="" />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Box;
