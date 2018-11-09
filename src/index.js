 import _ from 'lodash';
 import './style.css';
 import icon from './icon.jpg';
 import Data from './data.xml';

  function component() {
    var element = document.createElement('div');

   // Lodash, currently included via a script, is required for this line to work
   // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    //将图像添加到我们现有的div中.
    let myIcon = new Image();
    myIcon.src = icon;

    element.appendChild(myIcon);

    console.log(Data);

    return element;
  }

  document.body.appendChild(component());