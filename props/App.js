function App(){
    const date=new Date();
const hours=date.getHours();
let timeofday;
if(hours<12){
    timeofday="Morning";
}
else if(hours>=12 & hours<17){
    timeofday="Afternoon";
}
else if(hours>=17 && hours<20){
    timeofday="Evening";
}
else{
    timeofday="Night";
}

    return(
        <h1>Good {timeofday} !</h1>
 
    )
}
ReactDOM.render(<App/>,document.getElementById("root"))