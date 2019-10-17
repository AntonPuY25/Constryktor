import React from "react";
import styles from "../createConteiner/createTest.module.css";
class createComponent extends React.Component {
  constructor(props) {
    super(props);
this.widthImgRef = React.createRef();
this.heightImgRef = React.createRef();
this.widthBlogRef = React.createRef();
this.heightBlogRef = React.createRef();
this.colorBlogRef = React.createRef();
this.colorTextBlogRef = React.createRef();
this.sizeTextBlogRef = React.createRef();
this.heightComponentRef = React.createRef();
this.colorComponentRef = React.createRef();
this.showImg = React.createRef();
this.showBlog = React.createRef();
this.showComponent = React.createRef();
this.photoButtom = React.createRef();
this.blogButtom = React.createRef();
this.componentButtom = React.createRef();
this.clearButtom = React.createRef();
this.safeButtom = React.createRef();
    this.state = {};
  }

  arrayComponent = [];
  arrayBlog = [];
  arrayImg = [];

  componentDidMount(){
        this.own()
  }
  createComponent = (color, height) => {
 
let divConteiner = document.createElement("div");
    divConteiner.className = styles.allDiv;
   
    divConteiner.style.cssText = `height:${height}px;background-color: ${color};`;
  
    document.querySelector("#boardConteiner").appendChild(divConteiner);

    
  };

