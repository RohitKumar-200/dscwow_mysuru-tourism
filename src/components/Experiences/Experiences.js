import React, { useEffect, useState } from "react";
import "./Experiences.css";
import { Avatar } from "@material-ui/core";
import { db } from "../../firebase";
import NewPost from "../NewPost/NewPost";
import Loading from "../Loading/Loading";

function Experiences() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div className="posts">
      {posts ? (
        <>
          <NewPost />
          {posts?.map((post, i) => (
            <div className="post__container" key={i}>
              <div className="post__header">
                <Avatar src={post.authorPic} />
                <div className="post__author">{post.authorName}</div>
              </div>
              <div className="post__imageContainer">
                <img src={post.img} alt="" />
              </div>
              <div className="post__content">
                <h2 className="post__destination">{post.destination}</h2>
                {post.content}
              </div>
            </div>
          ))}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Experiences;
