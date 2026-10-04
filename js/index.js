var add = document.getElementById('add');
var cont = document.getElementById('cont')
var mark = document.getElementById('mark')
var nam = document.getElementById('name')
var phone = document.getElementById('phone')
var email = document.getElementById('email')
var address = document.getElementById('address')
var select = document.getElementById('select')
var ch1 = document.getElementById('ch1')
var ch2 = document.getElementById('ch2')
var cancel = document.getElementById('cancel')
var cont2 = document.getElementById('cont2')
var p1 = document.getElementById('p1')
var p2 = document.getElementById('p2')
var hero = document.getElementById('hero')
let body=document.getElementById('body')
let body2=document.getElementById('body2')
let logo=document.getElementById('logo')
let search=document.getElementById('search')
let photo=document.getElementById('photo')

var array = [];

if (localStorage.getItem('user') !== null) { array = JSON.parse(localStorage.getItem('user')) }

 
function show(){

let total=document.getElementById('total')
total.innerHTML=array.length
var favcount=0
let total2=document.getElementById('total2')
for(i=0;i<array.length;i++){
if(array[i].ch1){favcount++}

}

total2.innerHTML=favcount

var emercount=0
let total3=document.getElementById('total3')
for(i=0;i<array.length;i++){
if(array[i].ch2){emercount++}

}
total3.innerHTML=emercount

}


add.onclick = function () {
  cont.classList.remove("d-none")
  hero.classList.remove('d-none')

}
mark.onclick = function () {
  cont.classList.add('d-none')
   hero.classList.add('d-none')
}
cancel.onclick = function () {

  cont.classList.add('d-none')
hero.classList.add('d-none')
}



var flag1;
var flag2;
var flag3 = true;

save.onclick = function () {
 
 


  if (nam.value == "") {
    Swal.fire({
      icon: "error",
      title: "Missing Name",
      text: "Please enter a name for the contact!",
      footer: "<a href=\"#\"></a>"
    });

  }
  else if (phone.value == "") {
    Swal.fire({
      icon: "error",
      title: "Missing phone",
      text: "Please enter a phone number!",
      footer: "<a href=\"#\">"
    });

  }

  for (i = 0; i < array.length; i++) {
    if (array[i].phone == phone.value) {
      flag3 = false
      Swal.fire({
        icon: "error",
        title: "Duplicate Phone Number",
        text: "A contact with this phone number already exists: ",
        footer: "<a href=\"#\"></a>"
      });


    }
    if (flag2 == false) {
      Swal.fire({
        icon: "error",
        title: "Invalid Phone",
        text: "Please enter a valid Egyptian phone number (e.g., 01012345678 or +201012345678)",
        footer: "<a href=\"#\"></a>"
      });
    }

    else if (flag1 == false) {
      Swal.fire({
        icon: "error",
        title: "Invalid Name",
        text: "Name should contain only letters and spaces (2-50 characters)",
        footer: "<a href=\"#\"></a>"
      });
    }
  }

  if (flag1 == true && flag2 == true && flag3 == true) {
  
    Swal.fire({
      title: "Added",
      icon: "success",
      text: "contact has been added successfuly.",
      draggable: true,
       timer:"2000",
     showConfirmButton:false,
    });

    var obj = {
      nam: nam.value,
      phone: phone.value,
      email: email.value,
      notes: notes.value,
      address: address.value,
      select: select.value,
      ch1: ch1.checked,
      ch2: ch2.checked,
      img:`imgs/${photo.files[0].name}`
     
    }


 array.push(obj)

  }
 
   cont.classList.add("d-none")
hero.classList.add("d-none")
   
    localStorage.setItem("user", JSON.stringify(array))
    showdata()

  //  *****



}
//  *****


// ==========invalid  &&  flags===================
var x = /^[0-9]{10}$/
var n = /^[\D \s]{2,50}$/

function nv() {
  if (n.test(nam.value)) {
    nam.classList.add('is-valid')
    flag1 = true;

    nam.classList.remove('is-invalid')
  }
  else {
    phone.classList.add('is-invalid')

    flag1 = false;
    phone.classList.remove('is-valid')
  }
  if (flag1 == false) { p1.classList.remove('d-none') }
  else { p1.classList.add('d-none') }

}

