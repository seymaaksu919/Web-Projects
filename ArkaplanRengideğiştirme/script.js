
const button = document.getElementById("applyColorBtn");

button.addEventListener("click",function(){

    const radios = document.querySelectorAll('input[name="color"]');
    let secilenrenk= null;

for (const radio of radios) {
  if (radio.checked) {
    secilenrenk = radio.value;
    break;
  }
}
    
if (secilenrenk) {

    document.body.style.backgroundColor = secilenrenk;

    }else{

    alert('Lütfen bir renk seçiniz!');  
  }
});