  createBlog = (height,width,color,colorText,sizeText,posX, posY, text, index) => {

    var divBlog;
    var deltaYBlog;
    var deltaXBlog;
    var trackMouseDivBlog = event => {
      divBlog.style.cssText = `top:${event.pageY -
        deltaYBlog}px;left:${event.pageX - deltaXBlog}px;
        height:${height}px;width:${width}px;
        background-color: ${color};color:${colorText}; font-size:${sizeText}px;`;
        
    };
    divBlog = document.createElement("div");
    divBlog.style.cssText = `top:${posY}px; left:${posX}px;
    height:${height}px;width:${width}px;
    background-color: ${color}; color:${colorText};font-size:${sizeText}px;`;
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

    var trackMouseDivBlog = event => {
      divBlog.style.cssText = `top:${event.pageY -
        deltaYBlog}px;left:${event.pageX - deltaXBlog}px;
     
        `;
    };
    divBlog = document.createElement("div");
    divBlog.style.cssText = `top:${posY}px; left:${posX}px;
   
    `;
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
         this.arrayImg[index].photoData = event.target.result
         console.log( this.arrayImg[index].photoData)
       
              divBlog.className = styles.hideInput;
            var images = document.createElement("img");
            images.src =  this.arrayImg[index].photoData;
            images.style.cssText = `width:${width}px;height:${height}px;`;
          
            divBlog.appendChild(images);
            images.onmousedown= ()=>{
              return false;
            }
    

            
             
            };
          })(f);
    
          reader.readAsDataURL(f);

   
        divBlog.appendChild(divPhotos);
        document.querySelector("#boardImg").appendChild(divBlog);
       }
  
     
        
    
    
    
  };

  component = () => {
    document.querySelector("#boardConteiner").innerHTML = "";
    this.arrayComponent.forEach((item, index) => {
      this.createComponent(item.color, item.height, index);
    });
  };

  blog = () => {
    document.querySelector("#boardBlog").innerHTML = "";
    this.arrayBlog.forEach((item, index) => {
      this.createBlog(item.height,item.width,item.color,item.colorText,item.sizeText,
        item.blogPosX, item.blogPosY, item.blogText, index);
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
      height:"",
      color:"",
    
    };
    let heightComponent =this.heightComponentRef.current.value.replace (/[^\d]/g, '') 
    let colorComponent = this.colorComponentRef.current.value;
    if(heightComponent < 200 && colorComponent ){
      alert("error")
    }else{
    
      obj.height = heightComponent;
      obj.color = colorComponent;
      this.arrayComponent.push(obj);
    this.component();
    }
    
  };

  addBlog = () => {
    let obj = {
      height:"",
      width:"",
      color:"yellowgreen",
      colorText:"black",
      sizeText:"",
      blogPosX: 100,
      blogPosY: 100,
      blogText: "Hi There"
    };
    let heighBlog = this.heightBlogRef.current.value.replace (/[^\d]/g, '') 
    let widthBlog = this.widthBlogRef.current.value.replace (/[^\d]/g, '') 
    let colorBlog = this.colorBlogRef.current.value;
    let colorText = this.colorTextBlogRef.current.value;
    let sizeText = this.sizeTextBlogRef.current.value;
    if(heighBlog < 100 ||  widthBlog < 100 || sizeText < 10 ){
      alert("error")
    }else{
    
      obj.height = heighBlog;
      obj.width = widthBlog;
      obj.color = colorBlog;
      obj.colorText = colorText;
      obj.sizeText = sizeText;
      this.arrayBlog.push(obj);
      this.blog();
    }
  
  };

  addImg = () => {
    let obj = {
      photoPosX: 600,
      photoPosY: 100,
      photoData: "",
      widthImg:"",
      heightImg:"",
    };
    let widthImg = this.widthImgRef.current.value.replace (/[^\d]/g, '') 
    let heightImg = this.heightImgRef.current.value.replace (/[^\d]/g, '') 
    if(widthImg < 100 ||  heightImg < 100){
      alert("error")
    }else{
    
      obj.heightImg = heightImg;
      obj.widthImg = widthImg;
     
      this.arrayImg.push(obj);
      this.photo();
    }
  
  };
  addImages = ()=>{
    this.showImg.current.style.display = (this.showImg.current.style.display === 'block') ? '' : 'block'

  }
  addBlogs = ()=>{
    this.showBlog.current.style.display = (this.showBlog.current.style.display === 'block') ? '' : 'block'

  }
  addComponents = ()=>{
    this.showComponent.current.style.display = (this.showComponent.current.style.display === 'block') ? '' : 'block'

  }
clearButtoms = ()=>{
  this.photoButtom.current.style.display = 'none';
  this.blogButtom.current.style.display = 'none';
  this.safeButtom.current.style.display = 'none';
  this.componentButtom.current.style.display = 'none';
  this.clearButtom.current.style.display = 'none';
}
safe = ()=>{
 
  

 
  localStorage.allCMSBlog = JSON.stringify(this.arrayBlog);
  localStorage.allCMSPhoto = JSON.stringify(this.arrayImg);
  localStorage.allCMSComponent = JSON.stringify(this.arrayComponent);

}
own = ()=>{
  if (localStorage.allCMSBlog && localStorage.allCMSPhoto && localStorage.allCMSComponent) {
    this.arrayComponent = JSON.parse(localStorage.allCMSComponent);
    this.arrayBlog = JSON.parse(localStorage.allCMSBlog);
    this.arrayImg = JSON.parse(localStorage.allCMSPhoto);
   
    this.blog();
    this.component();
    this.photo();
    }else{
      alert("error")
    }
}




  render() {

    return (
      <div>
      
      

        <button type="button" ref={this.photoButtom} onClick={this.addImages}
 className="btn btn-success">ADD IMAGES</button>

        <div className={styles.allImg}  ref={this.showImg}>
        <div className="input-group">
  <div className="input-group-prepend">
    <span className="input-group-text" >Ширина и Высота</span>
  </div>
        
      
  <input type="text" className="form-control"  ref={this.widthImgRef}/>
  <input type="text" className="form-control" ref={this.heightImgRef}/>
 
        </div>
        <div onClick={this.addImg} className={styles.addImg}>
          + IMG
        </div>
        </div>
      
      

        <button type="button" ref={this.blogButtom} onClick={this.addBlogs}
 className="btn btn-success">ADD BLOG</button>

        <div className={styles.allBlog}  ref={this.showBlog}>
        <div className="input-group">
  <div className="input-group-prepend">
    <span className="input-group-text" >Ширина и Высота</span>
  </div>
        
      <div>
      <input type="text" className="form-control"  ref={this.widthBlogRef}/>
  <input type="text" className="form-control" ref={this.heightBlogRef}/>
      </div>

  <div className={styles.colors}>
        <div>
          Change color blog
          <br/>
          <select ref={this.colorBlogRef}>
          <option id={styles.greenConteine} value="Green">Green</option>
  <option id={styles.blackConteine} value="Black">Black</option>
<option id={styles.blueConteine} value="Blue">Blue</option>
<option id={styles.whiteConteiner} value="White">White</option>
<option  id={styles.redConteine} value="Red">Red</option>
<option id={styles.yellowConteine} value="Yellow">Yellow</option>
</select>
          
        </div>
        </div>
        <br/><br/><br/>
        <div className={styles.colors}>
        <div>
          Change color text
          <br/>
          <select ref={this.colorTextBlogRef}>
          <option id={styles.whiteConteiner} value="White">White</option>
          <option id={styles.greenConteine} value="Green">Green</option>
  <option id={styles.blackConteine} value="Black">Black</option>
<option id={styles.blueConteine} value="Blue">Blue</option>

<option  id={styles.redConteine} value="Red">Red</option>
<option id={styles.yellowConteine} value="Yellow">Yellow</option>
</select>
          
        </div>
        </div>
        <div className="input-group-prepend">
    <span className="input-group-text" >Размер шрифта</span>
  </div>
        
      <div>
      <input type="text" className="form-control"  ref={this.sizeTextBlogRef}/>
        </div>

        </div>
        <div onClick={this.addBlog} className={styles.addBlog}>
          + Blog
        </div>
        </div>
        


        <button type="button" ref={this.componentButtom} onClick={this.addComponents}
 className="btn btn-success">ADD COMPONENT</button>

        <div className={styles.allBlog}  ref={this.showComponent}>
        <div className="input-group">
  <div className="input-group-prepend">
  <div><span className="input-group-text"  > Высота</span></div>
    
  </div>
        
      
 
  <input type="text" className="form-control"  ref={this.heightComponentRef}/>
 
        </div>
        <div className={styles.colors}>
        <div>
          Change color
          <br/>
          <select ref={this.colorComponentRef}>
          <option id={styles.greenConteine} value="Green">Green</option>
  <option id={styles.blackConteine} value="Black">Black</option>
<option id={styles.blueConteine} value="Blue">Blue</option>
<option id={styles.whiteConteiner} value="White">White</option>
<option  id={styles.redConteine} value="Red">Red</option>
<option id={styles.yellowConteine} value="Yellow">Yellow</option>
</select>
          
        </div>
        </div>
        <div onClick={this.addComponent} className={styles.addComponent}>
          + Component
        </div>
        </div>
        <div id="boardConteiner" className={styles.boardConteiner}></div>
        <div id="boardBlog" className={styles.boardBlog}></div>
        <div id="boardImg" className={styles.boardImg}></div>
      

      
        <button type="button" id={styles.clearButtoms} ref={this.clearButtom} onClick={this.clearButtoms}
 className="btn btn-success">Clear Buttoms</button>
          <button type="button" id={styles.safe} ref={this.safeButtom} onClick={this.safe}
 className="btn btn-success">Safe</button>
 
      </div>
     
    );
  }
}
export default createComponent;