function pv() {
  if (x.test(phone.value)) {
    phone.classList.add('is-valid')
    flag2 = true;

    phone.classList.remove('is-invalid')
  }
  else {
    phone.classList.add('is-invalid')

    flag2 = false;
    phone.classList.remove('is-valid')
  }

  if (flag2 == false) { p2.classList.remove('d-none') }
  else { p2.classList.add('d-none') }
}
// ==========================
showdata()


function change2(i){
  if( array[i].ch1==true){
  array[i].ch1=false
  
 showdata()
}
  else if( array[i].ch1==false){
  array[i].ch1=true

 showdata()
}
 localStorage.setItem("user", JSON.stringify(array))
console.log(array.length)
}


function change(i){
  if( array[i].ch2==true){
  array[i].ch2=false
   
  showdata()
 
 
}
  else if( array[i].ch2==false){
  array[i].ch2=true

  showdata()
 }
 localStorage.setItem("user", JSON.stringify(array))
 
 console.log(fav.length)

}

function showdata(){
 
  var test = "";
  var test2="";
    var test3="";
  for (i = 0; i < array.length; i++) {
    if(array[i].ch1==true){
test2+=` <diva class="col-12 col-lg-6 d-flex justify-content-between p-2">
       
        <div class="d-flex align-items-center">
             <imge><img src="${array[i].img}"></imge>
             <text2>
                   <h4>${array[i].nam}</h4>
                   <p>${array[i].phone}</p>
             </text2>

        </div>             
           <a class="a" href="tel:${array[i].phone}"><i class="fa-solid fa-phone" style="color: rgb(140, 245, 59);"></i></a>
        
    </diva>`}
    if(array[i].ch2==true){
test3+=` <diva class="col-12 col-lg-6 d-flex justify-content-between p-2">
       
        <div class="d-flex align-items-center">
             <imge><img src="${array[i].img}"></imge>
             <text2>
                   <h4>${array[i].nam}</h4>
                   <p>${array[i].phone}</p>
             </text2>

        </div>             
           <a class="a" href="tel:${array[i].phone}"><i class="fa-solid fa-phone" style="color: rgb(233, 8, 8);"></i></a>
        
    </diva>`}


  if(array[i].select=="Select a group"){array[i].select=""}
    if(array[i].ch1==true&&array[i].ch2==true){test+=`
  <div id="card" class="col-11 col-lg-5 m-2 ms-5 me-5 position-relative">
      <i id="s1" class=" fa-solid fa-star" style="color: rgb(138, 30, 30);"></i>
    <i id="h1" class=" fa-solid fa-heart-pulse" style="color: rgb(117, 76, 76);"></i>
  <header class="d-flex align-items-center">
<div id="imge"><img src="${array[i].img}"></div>
<div class="ms-3">
    <h2 id="fnam">${array[i].nam}</h2>
    <div class="d-flex align-items-center"><div class="me-2 icons1"><i class="fa-solid fa-phone" style="color:#155DFC;"></i></div> <p id="num" class="mb-0">${array[i].phone}</p></div>
</div>
</header>

<div class="mt-3 d-flex align-items-center"><div class="me-2 icons2"><i class="fa-solid fa-envelope" style="color: #b4acbf"></i></div><p id="email1" class="mb-0">${array[i].email}</p></div>
<div class="mt-2 d-flex align-items-center"><div class="me-2 icons3"><i class="fa-solid fa-location-dot" style="color:#009966"></i></div><p id="location" class="mb-0">${array[i].address}</p></div>

<div class="d-flex align-items-center mt-1"><p class="mb-0 work" id="work">${array[i].select}</p><div id="emerg" class="d-flex align-items-center ms-3"><i class="fa-solid fa-heart-pulse" style="color:#FF2056;"></i> <p class="mb-0 ms-1">Emergency</p></div></div>


<div class="footer d-flex align-items-center justify-content-between mt-2">
    <div class="d-flex align-items-center justify-content-between">
    <a class="a1" href="tel:${array[i].phone}"><i class="fa-solid fa-phone" style="color: #009966;"></i></a>
    <a class="a2" href="mailto:${array[i].email}"><i class="fa-solid fa-envelope" style="color: #7F22FE;"></i></a>
    </div>
 
    <div class="d-flex align-items-center justify-content-between">
        <i1 class="i1 me-3 " onclick=change2(${i})><i class="fa-solid fa-star" style="color: #FFB900;"></i></i1>
        <i1 class="i2 me-3" onclick=change(${i}) ><i class="fa-solid fa-heart-pulse" style="color:#FF2056;"></i></i1>
        <i1 onclick=update(${i}) class="i3 me-3"><i class="fa-solid fa-pen" style="color: #6A7282"></i></i1>
        <i1 onclick=del(${i}) class="i4"><i class="fa-solid fa-trash" style="color: #6A7282;"></i></i1>
    </div>

</div>

</div>`} 
else if(array[i].ch2==true&&array[i].ch1==false){  test+=`
 
  <div id="card" class="col-11 col-lg-5 m-2 ms-5 me-5 position-relative">
 
 <i id="h1" class=" fa-solid fa-heart-pulse" style="color: rgb(117, 76, 76);"></i>
   
   <header class="d-flex align-items-center">
<div id="imge"><img src="${array[i].img}"></div>
<div class="ms-3">
    <h2 id="fnam">${array[i].nam}</h2>
    <div class="d-flex align-items-center"><div class="me-2 icons1"><i class="fa-solid fa-phone" style="color:#155DFC;"></i></div> <p id="num" class="mb-0">${array[i].phone}</p></div>
</div>
</header>

<div class="mt-3 d-flex align-items-center"><div class="me-2 icons2"><i class="fa-solid fa-envelope" style="color: #9B54FE"></i></div><p id="email1" class="mb-0">${array[i].email}</p></div>
<div class="mt-2 d-flex align-items-center"><div class="me-2 icons3"><i class="fa-solid fa-location-dot" style="color:#009966"></i></div><p id="location" class="mb-0">${array[i].address}</p></div>

<div class="d-flex align-items-center mt-1"><p class="mb-0 work" id="work">${array[i].select}</p><div id="emerg" class="d-flex align-items-center ms-3"><i class="fa-solid fa-heart-pulse" style="color:#FF2056;"></i> <p class="mb-0 ms-1">Emergency</p></div></div>


<div class="footer d-flex align-items-center justify-content-between mt-2">
    <div class="d-flex align-items-center justify-content-between">
    <a class="a1" href="tel:${array[i].phone}"><i class="fa-solid fa-phone" style="color: #009966;"></i></a>
    <a class="a2" href="mailto:${array[i].email}"><i class="fa-solid fa-envelope" style="color: #7F22FE;"></i></a>
    </div>
 
    <div class="d-flex align-items-center justify-content-between">
        <i1 class="i1 me-3" onclick=change2(${i})><i class="fa-solid fa-star" style="color: #FFB900;"></i></i1>
        <i1 class="i2 me-3"  onclick=change(${i})><i   class="fa-solid fa-heart-pulse" style="color:#FF2056;"></i></i1>
        <i1 onclick=update(${i}) class="i3 me-3"><i class="fa-solid fa-pen" style="color: #6A7282"></i></i1>
        <i1 onclick=del(${i}) class="i4"><i class="fa-solid fa-trash" style="color: #6A7282;"></i></i1>
    </div>

</div>

</div>`} 
else if(array[i].ch1==true&&array[i].ch2==false){test+=`
<div id="card" class="col-11 col-lg-5 m-2 ms-5 me-5 position-relative">
<i id="s1" class=" fa-solid fa-star" style="color: rgb(138, 30, 30);"></i>
<header class="d-flex align-items-center">
<div id="imge"><img src="${array[i].img}"></div>
<div class="ms-3">
    <h2 id="fnam">${array[i].nam}</h2>
    <div class="d-flex align-items-center"><div class="me-2 icons1"><i class="fa-solid fa-phone" style="color:#155DFC;"></i></div> <p id="num" class="mb-0">${array[i].phone}</p></div>
</div>
</header>

<div class="mt-3 d-flex align-items-center"><div class="me-2 icons2"><i class="fa-solid fa-envelope" style="color: #9B54FE"></i></div><p id="email1" class="mb-0">${array[i].email}</p></div>
<div class="mt-2 d-flex align-items-center"><div class="me-2 icons3"><i class="fa-solid fa-location-dot" style="color:#009966"></i></div><p id="location" class="mb-0">${array[i].address}</p></div>

<div class="d-flex align-items-center mt-1"><p class="mb-0 work" id="work">${array[i].select}</p><div id="emerg" class="d-none align-items-center ms-3"><i class="fa-solid fa-heart-pulse" style="color:#FF2056;"></i> <p class="mb-0 ms-1">Emergency</p></div></div>


<div class="footer d-flex align-items-center justify-content-between mt-2">
    <div class="d-flex align-items-center justify-content-between">
  <a class="a1" href="tel:${array[i].phone}"><i class="fa-solid fa-phone" style="color: #009966;"></i></a>
    <a class="a2" href="mailto:${array[i].email}"><i class="fa-solid fa-envelope" style="color: #7F22FE;"></i></a>
    </div>
 
    <div class="d-flex align-items-center justify-content-between">
        <i1 class="i1 me-3" onclick=change2(${i})><i class="fa-solid fa-star" style="color: #FFB900;"></i></i1>
        <i1 class="i2 me-3"  onclick=change(${i})><i   class="fa-solid fa-heart-pulse" style="color:#FF2056;"></i></i1>
        <i1 onclick=update(${i}) class="i3 me-3"><i class="fa-solid fa-pen" style="color: #6A7282"></i></i1>
        <i1 onclick=del(${i}) class="i4"><i class="fa-solid fa-trash" style="color: #6A7282;"></i></i1>
    </div>

</div>

</div>`}else if(array[i].ch1==false&&array[i].ch2==true){test+=`
<div id="card" class="col-11 col-lg-5 m-2 ms-5 me-5 position-relative">
<i id="h1" class=" fa-solid fa-heart-pulse" style="color: rgb(117, 76, 76);"></i>
  
<header class="d-flex align-items-center">
<div id="imge"><img src="${array[i].img}"></div>
<div class="ms-3">
    <h2 id="fnam">${array[i].nam}</h2>
    <div class="d-flex align-items-center"><div class="me-2 icons1"><i class="fa-solid fa-phone" style="color:#155DFC;"></i></div> <p id="num" class="mb-0">${array[i].phone}</p></div>
</div>
</header>

<div class="mt-3 d-flex align-items-center"><div class="me-2 icons2"><i class="fa-solid fa-envelope" style="color: #9B54FE"></i></div><p id="email1" class="mb-0">${array[i].email}</p></div>
<div class="mt-2 d-flex align-items-center"><div class="me-2 icons3"><i class="fa-solid fa-location-dot" style="color:#009966"></i></div><p id="location" class="mb-0">${array[i].address}</p></div>

<div class="d-flex align-items-center mt-1"><p class="mb-0 work" id="work">${array[i].select}</p><div id="emerg" class="d-flex align-items-center ms-3"><i class="fa-solid fa-heart-pulse" style="color:#FF2056;"></i> <p class="mb-0 ms-1">Emergency</p></div></div>


<div class="footer d-flex align-items-center justify-content-between mt-2">
    <div class="d-flex align-items-center justify-content-between">
  <a class="a1" href="tel:${array[i].phone}"><i class="fa-solid fa-phone" style="color: #009966;"></i></a>
    <a class="a2" href="mailto:${array[i].email}"><i class="fa-solid fa-envelope" style="color: #7F22FE;"></i></a>
    </div>
 
    <div class="d-flex align-items-center justify-content-between">
        <i1 class="i1 me-3" onclick=change2(${i})><i class="fa-solid fa-star" style="color: #FFB900;"></i></i1>
        <i1 class="i2 me-3"  onclick=change(${i})><i   class="fa-solid fa-heart-pulse" style="color:#FF2056;"></i></i1>
        <i1 onclick=update(${i}) class="i3 me-3"><i class="fa-solid fa-pen" style="color: #6A7282"></i></i1>
        <i1 onclick=del(${i}) class="i4"><i class="fa-solid fa-trash" style="color: #6A7282;"></i></i1>
    </div>

</div>

</div>`}else if(array[i].ch1==false&&array[i].ch2==false){test+=`
<div id="card" class="col-11 col-lg-5 m-2 ms-5 me-5 position-relative">

<header class="d-flex align-items-center">
<div id="imge"><img src="${array[i].img}"></div>
<div class="ms-3">
    <h2 id="fnam">${array[i].nam}</h2>
    <div class="d-flex align-items-center"><div class="me-2 icons1"><i class="fa-solid fa-phone" style="color:#155DFC;"></i></div> <p id="num" class="mb-0">${array[i].phone}</p></div>
</div>
</header>

<div class="mt-3 d-flex align-items-center"><div class="me-2 icons2"><i class="fa-solid fa-envelope" style="color: #9B54FE"></i></div><p id="email1" class="mb-0">${array[i].email}</p></div>
<div class="mt-2 d-flex align-items-center"><div class="me-2 icons3"><i class="fa-solid fa-location-dot" style="color:#009966"></i></div><p id="location" class="mb-0">${array[i].address}</p></div>

<div class="d-flex align-items-center mt-1"><p class="mb-0 work" id="work">${array[i].select}</p><div id="emerg" class="d-none align-items-center ms-3"><i class="fa-solid fa-heart-pulse" style="color:#FF2056;"></i> <p class="mb-0 ms-1">Emergency</p></div></div>


<div class="footer d-flex align-items-center justify-content-between mt-2">
    <div class="d-flex align-items-center justify-content-between">
  <a class="a1" href="tel:${array[i].phone}"><i class="fa-solid fa-phone" style="color: #009966;"></i></a>
    <a class="a2" href="mailto:${array[i].email}"><i class="fa-solid fa-envelope" style="color: #7F22FE;"></i></a>
    </div>
 
    <div class="d-flex align-items-center justify-content-between">
        <i1 class="i1 me-3" onclick=change2(${i})><i class="fa-solid fa-star" style="color: #FFB900;"></i></i1>
        <i1 class="i2 me-3"  onclick=change(${i})><i   class="fa-solid fa-heart-pulse" style="color:#FF2056;"></i></i1>
        <i1 onclick=update(${i}) class="i3 me-3"><i class="fa-solid fa-pen" style="color: #6A7282"></i></i1>
        <i1 onclick=del(${i}) class="i4"><i class="fa-solid fa-trash" style="color: #6A7282;"></i></i1>
    </div>

</div>

</div>`} else{
  
test += `
  <div id="card" class="col-11 col-lg-5 m-2 ms-5 me-5 position-relative">
    <header class="d-flex align-items-center">
<div id="imge"><img src="${array[i].img}"></div>
<div class="ms-3">
    <h2 id="fnam">${array[i].nam}</h2>
    <div class="d-flex align-items-center"><div class="me-2 icons1"><i class="fa-solid fa-phone" style="color:#155DFC;"></i></div> <p id="num" class="mb-0">${array[i].phone}</p></div>
</div>
</header>

<div class="mt-3 d-flex align-i]tems-center"><div class="me-2 icons2"><i class="fa-solid fa-envelope" style="color: #9B54FE"></i></div><p id="email1" class="mb-0">${array[i].email}</p></div>
<div class="mt-2 d-flex align-items-center"><div class="me-2 icons3"><i class="fa-solid fa-location-dot" style="color:#009966"></i></div><p id="location" class="mb-0">${array[i].address}</p></div>

<div class="d-flex align-items-center mt-1"><p class="mb-0 work" id="work">${array[i].select}</p><div id="emerg" class="d-flex align-items-center ms-3"><i class="fa-solid fa-heart-pulse" style="color:#FF2056;"></i> <p class="mb-0 ms-1">Emergency</p></div></div>


<div class="footer d-flex align-items-center justify-content-between mt-2">
    <div class="d-flex align-items-center justify-content-between">
   <a class="a1" href="tel:${array[i].phone}"><i class="fa-solid fa-phone" style="color: #009966;"></i></a>
    <a class="a2" href="mailto:${array[i].email}"><i class="fa-solid fa-envelope" style="color: #7F22FE;"></i></a>
    </div>
 
    <div class="d-flex align-items-center justify-content-between">
        <i1 class="i1 me-3" onclick=change2(${i})><i class="fa-solid fa-star" style="color: #FFB900;"></i></i1>
        <i1 class="i2 me-3"  onclick=change(${i})><i   class="fa-solid fa-heart-pulse" style="color:#FF2056;"></i></i1>
        <i1 onclick=update(${i}) class="i3 me-3"><i class="fa-solid fa-pen" style="color: #6A7282"></i></i1>
        <i1 onclick=del(${i}) class="i4" ><i class="fa-solid fa-trash" style="color: #6A7282;"></i></i1>
    </div>

</div>

</div>
  
  `}
  
  }

  cont2.innerHTML = test;
body2.innerHTML=test2;
body3.innerHTML=test3;
show()
func()
 log()


}

