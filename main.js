function AddPlayer(){

    Player1 = document.getElementById("Player1Name").value;

    Player2 = document.getElementById("Player2Name").value;

    localStorage.setItem("Player1",Player1);

    localStorage.setItem("Player2",Player2);

    window.location = "index2.html";

}

function AddPlayers(){

    document.getElementById("Player1Name").innerHTML = localStorage.getItem("Player1") + " : ";

    document.getElementById("Player2Name").innerHTML = localStorage.getItem("Player2") + " : ";

}

function Send() {

    Number1 = document.getElementById("Number1").value;

    Number2 = document.getElementById("Number2").value;

    RealAnswer = parseInt(Number1)*parseInt(Number2);

    questionNumber = "<h4>" + Number1 + " X " + Number2 + " </h4>"

    inputBox = " <br> Answer : <input type='text' id='InputBox' > "

    CheckButton = " <br> <br> <button class ='btn btn-info' onclick='Check()'> Check </button>"

    row = questionNumber + inputBox + CheckButton;

    document.getElementById("Input").innerHTML = row;

    document.getElementById("Player2Name").value = "";

    document.getElementById("Player1Name").value = "";
    
}