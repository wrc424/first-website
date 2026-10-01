//把 <img> 元素的引用存储在 myImage 变量中
const myImage=document.querySelector("img");
//让它的 onclick 事件处理器属性等于一个无名函数
myImage.onclick=()=>{
    //每次点击获取图片的src属性值
    const mySrc=myImage.getAttribute("src");
    if(mySrc==="images/03.jpg"){
        myImage.setAttribute("src","images/02.jpg");
    }else{
        myImage.setAttribute("src","images/03.jpg");
    }
};

let myButton=document.querySelector("button");
let myHeading=document.querySelector("h1");


function setUserName(){
    //prompt()函数需要用户输入数据，并在用户点击确定后将数据存储在一个变量中
    const myName=prompt("Please enter your name.");
    //localStorage允许我们将数据存储在浏览器中并供后续获取
    //检测 name 数据是否存在
    if(!myName){
        setUserName();
    }else{
        localStorage.getItem("name",myName);
        myHeading.textContent=`Cool, ${myName}`;
    }
}

myButton.onclick = function () {
  setUserName();
};