// ====================================================
// ====================================================
search.oninput=function(){
let test=""
for(i=0;i<array.length;i++){
  if(array[i].nam.includes(search.value)){
test += `
  <div id="card" class="col-11 col-lg-5 m-2 ms-5 me-5 position-relative">
    <header class="d-flex align-items-center">
<div id="imge">${array[i].nam[0]}</div>
<div class="ms-3">
    <h2 id="fnam">${array[i].nam}</h2>
    <div class="d-flex align-items-center"><div class="me-2 icons1"><i class="fa-solid fa-phone" style="color:#155DFC;"></i></div> <p id="num" class="mb-0">${array[i].phone}</p></div>
</div>
</header>

<div class="mt-3 d-flex align-i]tems-center"><div class="me-2 icons2"><i class="fa-solid fa-envelope" style="color: #9B54FE"></i></div><p id="email1" class="mb-0">${array[i].email}</p></div>
<div class="mt-2 d-flex align-items-center"><div class="me-2 icons3"><i class="fa-solid fa-location-dot" style="color:#009966"></i></div><p id="location" class="mb-0">${array[i].address}</p></div>

<div class="d-flex align-items-center mt-1"><p class="mb-0 work" id="work">${array[i].select}</p><div id="emerg" class="d-flex align-items-center ms-3"><i class="fa-solid fa-heart-pulse" style="color:#FF2056;"></i> <p class="mb-0 ms-1">Emergency</p></div></div>


<div class="footer d-flex align-items-center justify-content-between mt-2">
    <div class="d-flex align-items-center justify-content-between">
   <a class="a1" href="tel:${array[i].phone}"><i class="fa-solid fa-phone" style="color: #009966;"></i></a>
    <a class="a2" href="mailto:${array[i].email}"><i class="fa-solid fa-envelope" style="color: #7F22FE;"></i></a>
    </div>
 
    <div class="d-flex align-items-center justify-content-between">
        <i1 class="i1 me-3" onclick=change2(${i})><i class="fa-solid fa-star" style="color: #FFB900;"></i></i1>
        <i1 class="i2 me-3"  onclick=change(${i})><i   class="fa-solid fa-heart-pulse" style="color:#FF2056;"></i></i1>
        <i1 onclick=update(${i}) class="i3 me-3"><i class="fa-solid fa-pen" style="color: #6A7282"></i></i1>
        <i1 onclick=del(${i}) class="i4" ><i class="fa-solid fa-trash" style="color: #6A7282;"></i></i1>
    </div>

</div>

</div>`





  }
  cont2.innerHTML=test
  
}

}




