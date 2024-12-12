import React from "react";
import certifate from "../assets/images/certificate_project.png";
import "../assets/styles/Project.scss";
import markdown from "../assets/images/markdown-basics.png";
import todo from "../assets/images/image.png";
function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://github.com/VishuReddy-dev/Facial-emotion-recognition"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR9aV11cRRHB3koq0MpEgGco3zrTl8B2BR5A&s"
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/VishuReddy-dev/Facial-emotion-recognition"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Facial-emotion-recognition</h2>
          </a>
          <p>
            This project implements a Facial Emotion Recognition (FER) system
            using Convolutional Neural Networks (CNNs) to classify human
            emotions based on facial expressions.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/VishuReddy-dev/certificate-generator-using-python"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={certifate}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/VishuReddy-dev/certificate-generator-using-python"
            target="_blank"
            rel="noreferrer"
          >
            <h2>certificate-generator-using-python</h2>
          </a>
          <p>
            Automated certificate generation tool that reads names from an Excel
            file, adjusts text formatting dynamically, and generates
            certificates with a customizable template using Python.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/VishuReddy-dev/markdown-editor"
            target="_blank"
            rel="noreferrer"
          >
            <img src={markdown} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/VishuReddy-dev/markdown-editor"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Markdown Editor</h2>
          </a>
          <p>
            A real-time Markdown editor built with Node.js, Socket.IO, and
            Express.js. This application allows users to write Markdown syntax
            and preview the rendered HTML in real-time.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/VishuReddy-dev/To-Do-List-web-app"
            target="_blank"
            rel="noreferrer"
          >
            <img src={todo} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/VishuReddy-dev/To-Do-List-web-app"
            target="_blank"
            rel="noreferrer"
          >
            <h2>To-Do-List-web-app</h2>
          </a>
          <p>
            my very own Todo List web app using Express.js and EJS templating!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
