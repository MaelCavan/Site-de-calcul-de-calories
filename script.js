function calculate() {
        document.getElementById("resultimc").innerHTML = "Votre IMC est : <span id='imcValue'></span>";
        document.getElementById("resultnap").innerHTML = "Votre NAP (niveau d'activité physique) est : <span id='napValue'></span>";

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
    document.getElementById("imcValue").innerText = imc.toFixed(1);
    document.getElementById("mbValue").innerText = MB.toFixed(0);
    document.getElementById("napValue").innerText = NAP.toFixed(2);
    document.getElementById("calValue").innerText = cal.toFixed(0);

    // Afficher le résultat
     var resultElementimc = document.getElementById("resultimc");
    var resultElementmb = document.getElementById("resultmb");
    var resultElementnap = document.getElementById("resultnap");
    var resultElementcal = document.getElementById("resultcal");

     resultElementimc.style.display = "block";
                if (imc < 18.5) {
                    resultElementimc.innerHTML += "<br> Vous êtes en maigreur";
                } else if (NAP < 1.59) {
			if (imc > 30) {
                    	resultElementimc.innerHTML += "<br> Vous êtes en obesite";
			}  else if (imc > 25) {
                    resultElementimc.innerHTML += "<br> Vous êtes en surpoids";
                }}

    resultElementmb.style.display = "block";
                if (NAP < 1.39) {
                    resultElementnap.innerHTML += "<br> Vous êtes sédentaire";
                } else if (NAP < 1.59) {
                    resultElementnap.innerHTML += "<br> Vous êtes peu actif";
                } else if (NAP < 1.89) {
                    resultElementnap.innerHTML += "<br> Vous êtes actif";
                } else {
                    resultElementnap.innerHTML += "<br> Vous êtes très actif";
                }
    resultElementnap.style.display = "block";

    resultElementcal.style.display = "block";
     if (NAP<1.59) {
    protmin=0.8*weight
    protmax=1.2*weight
    } else {
    protmin=1.2*weight
    protmax=1.6*weight
    }
    document.getElementById("protValuemin").innerText = protmin.toFixed(0);
    var resultElementprotmin = document.getElementById("resultprot");
    resultElementprotmin.style.display = "block";
    document.getElementById("protValuemax").innerText = protmax.toFixed(0);
    var resultElementprotmax = document.getElementById("resultprot");
    resultElementprotmax.style.display = "block";

    glucidemin=0.5*cal/4
    glucidemax=0.6*cal/4
    document.getElementById("glucideValuemax").innerText = glucidemax.toFixed(0);
    var resultElementglucidemax = document.getElementById("resultglucide");
    resultElementglucidemax.style.display = "block";
    document.getElementById("glucideValuemin").innerText = glucidemin.toFixed(0);
    var resultElementglucidemin = document.getElementById("resultglucide");
    resultElementglucidemin.style.display = "block";

    lipidemin=0.4*cal/9
    lipidemax=0.5*cal/9
    document.getElementById("lipideValuemax").innerText = lipidemax.toFixed(0);
    var resultElementlipidemax = document.getElementById("resultlipide");
    resultElementlipidemax.style.display = "block";
    document.getElementById("lipideValuemin").innerText = lipidemin.toFixed(0);
    var resultElementlipidemin = document.getElementById("resultlipide");
    resultElementlipidemin.style.display = "block";
}
