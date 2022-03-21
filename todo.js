
//ボタン要素の取得
const button = document.getElementById('add');
const donebt = document.getElementById('done');

//追加ボタンがクリックされた時の反応
button.addEventListener('click',function(){
    var text = document.getElementById('text')
    var value =document.createTextNode(text.value);
    var li = document.createElement('li');
    li.className = 'cl'; 
     
    let check = document.createElement('input');
    check.setAttribute('id','check');
    check.setAttribute('type','checkbox');
    check.setAttribute('name','box');
    check.setAttribute('check','')
    check.setAttribute('value',value)

    var list = document.getElementById('listarea');


    li.appendChild(value);
 
    list.appendChild(li);
    list.appendChild(check);
    text.value = "";
});
 
//doneボタンが押された時の動作
donebt.addEventListener('click',function(){
   //var box = document.querySelectorAll("check")
   var boxv = document.querySelectorAll("input[type='checkbox']");
   //console.log(boxv[0].checked)
   
    
    
   
    for (var i=0;i<boxv.length;i++){
      
      //取り消し線追加
      if(boxv[i].checked===true){
         //console.log(boxv[i].checked)
           var li = document.querySelectorAll("li");
           //console.log(li[i])
           li[i].classList.add('done');
       };
   }

});
 



