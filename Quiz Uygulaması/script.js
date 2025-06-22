
//JSON uzantılı dosyadan veriler alınır ve json formatına çevirilir.
let quiztdata = [];
let currentIndex = 0;

fetch("questions.json")
  .then(response => response.json())
  .then(data => {
    quiztdata = data;
    showQuestion(currentIndex);

    document.getElementById("next-btn").addEventListener("click", () => {
      currentIndex++;
      if (currentIndex >= quiztdata.length) {
        alert("Quiz bitti!");
        currentIndex = 0; // Baştan başlatabiliriz
      }
      showQuestion(currentIndex);
    });

  });


  function showQuestion (index){
    const firstquiz= quiztdata[index];
    document.getElementById("question").innerHTML=firstquiz.question;
    

    //Soru seçenekleri için
    const options =document.getElementById("options");
    options.innerHTML = "";

    firstquiz.options.forEach((option,i) => {
        const button = document.createElement("button");
        button.innerHTML=option;

        options.appendChild(button);


    button.addEventListener("click",()=>{
        if(i=== firstquiz.correct){
            alert("Doğru cevap :) ");
        } else  {
            alert( "Yanlış Cevap :( ")
        }

        })
        
    });


  }