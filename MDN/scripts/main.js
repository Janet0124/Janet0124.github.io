// 设置图片切换
//将img元素的引用存放在myImage变量中，let和var作用是声明变量，若不声明则为全局变量
let myImage = document.querySelector('img');
//将变量与事件，绑定起来
myImage.onclick = function() {
//将img元素的属性放在mySrc变量中
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/fig1.jpg') {
//设置该属性的值
    myImage.setAttribute ('src','images/fig2.jpg');
  } else {
    myImage.setAttribute ('src','images/fig1.jpg');
  }
};

// 设置个性化欢迎信息
// 获取新按钮和标题的引用
let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1');

// 个性化欢迎信息设置函数
//函数目前不起作用，调用才起作用
function setUserName() {
  let myName = prompt('请输入你的名字。');
  //检查myName是否有值
  //if没有，则再次调用该函数（用户输入了空），继续输入
  //else
        //首先调用localStorage,把数据存储在浏览器为了下次访问
        //将元素h1的属性设置为一个新名字
  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
  }
}

// 初始化代码：在页面初次读取时进行构造工作：
//if浏览器没有存储过名字,则调用函数设置名字
//else调用getItem函数获取之前保存的名字
if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

// 为按钮设置 onclick 事件处理器：
//之前获取了button的引用存放在变量myButton,现在将变量与时间绑定
myButton.onclick = function() {
  setUserName();
};