function del(i) {
  Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
 
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
 
  if (result.isConfirmed) {

      Swal.fire({
    
    title: "Deleted!",
    text: "Your file has been deleted.",
    icon: "success",
    timer:"2000",
     showConfirmButton:false,
  });
   array.splice(i, 1)
  localStorage.setItem('user', JSON.stringify(array))
  showdata()
}
  
});

 
}
var ii;
function update(i) {
  cont.classList.add('d-block')
  ii = i;
  nam.value = array[i].nam;
  phone.value = array[i].phone;
  email.value = array[i].email;
  address.value = array[i].address;
  notes.value = array[i].notes;
  select.value = array[i].select;


  localStorage.setItem('user', JSON.stringify(array))
  showdata()

}
function set(ii) {
  var obj = {
    nam: nam.value,
    phone: phone.value,
    email: email.value,
    notes: notes.value,
    address: address.value,
    select: select.value,
    ch1: ch1.value,
    ch2: ch2.value,
  }
  array.splice(ii, 1, obj)
}





// ===============conditions==================
function func(){
var icons1 = document.getElementsByClassName('icons1')
var work = document.getElementsByClassName('work')
var a2 = document.getElementsByClassName('a2')
for (i = 0; i < array.length; i++) {
  if (array[i].email == "") {
    a2[i].classList.add('d-none')
  }
}

for (i = 0; i < array.length; i++) {
  if (array[i].phone == "") {
    icons1[i].classList.add('d-none')
  }
}
var icons2 = document.getElementsByClassName('icons2')
for (i = 0; i < array.length; i++) {
  if (array[i].email == "") {
    icons2[i].classList.add('d-none')
  }
}
var icons3 = document.getElementsByClassName('icons3')
for (i = 0; i < array.length; i++) {
  if (array[i].address == "") {
    icons3[i].classList.add('d-none')
  }
  if (array[i].select == "Select a group") { work[i].classList.add('d-none') }
}

}


