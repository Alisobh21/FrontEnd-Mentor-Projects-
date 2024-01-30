import "./App.css";
import React from "react";
import Box from "./Box";
import { useSelector, useDispatch } from "react-redux";
import { markAll, Seen } from "./store/CounterSlicer";

function App() {
  const Val = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const handleMark = () => {
    dispatch(markAll());
    dispatch(Seen());
  };
  const data = [
    {
      img: "avatar-mark-webber.webp",
      name: " Mark Webber",
      interacte: "reacted to your recent post",
      post: "My first tournament today!",
      time: "1m ago",
    },
    {
      img: "avatar-angela-gray.webp",
      name: "Angela Gray",
      interacte: "followed you",
      post: null,
      time: "5m ago",
    },
    {
      img: "avatar-jacob-thompson.webp",
      name: "Jacob Thompson",
      interacte: "has joined your group",
      post: "Chess Club",
      time: "1 day ago",
    },
    {
      img: "avatar-rizky-hasanuddin.webp",
      name: "Rizky Hasanuddin",
      interacte: "sent you a private message",
      post: null,
      time: "5 days ago",
      message: `Hello, thanks for setting up the Chess Club. I've been a
                  member for a few weeks now and I'm already having lots of fun
                  and improving my game.`,
    },
    {
      img: "avatar-kimberly-smith.webp",
      name: "Kimberly Smith",
      interacte: " commented on your picture",
      time: "1 week ago",
      pic: "image-chess.webp",
    },
    {
      img: "avatar-nathan-peterson.webp",
      name: "Nathan Peterson",
      interacte: "reacted to your recent post",
      post: "5 end-game strategies to increase your win rate",
      time: "2 weeks ago",
    },
    {
      img: "avatar-anna-kim.webp",
      name: " Anna Kim",
      interacte: "left the group",
      post: "Chess Club",
      time: "2 weeks ago",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="top-bar">
            <div className="title">
              <p className="title-text">Notifications</p>
              <p className="num" id="num">
                {Val}
              </p>
            </div>
            <a
              href="##"
              className="read"
              id="read"
              onClick={() => handleMark()}
            >
              Mark all as read
            </a>
          </div>
          <div className="notifications">
            {data.map((item, i) => {
              return <Box {...item} i={i} key={i} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
