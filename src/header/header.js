import React from "react";
import styles from "../header/header.module.css";
import plus from "../img/plus.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.myRefLogo = React.createRef();
    this.myRefTextName = React.createRef();
    this.meRefNameSite = React.createRef();
    this.myRefTextNamePlus = React.createRef();

    this.myRefinputOwn = React.createRef();
    this.myRefOwnPlus = React.createRef();
    this.myRefSpanOwn = React.createRef();

    this.myRefinputPortfolio = React.createRef();
    this.myRefPortfolioPlus = React.createRef();
    this.myRefSpanPortfolio = React.createRef();

    this.myRefinputAbout = React.createRef();
    this.myRefAboutPlus = React.createRef();
    this.myRefSpanAbout = React.createRef();

    this.myRefinputNews = React.createRef();
    this.myRefNewsPlus = React.createRef();
    this.myRefSpanNews = React.createRef();


    this.fileRef = React.createRef();
    this.myInputLogo = React.createRef();


    this.state = {
      textNameSite: "Name for you site",
      textOwn: "Главная",
      textPortfolio: "Портфолио",
      textAbout: "О нас",
      textNews: "Новости"
    };
  }
  
  addPhoto = () => {
    this.myInputLogo.current.click()
  };

  mouseOverLogo = () => {
    let refik = this.myRefLogo.current;
    refik.style.display = "block";
  };

  mouseOutLogo = () => {
    let refik = this.myRefLogo.current;
    refik.style.display = "none";
  };
  changeNameSite = () => {
    this.meRefNameSite.current.style.display = "none";
    this.myRefTextName.current.style.display = "inline-block";
    this.myRefTextNamePlus.current.style.display = "inline-block";
  };
  changeTextSite = () => {
    this.meRefNameSite.current.style.display = "inline-block";
    this.myRefTextName.current.style.display = "none";
    this.myRefTextNamePlus.current.style.display = "none";
    this.myRefTextName.current.value = "";
  };

  setTextNameSite = event => {
    let text = event.target.value;
    this.setState({
      textNameSite: text
    });
  };

  changeOwnSpan = () => {
    this.myRefSpanOwn.current.style.display = "none";
    this.myRefinputOwn.current.style.display = "inline-block";
    this.myRefOwnPlus.current.style.display = "inline-block";
  };
  changeOwnPlus = () => {
    this.myRefSpanOwn.current.style.display = "inline-block";
    this.myRefinputOwn.current.style.display = "none";
    this.myRefOwnPlus.current.style.display = "none";
    this.myRefinputOwn.current.value = "";
  };

  setTextOwneSite = event => {
    let text = event.target.value;
    this.setState({
      textOwn: text
    });
  };

  changePortfolioSpan = () => {
    this.myRefSpanPortfolio.current.style.display = "none";
    this.myRefinputPortfolio.current.style.display = "inline-block";
    this.myRefPortfolioPlus.current.style.display = "inline-block";
  };
  changePortfolioPlus = () => {
    this.myRefSpanPortfolio.current.style.display = "inline-block";
    this.myRefinputPortfolio.current.style.display = "none";
    this.myRefPortfolioPlus.current.style.display = "none";
    this.myRefinputPortfolio.current.value = "";
  };

  setTextPortfolioSite = event => {
    let text = event.target.value;
    this.setState({
      textPortfolio: text
    });
  };

  changeAboutSpan = () => {
    this.myRefSpanAbout.current.style.display = "none";
    this.myRefinputAbout.current.style.display = "inline-block";
    this.myRefAboutPlus.current.style.display = "inline-block";
  };
  changeAboutPlus = () => {
    this.myRefSpanAbout.current.style.display = "inline-block";
    this.myRefinputAbout.current.style.display = "none";
    this.myRefAboutPlus.current.style.display = "none";
    this.myRefinputAbout.current.value = "";
  };

  setTextAboutSite = event => {
    let text = event.target.value;
    this.setState({
      textAbout: text
    });
  };

  changeNewsSpan = () => {
    this.myRefSpanNews.current.style.display = "none";
    this.myRefinputNews.current.style.display = "inline-block";
    this.myRefNewsPlus.current.style.display = "inline-block";
  };
  changeNewsPlus = () => {
    this.myRefSpanNews.current.style.display = "inline-block";
    this.myRefinputNews.current.style.display = "none";
    this.myRefNewsPlus.current.style.display = "none";
    this.myRefinputNews.current.value = "";
  };

  setTextNewsSite = event => {
    let text = event.target.value;
    this.setState({
      textNews: text
    });
  };


     handleFileSelect=(evt)=> {
    let file = evt.target.files;
    let f = file[0];

    let reader = new FileReader();
    
    reader.onload = (()=> {
        return (e)=> {
            let span = document.createElement('span');
            span.innerHTML = ['<img " src="', e.target.result, '" />'].join('');
            this.fileRef.current.insertBefore(span, null);
        };
    })(f);
   
    reader.readAsDataURL(f);
};


  render() {
    return (
      <div>
        <nav>
          <div className={styles.grid}>
            <div
              className={styles.logo}
              onMouseOver={this.mouseOverLogo}
              onMouseOut={this.mouseOutLogo}
            >LOGO
            <input type="file"  className={styles.hideInpit} ref={this.myInputLogo}
            onChange={this.handleFileSelect} name="file" />
              <span className={styles.imgLogo} ref={this.fileRef}  id="output"></span>
             
              <div> <span
                ref={this.myRefLogo}
                className={styles.plusLogo}
                onClick={this.addPhoto}
              >
                <img src={plus} alt="add" />
              </span></div>
            </div>{" "}
            {/*  ЛОГО */}
            <div className={styles.nameMenu}>
              <span
                ref={this.meRefNameSite}
                className={styles.nameSite}
                onClick={this.changeNameSite}
              >
                {this.state.textNameSite}
              </span>
              <input
                onChange={this.setTextNameSite}
                name="name"
                type="text"
                ref={this.myRefTextName}
                className={styles.nameSiteTextarea}
              />
              <img
                src={plus}
                ref={this.myRefTextNamePlus}
                onClick={this.changeTextSite}
                alt="add"
              />
            </div>
            {/*  Name */}


            
            <div>
              <div className={styles.linkAbout}>
                <span
                  ref={this.myRefSpanOwn}
                  className={styles.spanOwnSite}
                  onClick={this.changeOwnSpan}
                >
                  {this.state.textOwn}
                </span>
                <input
                  type="text"
                  onChange={this.setTextOwneSite}
                  name="own"
                  type="text"
                  ref={this.myRefinputOwn}
                  className={styles.ownSiteinput}
                />
                <img
                  src={plus}
                  ref={this.myRefOwnPlus}
                  onClick={this.changeOwnPlus}
                  alt="add"
                />
              </div>

              <div className={styles.linkAbout}>
                <span
                  ref={this.myRefSpanPortfolio}
                  className={styles.spanOwnSite}
                  onClick={this.changePortfolioSpan}
                >
                  {this.state.textPortfolio}
                </span>
                <input
                  type="text"
                  onChange={this.setTextPortfolioSite}
                  name="own"
                  type="text"
                  ref={this.myRefinputPortfolio}
                  className={styles.ownSiteinput}
                />
                <img
                  src={plus}
                  ref={this.myRefPortfolioPlus}
                  onClick={this.changePortfolioPlus}
                  alt="add"
                />
              </div>

              <div className={styles.linkAbout}>
                <span
                  ref={this.myRefSpanAbout}
                  className={styles.spanAboutSite}
                  onClick={this.changeAboutSpan}
                >
                  {this.state.textAbout}
                </span>
                <input
                  type="text"
                  onChange={this.setTextAboutSite}
                  name="own"
                  type="text"
                  ref={this.myRefinputAbout}
                  className={styles.ownSiteinput}
                />
                <img
                  src={plus}
                  ref={this.myRefAboutPlus}
                  onClick={this.changeAboutPlus}
                  alt="add"
                />
              </div>

              <div className={styles.linkAbout}>
                <span
                  ref={this.myRefSpanNews}
                  className={styles.spanOwnSite}
                  onClick={this.changeNewsSpan}
                >
                  {this.state.textNews}
                </span>
                <input
                  type="text"
                  onChange={this.setTextNewsSite}
                  name="own"
                  type="text"
                  ref={this.myRefinputNews}
                  className={styles.ownSiteinput}
                />
                <img
                  src={plus}
                  ref={this.myRefNewsPlus}
                  onClick={this.changeNewsPlus}
                  alt="add"
                />
              </div>
            </div>
            {/* About */}
          </div>
          {/* Grid */}
        </nav>
      </div>
    );
  }
}
export default Header;