// ==============favouret && emergence===========================
function log(){
if(array.length==0){
cont2.classList.add('d-none')
logo.classList.remove('d-none')
}else{
  cont2.classList.remove('d-none')
  logo.classList.add('d-none')
}
}



// function ff(){ 
//    var fav=[];
//   for(i=0;i<array.length;i++){
//  if(array[i].ch1){
//   fav.push(array[i])}
   
// }




//   for(i=0;i<fav.length;i++){
//    let card=document.createElement("div")
//     let h2=document.createElement("h2")
//     h2.classList.add('hh')
//     h2.append(fav[i].nam[0])

//     let nam=document.createElement('h4')
//     nam.append(fav[i].nam)
//     nam.classList.add('nam','mt-2','mb-0')
    
//     let num=document.createElement('h4')
//     num.append(fav[i].phone)
//      num.classList.add('num')
//  let div=document.createElement('div')
// div.append(nam,num)
    
// let div2=document.createElement('div')
//   let div3=document.createElement('div')
// let icon=document.createElement('a')
// icon.setAttribute("href","tel:array[i].phone")
// icon.setAttribute("class","fa-solid fa-phone")
// icon.classList.add('icon')
// icon.setAttribute("href",`tel:${fav[i].phone}`)
// card.classList.add('class')
// card.classList.add('col-12','col-lg-5')
//     div2.append(h2,div)
//     div2.classList.add('d-flex','align-items-center')
//      div3.append(icon)
//      card.append(div2,div3)
   
