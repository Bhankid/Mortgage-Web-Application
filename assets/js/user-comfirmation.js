document.getElementById("browse-file").addEventListener("change", function () {
    const file = this.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
      document.getElementById("selected-picture").src = event.target.result;
    };
    reader.readAsDataURL(file);
  });

  //funtion to redirects to a selected page
  function redirectToSelectedPage(){

    const selectedPage = document.getElementsByName("sale-type");
    for (let i = 0; i < selectedPage.length; i++) {
      if(selectedPage[i].checked){
        window.Location.href=selectedPage[i].value;
        break;
      }
      
    }
  }

  function newPage() {
    const selected=$('input[name=sale-type]:checked','#Form').val();
    if (selected =="comfirm") {
      window.open("/user-comfirmation.html","_self");
      
    } else if(selected =="comfirm-b","_self"){
      window.open("/user-comfirm-business.html");
    }else{

      alert("")
    }
    
    
  }