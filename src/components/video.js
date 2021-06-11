import React from "react"
import "../css/style.css"
import video from "../images/starpopup.mp4"
import star from "../images/starclose.png"
import { Link } from "gatsby"

export default function Video() {
  return (
    <section className="video-section">
      <div className="video-modal">
        <Link to="/">
          <img className="menu-close-img" alt="" src={star} />
        </Link>
        <video
          className="video-popup"
          autoplay="autoplay"
          controls
          src={video}
          type="video/mp4"
        />
      </div>
    </section>
  )
}
