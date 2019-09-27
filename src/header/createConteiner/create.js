import React from "react";
import plus from "../../img/plus.png";
import styles from "../createConteiner/create.module.css";
class createComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  array = [];

  createEachNote = (
    allDiv,
    photoDiv,
    blogDiv,
    colorAllDiv,
    photoPosX,
    photoPosY,
    blogPosX,
    blogPosY,
    blogText,
    index
  ) => {
    let divConteiner = document.createElement("div");
    divConteiner.className = styles.allDiv;

    let spanBlog = document.createElement("span");
    spanBlog.className = styles.spanBlog;
    spanBlog.textContent = "+";
    var divBlog;
    spanBlog.onclick = () => {
      var objDiv = {
        divBlog: "div",
        class: `${styles.blogInner}`,
        text: `${blogText}`
      };
      this.array[index].blogDiv.push(objDiv);
      divConteiner.innerHTML = "";
      divConteiner.appendChild(spanBlog);
      divConteiner.appendChild(spanPhoto);
      photoDiv.forEach(item => {
        divPhoto = document.createElement(item.inputPhoto);
        divPhoto.type = item.type;
        divPhoto.style.cssText = `top:${photoPosY}px;left:${photoPosX}px;`;
        divPhoto.className = item.class;
        divConteiner.appendChild(divPhoto);
      });

      blogDiv.forEach(item => {
        divBlog = document.createElement(item.divBlog);
        divBlog.style.cssText = `top:${blogPosY}px;left:${blogPosX}px;`;
        divBlog.className = item.class;
        divBlog.textContent = item.text;
        divConteiner.appendChild(divBlog);
      });
    };

    let spanPhoto = document.createElement("span");
    spanPhoto.className = styles.spanPhoto;
    spanPhoto.textContent = "+";
    var divPhoto;
    spanPhoto.onclick = () => {
      let objPhoto = {
        inputPhoto: "input",
        type:"file",
        class: `${styles.hideInput}`,
        onChange: `${this.handleFileSelect}`
      };
      this.array[index].photoDiv.push(objPhoto);
      divConteiner.innerHTML = "";
      divConteiner.appendChild(spanBlog);
      divConteiner.appendChild(spanPhoto);
      blogDiv.forEach(item => {
        divBlog = document.createElement(item.divBlog);
        divBlog.style.cssText = `top:${blogPosY}px;left:${blogPosX}px;`;
        divBlog.className = item.class;
        divBlog.textContent = item.text;
        divConteiner.appendChild(divBlog);
      });
      photoDiv.forEach(item => {
        divPhoto = document.createElement(item.inputPhoto);
        divPhoto.type = item.type;
        divPhoto.style.cssText = `top:${photoPosY}px;left:${photoPosX}px;`;
        divPhoto.className = item.class;
        divConteiner.appendChild(divPhoto);
      });
    };

    //   <input
    //   type="file"
    //   className={styles.hideInpit}
    //   ref={this.myInputLogo}
    //   onChange={this.handleFileSelect}
    //   name="file"
    // />
    photoDiv.forEach(item => {
      divPhoto = document.createElement(item.inputPhoto);
      divPhoto.type = item.type;
      divPhoto.style.cssText = `top:${photoPosY}px;left:${photoPosX}px;`;
      divPhoto.className = item.class;
      divConteiner.appendChild(divPhoto);
    });


    blogDiv.forEach(item => {
      divBlog = document.createElement(item.divBlog);
      divBlog.style.cssText = `top:${blogPosY}px;left:${blogPosX}px;`;
      divBlog.className = item.class;
      divBlog.textContent = item.text;
      divConteiner.appendChild(divBlog);
    });
    divConteiner.appendChild(spanPhoto);
    divConteiner.appendChild(spanBlog);
    document.querySelector("#board").appendChild(divConteiner);
  };
  createHtml = () => {
    document.querySelector("#board").innerHTML = "";
    this.array.forEach((item, index) => {
      this.createEachNote(
        item.allDiv,
        item.photoDiv,
        item.blogDiv,
        item.colorAllDiv,
        item.photoPosX,
        item.photoPosY,
        item.blogPosX,
        item.blogPosY,
        item.blogText,
        index
      );
    });
  };
  addComponent = () => {
    let obj = {
      allDiv: [],
      photoDiv: [],
      blogDiv: [],
      colorAllDiv: "",
      photoPosX: 600,
      photoPosY: 100,
      blogPosX: 100,
      blogPosY: 100,
      blogText: "Hi There",
    };
    this.array.push(obj);
    this.createHtml();
  };

  render() {
    return (
      <div>
        <div onClick={this.addComponent} className={styles.addComponent}>
          <img src={plus} alt="plus" />
        </div>
        <div id="board" className={styles.board}></div>
      </div>
    );
  }
}
export default createComponent;
