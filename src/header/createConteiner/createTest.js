import React from "react";
import styles from "../createConteiner/createTest.module.css";
class createComponent extends React.Component {
  constructor(props) {
    super(props);
this.widthImgRef = React.createRef();
this.heightImgRef = React.createRef();
    this.state = {};
  }
  arrayComponent = [];
  arrayBlog = [];
  arrayImg = [];

  createComponent = (color, width, height) => {
    let divConteiner = document.createElement("div");
    divConteiner.className = styles.allDiv;
    document.querySelector("#boardConteiner").appendChild(divConteiner);
  };

  createBlog = (posX, posY, text, index) => {
    var divBlog;
    var deltaYBlog;
    var deltaXBlog;
    var trackMouseDivBlog = event => {
      divBlog.style.cssText = `top:${event.pageY -
        deltaYBlog}px;left:${event.pageX - deltaXBlog}px;`;
    };
    divBlog = document.createElement("div");
    divBlog.style.cssText = `top:${posY}px; left:${posX}px;`;
    divBlog.className = styles.blogInner;
    divBlog.onmousedown = event => {
      window.addEventListener("mousemove", trackMouseDivBlog);
      deltaYBlog = event.pageY - divBlog.offsetTop;
      deltaXBlog = event.pageX - divBlog.offsetLeft;
    };
    divBlog.onmouseup = () => {
      window.removeEventListener("mousemove", trackMouseDivBlog);
      this.arrayBlog[index].blogPosX = divBlog.offsetLeft;
      this.arrayBlog[index].blogPosY = divBlog.offsetTop;
    };
    var innerDiv = document.createElement("div");
    innerDiv.textContent = text;
    var textArea = document.createElement("textarea");
    
    innerDiv.ondblclick = function () {
      innerDiv.style.display = "none";
      textArea.style.display = "block";
      textArea.value = innerDiv.textContent;
    
     
    }
    
    textArea.ondblclick =  ()=> {
      innerDiv.style.display = "";
      textArea.style.display = "";
      innerDiv.textContent = textArea.value;
     this.arrayBlog[index].blogText = textArea.value;
     
    }

    textArea.onmousedown = function (e) {
      e.stopPropagation();
    }

    divBlog.appendChild(innerDiv);
    divBlog.appendChild(textArea);
    document.querySelector("#boardBlog").appendChild(divBlog);
  };

  createPhoto = (posX, posY, photoData,width,height,index) => {
    var divBlog;
    var deltaYBlog;
    var deltaXBlog;
    var divPhotos;
    var widthPhoto = this.widthImgRef.current.value.replace (/[^\d]/g, '');
    var heightPhoto = this.heightImgRef.current.value.replace (/[^\d]/g, '');
    console.log(widthPhoto)
    var trackMouseDivBlog = event => {
      divBlog.style.cssText = `top:${event.pageY -
        deltaYBlog}px;left:${event.pageX - deltaXBlog}px;`;
    };
    divBlog = document.createElement("div");
    divBlog.style.cssText = `top:${posY}px; left:${posX}px;`;
    divBlog.className = styles.photoBlog;
    divBlog.onmousedown = event => {
      window.addEventListener("mousemove", trackMouseDivBlog);
      deltaYBlog = event.pageY - divBlog.offsetTop;
      deltaXBlog = event.pageX - divBlog.offsetLeft;
    };

    divBlog.onmouseup = () => {
      window.removeEventListener("mousemove", trackMouseDivBlog);
      this.arrayImg[index].photoPosX = divBlog.offsetLeft;
      this.arrayImg[index].photoPosY = divBlog.offsetTop;
    };
  
    
        
       if( widthPhoto <10 || heightPhoto < 10)
       {
         alert("ERROR")
       }else{
         this.arrayImg[index].widthImg = widthPhoto;
         this.arrayImg[index].heightImg = heightPhoto;
        divPhotos = document.createElement("input");
        divPhotos.type = "file";
        divPhotos.className = styles.hideInput;
        divPhotos.click();
        divPhotos.onchange = event => {
          let file = event.target.files;
          let f = file[0];
          let reader = new FileReader();
          reader.onload = (event => {
            return event => {
              this.arrayImg[index].photoData.push(event.target.result);
         
            let span = document.createElement("div");
            span.className = styles.hideInput;
            var images = document.createElement("img");
            images.src = this.arrayImg[index].photoData;
            images.style.cssText = `width:${width}px;height:${height}px;`
          
             span.appendChild(images);
            images.onmousedown= ()=>{
              return false;
            }
    
            span.appendChild(images);
            divBlog.insertBefore(span, null);
             
            };
          })(f);
    
          reader.readAsDataURL(f);

        };
        divBlog.appendChild(divPhotos);
        document.querySelector("#boardImg").appendChild(divBlog);
       }
  
     
        
    
    
    
  };

  component = () => {
    document.querySelector("#boardConteiner").innerHTML = "";
    this.arrayComponent.forEach((item, index) => {
      this.createComponent(item.color, item.width, item.height, index);
    });
  };

  blog = () => {
    document.querySelector("#boardBlog").innerHTML = "";
    this.arrayBlog.forEach((item, index) => {
      this.createBlog(item.blogPosX, item.blogPosY, item.blogText, index);
    });
  };

  photo = () => {
    document.querySelector("#boardImg").innerHTML = "";
    this.arrayImg.forEach((item, index) => {
      this.createPhoto(item.photoPosX, item.photoPosY, item.photoData, 
        item.widthImg,item.heightImg,index);
    });
  };

  addComponent = () => {
    let obj = {
      color: "yellowgreen",
      width: "100%",
      height: "400px"
    };
    this.arrayComponent.push(obj);
    this.component();
  };

  addBlog = () => {
    let obj = {
      blogPosX: 100,
      blogPosY: 100,
      blogText: "Hi There"
    };
    this.arrayBlog.push(obj);
    this.blog();
  };

  addImg = () => {
    let obj = {
      photoPosX: 600,
      photoPosY: 100,
      photoData: [],
      widthImg:200,
      heightImg:200,
    };
    this.arrayImg.push(obj);
    this.photo();
  };
  addImages = ()=>{
   console.log(this.widthImgRef.current.value.replace (/[^\d]/g, ''))

  }
 

  render() {
    return (
      <div>
        <div onClick={this.addComponent} className={styles.addComponent}>
          + Component
        </div>
        <div onClick={this.addBlog} className={styles.addBlog}>
          + Blog
        </div>


        <div className={styles.allImg}>
        <div onClick={this.addImg} className={styles.addImg}>
          + IMG
        </div>
        <div className="input-group">
  <div className="input-group-prepend">
    <span className="input-group-text" >Ширина и Высота</span>
  </div>
  <input type="text" className="form-control"  ref={this.widthImgRef}/>
  <input type="text" className="form-control" ref={this.heightImgRef}/>

        </div>
        </div>
      
        <button type="button" onClick={this.addImages} className="btn btn-success">ADD IMAGES</button>
        
        <div id="boardConteiner" className={styles.boardConteiner}></div>
        <div id="boardBlog" className={styles.boardBlog}></div>
        <div id="boardImg" className={styles.boardImg}></div>
      
       
      </div>
    );
  }
}
export default createComponent;
