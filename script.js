function calculate() {
    // Récupérer les valeurs du poids et de la taille
    var year = document.getElementById("year").value;
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var NAP1 = document.getElementById("NAP1").value;
    var NAP2 = document.getElementById("NAP2").value;
    var NAP3 = document.getElementById("NAP3").value;
    var NAP4 = document.getElementById("NAP4").value;
    var NAP5 = document.getElementById("NAP5").value;
    var NAP6 = document.getElementById("NAP6").value;

    // Vérifier si les champs sont vides
    if (weight === "" || height === "" || year === ""|| NAP1 === ""|| NAP2 === ""|| NAP3 === ""|| NAP4 === ""|| NAP5 === ""|| NAP6 === "") {
        alert("Veuillez remplir tous les champs.");
        return;
    }
    //if (NAP1+NAP2+NAP3+NAP4+NAP5+NAP6 != 24) {
     //   alert("Vous avez 24h dans une journee !");
      //  return;
    //}
    // Calculer
    var MB;
    if (gender === "male"){
	MB=88.362+13.397*weight+4.799*height-5.677*year;
    } else if (gender === "female"){
	MB=447.593+9.247*weight+3.098*height-4.330*year;
    }
    var imc = weight / (height * height)*100*100;
    var NAP = (1*NAP1+1.5*NAP2+2.2*NAP3+3*NAP4+3.5*NAP5+5*NAP6)/24;
    var cal=NAP*MB

    // Afficher
    document.getElementById("imcValue").innerText = imc.toFixed(2);
    document.getElementById("mbValue").innerText = MB.toFixed(2);
    document.getElementById("napValue").innerText = NAP.toFixed(2);
    document.getElementById("calValue").innerText = cal.toFixed(2);

    // Afficher le résultat
     var resultElementimc = document.getElementById("resultimc");
     resultElementimc.style.display = "block";

    var resultElementmb = document.getElementById("resultmb");
    resultElementmb.style.display = "block";

    var resultElementnap = document.getElementById("resultnap");
    resultElementnap.style.display = "block";

    var resultElementcal = document.getElementById("resultcal");
    resultElementcal.style.display = "block";
}