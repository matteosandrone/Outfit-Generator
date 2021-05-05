import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



class TopImage extends React.Component{
  render(){
return(
  <div>
    <img src={this.props.img} width="180" height="180"/>
  </div>
);
  }
}

class BottomImage extends React.Component{
  render(){
return(
  <div>
    <img src={this.props.img} width="180" height="180"/>
  </div>
);
  }
}

class Top extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      tindex: 1,
      bindex: 1,
     
    }
  }
  toggleTprev(e) {
    let tindex = this.state.tindex - 1
    if (this.state.tindex == 0){
        tindex=this.props.tops.length - 1;
    }
    
    this.setState({ tindex: tindex, })
  }
  toggleTnext(e) {
    let tindex = this.state.tindex + 1
    if (this.state.tindex == this.props.tops.length - 1){
      tindex=0;
  }
    this.setState({ tindex: tindex, })
  }
  toggleBprev(e) {
    let bindex = this.state.bindex - 1
    if (this.state.bindex == 0){
      bindex=this.props.bottoms.length - 1;
  }
    this.setState({ bindex: bindex,})
  }
  toggleBnext(e) {
    let bindex = this.state.bindex + 1
    if (this.state.bindex == this.props.bottoms.length - 1){
      bindex=0;
  }
    this.setState({ bindex: bindex, })
  }
  toggleRand(e){
    let  tindex = Math.floor(Math.random() * this.props.tops.length);
    let  bindex = Math.floor(Math.random() * this.props.bottoms.length);
    this.setState({tindex:tindex,bindex:bindex })
  }
  render(){
    const { tindex,bindex } = this.state
    const top = this.props.tops ? this.props.tops[tindex] : null
    const bottom = this.props.bottoms ? this.props.bottoms[bindex] : null
    if (top) {
    return(
      <div className="top">
        <TopImage {...top}/>
        <Tprev toggle={(e) => this.toggleTprev(e)}  />
        <Tnext toggle={(e) => this.toggleTnext(e)} />
        <BottomImage {...bottom}/>
        
        <Bprev toggle={(e) => this.toggleBprev(e)}  />
        <Bnext toggle={(e) => this.toggleBnext(e)}  />
        <Random toggle={(e) => this.toggleRand(e)}  />
       </div>  
    );
  }
}
}


function Tprev(props) {
  return (
    <button onClick={props.toggle} >Previous</button>
  );
}

function Tnext(props) {
  return (
    <button onClick={props.toggle} >Next</button>
  );
}
function Bprev(props) {
  return (
    <button onClick={props.toggle} >Previous</button>
  );
}

function Bnext(props) {
  return (
    <button onClick={props.toggle} >Next</button>
  );
}


function Random(props){
  return(
    <button onClick={props.toggle} >Create Outfit</button>
  )
}

class MainRoot extends React.Component{
  
render(){
  return(
    <div>
      <h1 className="title">Wardrobe App</h1>
      <h2 className="rules">Thanks to this App you can generate new Outfits with the clothes in your wardrobe! <br/><br/><br/>1. Take a photo of your Tops<br/>2. Take a photo of your Bottoms<br/>3.Click the buttons to change clothes<br/>4.You can also click "Create Outfit" to make the App generating some Outfits for you!<br/> <br/>-Here a mock is given-</h2>
      <Top tops={TOPS} bottoms={BOTTOMS}/>
      
   
     
    </div>
  );
}
}


const TOPS= [
  {"img":"https://cdn.pixabay.com/photo/2017/01/13/04/56/blank-1976334_960_720.png"},
  {"img":"https://cdn.pixabay.com/photo/2012/04/12/19/05/coat-30208_960_720.png"},
  {"img":"https://cdn.pixabay.com/photo/2014/04/03/10/20/suit-310122_960_720.png"},
  {"img":"https://5.imimg.com/data5/VT/DS/MY-17368652/plain-round-neck-tshirt-500x500.jpg"}
];

/*const BOTTOMS = [ 
  {"img":"https://cdn.pixabay.com/photo/2013/07/13/11/32/pants-158358_960_720.png"},
  {"img":"https://cdn.pixabay.com/photo/2014/04/02/10/40/jeans-304196_960_720.png"},
  {"img":"https://cdn.pixabay.com/photo/2016/08/20/12/41/pants-1607444_960_720.png"}
];*/
const BOTTOMS = [];

ReactDOM.render(
<MainRoot/>, document.getElementById('root'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