//     body.append(card)
//   }

// }






// function ee(){


// var emer=[];
//   for(i=0;i<array.length;i++){
// if(array[i].ch2){
//   emer.push(array[i])
   
// }

// }


//   for(i=0;i<emer.length;i++){
//    let card=document.createElement("div")
//     let h2=document.createElement("h2")
//     h2.classList.add('hh')
//     h2.append(emer[i].nam[0])

//     let nam=document.createElement('h4')
//     nam.append(emer[i].nam)
//     nam.classList.add('nam','mt-2','mb-0')
    
//     let num=document.createElement('h4')
//     num.append(emer[i].phone)
//      num.classList.add('num')
//  let div=document.createElement('div')
// div.append(nam,num)
    
// let div2=document.createElement('div')
//   let div3=document.createElement('div')
// let icon=document.createElement('a')
// icon.setAttribute("class","fa-solid fa-phone")
// icon.setAttribute("href",`tel:${emer[i].phone}`)
// icon.classList.add('icon2')
// card.classList.add('class')
// card.classList.add('col-12','col-lg-5')
//     div2.append(h2,div)
//     div2.classList.add('d-flex','align-items-center')
//      div3.append(icon)
//      card.append(div2,div3)
//     body2.append(card)
    
//   }

// }






// =====================
// nam.oninput=function valid(){
// var regex=/^[a-z]{4}[1-9]{3}$/
// if(regex.test(nam.value)){
// nam.classList.add("is-valid")
// nam.classList.remove("is-invalid")
// nam.classList.add("form-control")
// }
// else{
//   nam.classList.remove("is-valid")
//   nam.classList.add("is-invalid")
//   nam.classList.add("form-control")
// }
// }
