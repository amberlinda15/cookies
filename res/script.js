$('input').focus(function(){
    $(this).parents('.input_cont').addClass('filled');
});
   
$('input').blur(function(){
    var inputValue = $(this).val();
    if ( inputValue == "" ) {
      $(this).parents('.input_cont').removeClass('filled');  
    } else {
      $(this).addClass('filled');
    }
  })  

  document.getElementById("your-name").addEventListener("keypress",function(event){
    const keys = /[0-9]/;
    const label = event.target.parentNode.children[2];
    console.log(label)
    if(event.key.match(keys)){
      label.classList.remove("hide")
      label.innerText = "no digits allowed"
      event.preventDefault()
    }else{
      label.classList.add("hide")
    }
  })

  document.getElementById("last-name").addEventListener("keypress",function(event){
    const keys = /[0-9]/;
    const label = event.target.parentNode.children[2];
    console.log(label)
    if(event.key.match(keys)){
      label.classList.remove("hide")
      label.innerText = "no digits allowed"
      event.preventDefault()
    }else{
      label.classList.add("hide")
    }
  })


  document.getElementById("phonenumber").addEventListener("keypress",function(event){
    const regex = /[a-zA-Z]/;
    const regex2 = /^[0-9]{10}$/;
    const label = event.target.parentNode.children[2];
    if(event.key.match(regex) || event.target.value.match(regex2)){
      if(event.key.match(regex)){
        label.classList.remove("hide")
        label.innerText = "no alphabets allowed"
      }
      event.preventDefault()
    }else if(!event.key.match(regex)){
      label.classList.add("hide")
    }
  })

  const emailValidation = value => {
    if(!value || value == null){return false}
    const label = document.getElementById("email_error")
    const regex = /[a-zA-Z0-9]@christuniversity.in/;
    if(regex.test(value)){
      label.classList.add("hide")
      return true
    }else{    
      label.classList.remove("hide")
      label.innerText = "Invalid email address"
      return false
    }
  }

  const passwordValidator = value => {
    if(!value || value == null){return false}
    const label = document.getElementById("password_error")
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?]).+$/
    if(regex.test(value)){
      label.classList.add("hide")
      return true
    }else{    
      label.classList.remove("hide")
      label.innerText = "Invalid password"
      alert("PASSWORD VALIDATION\n\n-A minimum of 1 lower case letter\n-A minimum of 1 upper case letter\n-A minimum of 1 numeric character\n-1 special character")
      return false
    }
  }

  const gendervalidationHandler = value => {
    if(!value || value == null){return false}
    const label = document.getElementById("gender_error")
    const regex = /(male|female)/
    if(regex.test(value)){
      label.classList.add("hide")
      return true
    }else{    
      label.classList.remove("hide")
      label.innerText = "enter male or female"
      return false
    }
  }

  const phoneNumValidator = value => {
    if(!value || value == null){return false}
    const label = document.getElementById("phonenumber_error")
    const regex = /[0-9]{10}/
    if(regex.test(value)){
      label.classList.add("hide")
      return true
    }else{    
      label.classList.remove("hide")
      label.innerText = "length should be 10"
      return false
    }
  }

  const validateFormHandler = () => {
    event.preventDefault();
    let email,password,gender,phone;
    email=password=gender=phone=false
    const form = document.getElementById("add_member_form")
    for(let i=0;i<form.elements.length;i++){
      if(form.elements[i].name == "email"){
        email = emailValidation(form.elements[i].value)
        localStorage.setItem("email",form.elements[i].value)
      }else if(form.elements[i].name == "password"){
        password = passwordValidator(form.elements[i].value)
      }else if(form.elements[i].name == "gender"){
        gender = gendervalidationHandler(form.elements[i].value)
        localStorage.setItem("gender",form.elements[i].value)
      }else if(form.elements[i].name == "phonenumber"){
        phone = phoneNumValidator(form.elements[i].value)
        sessionStorage.setItem("phonenumber",form.elements[i].value)
      }else if(form.elements[i].name == "yourname"){
        sessionStorage.setItem("first_name",form.elements[i].value)
      }
    }

    if(email && password && gender && phone){
      
      alert("Form submitted successfully")
      form.reset()
      $('input').parents('.input_cont').removeClass('filled');  
    }
  }

  const showPasswordHandler = () => {
    const field = document.getElementById("password_field")
    field.type == "text" ? field.type = "password" : field.type = "text"
  }

  function setCookie(name, value, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = `${name}=${value};${expires};path='/';`;
  }

  function getCookie(cname) {
    let name = `${cname}=`;
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  const colorChangeHandler = () => {
    setCookie("bgColor","#b958a677",2)
    const value = getCookie("bgColor")
    document.getElementById("left-cont").style.background = value;
  }

  const imgChangeHandler = () => {
    setCookie("bgImg","../res/img/bgimg.jpg",2)
    const value = getCookie("bgImg")
    document.getElementById("left-cont").style.background = `linear-gradient(90deg, rgba(76,63,145,0.5) 58%, rgba(76,63,145,0.5) 100%),url('../res/img/bgimg.jpg')`;
  }

  const clearCookieHandler = () => {
    setCookie("bgColor","",-1)
    setCookie("bgImg","",-1)
  }