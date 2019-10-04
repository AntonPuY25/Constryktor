import React from "react";
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
    photoData,
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
    var deltaYBlog;
    var deltaXBlog;
    var trackMouseDivBlog = event => {
      divBlog.style.cssText = `top:${event.pageY -
        deltaYBlog}px;left:${event.pageX - deltaXBlog}px;`;
    };
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
        divPhoto = document.createElement("div");
        divPhoto.style.cssText = `top:${photoPosY}px;left:${photoPosX}px;`;
        divPhoto.className = item.class;
        divPhotos = document.createElement("input");
        divPhotos.type = "file";
        let span = document.createElement("div");
        span.className = item.classPhoto;
        span.innerHTML = [
          '<img " src="',
          this.array[index].photoData,
          '" />'
        ].join("");
        divPhoto.insertBefore(span, null);

        divPhoto.appendChild(divPhotos);
        divConteiner.appendChild(divPhoto);
      });

      blogDiv.forEach(item => {
        divBlog = document.createElement(item.divBlog);
        divBlog.style.cssText = `top:${blogPosY}px; left:${blogPosX}px;`;
        divBlog.className = item.class;
        divBlog.textContent = item.text;
        divBlog.onmousedown = event => {
          window.addEventListener("mousemove", trackMouseDivBlog);
          deltaYBlog = event.pageY - divBlog.offsetTop;
          deltaXBlog = event.pageX - divBlog.offsetLeft;
        };
        divBlog.onmouseup = () => {
          window.removeEventListener("mousemove", trackMouseDivBlog);
          this.array[index].blogPosX = divBlog.offsetLeft;
          this.array[index].blogPosY = divBlog.offsetTop;
        };
        divConteiner.appendChild(divBlog);
      });
    };

    let spanPhoto = document.createElement("span");
    spanPhoto.className = styles.spanPhoto;
    spanPhoto.textContent = "+";
    this.myInputLogo = React.createRef();
    var divPhoto;
    var divPhotos;
    spanPhoto.onclick = () => {
      let objPhoto = {
        class: `${styles.hideInput}`,
        classPhoto: `${styles.classPhoto}`
      };
      this.array[index].photoDiv.push(objPhoto);
      divConteiner.innerHTML = "";
      divConteiner.appendChild(spanBlog);
      divConteiner.appendChild(spanPhoto);
      blogDiv.forEach(item => {
        divBlog = document.createElement(item.divBlog);
        divBlog.style.cssText = `top:${blogPosY}px; left:${blogPosX}px;`;
        divBlog.className = item.class;
        divBlog.textContent = item.text;
        divBlog.onmousedown = event => {
          divConteiner.addEventListener("mousemove", trackMouseDivBlog);
          deltaYBlog = event.pageY - divBlog.offsetTop;
          deltaXBlog = event.pageX - divBlog.offsetLeft;
        };
        divBlog.onmouseup = () => {
          divConteiner.removeEventListener("mousemove", trackMouseDivBlog);
          this.array[index].blogPosX = divBlog.offsetLeft;
          this.array[index].blogPosY = divBlog.offsetTop;
        };
        divConteiner.appendChild(divBlog);
      });
      photoDiv.forEach(item => {
        divPhoto = document.createElement("div");
        divPhoto.style.cssText = `top:${photoPosY}px;left:${photoPosX}px;`;
        divPhoto.className = item.class;
        divPhotos = document.createElement("input");
        divPhotos.type = "file";
        divPhotos.click();
        divPhotos.onchange = event => {
          let file = event.target.files;
          let f = file[0];

          let reader = new FileReader();

          reader.onload = (event => {
            return event => {
              this.array[index].photoData = event.target.result;
              let span = document.createElement("div");
              span.className = item.classPhoto;
              span.innerHTML = [
                '<img " src="',
                this.array[index].photoData,
                '" />'
              ].join("");
              divPhoto.insertBefore(span, null);
            };
          })(f);

          reader.readAsDataURL(f);
        };

        divPhoto.appendChild(divPhotos);
        divConteiner.appendChild(divPhoto);
      });
    };

    photoDiv.forEach(item => {
      divPhoto = document.createElement("div");
      divPhoto.style.cssText = `top:${photoPosY}px;left:${photoPosX}px;`;
      divPhoto.className = item.class;
      divPhotos = document.createElement("input");
      divPhotos.type = "file";

      let span = document.createElement("div");
      span.className = item.classPhoto;
      span.innerHTML = [
        '<img " src="',
        this.array[index].photoData,
        '" />'
      ].join("");
      divPhoto.insertBefore(span, null);

      divPhoto.appendChild(divPhotos);
      divConteiner.appendChild(divPhoto);
    });

    blogDiv.forEach(item => {
      divBlog = document.createElement(item.divBlog);
      divBlog.style.cssText = `top:${blogPosY}px; left:${blogPosX}px;`;
      divBlog.className = item.class;
      divBlog.textContent = item.text;
      divBlog.onmousedown = event => {
        divConteiner.addEventListener("mousemove", trackMouseDivBlog);
        deltaYBlog = event.pageY - divBlog.offsetTop;
        deltaXBlog = event.pageX - divBlog.offsetLeft;
      };
      divBlog.onmouseup = () => {
        divConteiner.removeEventListener("mousemove", trackMouseDivBlog);
        this.array[index].blogPosX = divBlog.offsetLeft;
        this.array[index].blogPosY = divBlog.offsetTop;
      };
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
        item.photoData,
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
      photoData: "",
      photoPosX: 600,
      photoPosY: 100,
      blogPosX: 100,
      blogPosY: 100,
      blogText: "Hi There"
    };
    this.array.push(obj);
    this.createHtml();
  };

  render() {
    return (
      <div>
        <div onClick={this.addComponent} className={styles.addComponent}>
          +
        </div>
        <div id="board" className={styles.board}></div>
      </div>
    );
  }
}
export default createComponent;
