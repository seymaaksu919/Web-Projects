async function kullanıcıBilgileriGetir() {
    try {
        
        const response=await fetch("https://randomuser.me/api");
        const data = await response.json();
        const user = data.results[0]; // Gelen veriden kullanıcıyı al
    
        const ad = `${user.name.first} ${user.name.last}`;
        const email = user.email;
        const resimURL = user.picture.large;
       

        document.getElementById("user-card").innerHTML = `
          <h2>${ad}</h2>
          <p><strong>E-mail:</strong> ${email}</p>
          <img src="${resimURL}" alt="Profil Fotoğrafı" />
        `;
    
    }

    catch(error){
    console.log("Hata Oluştu !" , error);
    document.getElementById("user-card").innerHTML = `<p style="color:red;">Bir hata oluştu.</p>`;
    }   

}