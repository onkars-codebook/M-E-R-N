import "./Box.css"

function Description(props){ //First way to pass the args
  console.log(props);
    return(
    <p>Hello this is {props.title}</p>
    )
}   

function Something(props) { //First way to pass the args
    return <p>This is the First {props.title}</p>
  }
  
  function Label() {
    return <p>this is the label</p>
  }  
  function PassArray(){
    //creating an objects
    let object = {a : "hello", b : "bello" , c : "cello"};
    let features =[<li> "hi-tech"</li>, <li>"durable"</li> ,<li>"creatice"</li>];
    return(
      <>
            <p>{features}</p>
            <p>{object.c}</p>
      </>

    )
  }
  function Discount({price}){
    if (price > 100) {
      return <p>You got 10% discoount</p>
    }else{
      return <p>Buy Upto 100 for discount</p>
    }
  }
  function Box(){
    return (
       <div id="box">
        <Something title="Onkar sathe "/>
        <Description title = "onkar sathe"/>  
        <Label title = "   this is title "/>
        <PassArray arr={["I am","onkar","sathe"]}/>
        <Discount price = {2000}/>
       </div>                                                                                             
    )
  }
export default Box;