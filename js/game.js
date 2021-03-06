var min = 0;
var max = 2020;
var xmin = 0;
var xmax = 6;
var intentos = 0;
var año;
var win = false;

// Vector con respuestas
const game = [1969, 1991, 1973, 1975, 2016, 2013]

// Genera un nro aleatorio entre 1-5 (tamaño del vector) y lo asigna al valor x cada vez que se ejecuta el script
var x = Math.floor(Math.random() * (xmax - xmin) + xmin)

// Dependiendo del valor asignado a x, se muestra una determinada imágen y titulo relacionado con la respuesta
switch (x) {
    case 0:
        document.getElementById('album-cover').src='img/abbeyroad.jpg';
        document.getElementById('title').innerHTML = "The Beatles - Abbey Road";
        break;
    case 1:
        document.getElementById('album-cover').src='img/nirvana.jpg';
        document.getElementById('title').innerHTML = "Nirvana - Nevermind";
        break;
    case 2:
        document.getElementById('album-cover').src='img/pink floyd.jpg';
        document.getElementById('title').innerHTML = "Pink Floyd - The Dark Side of the Moon";
        break;
    case 3:
        document.getElementById('album-cover').src='img/queen.jpg';
        document.getElementById('title').innerHTML = "Queen - A Night at the Opera";
        break;
    case 4:
        document.getElementById('album-cover').src='img/anti.jpg';
        document.getElementById('title').innerHTML = "Rihanna - Anti";
        break;
    case 5:
        document.getElementById('album-cover').src='img/ram.jpg';
        document.getElementById('title').innerHTML = "Daft Punk - Random Acces Memories";
        break;
    default:
        break;
}


// Recarga la página
function restartGame(){
    location.reload();
    return false;
}

function guessGame(){
    año = document.getElementById('txtAño').value;
    if(intentos < 4){
        if(año >= min && año <= max && año != ""){
            if(año == game[x]){
                win = true;
            }
            else{
                swal('Oops...','Wrong answer.');
                if(intentos === 1){
                    if(año < game[x]){
                        swal('Clue','The number is higher.');
                    }
                    else if (año > game[x]){
                        swal('Clue','The number is lower.');
                    }
                }
                else if (intentos === 2){
                    switch (game[x]) {
                        case 1969:
                            swal('Clue','Apollo 11...');
                            break;
                        case 1991:
                            swal('Clue','Disolution of the USSR...');
                            break;
                        case 1973:
                            swal('Clue','The death of Pablo Picasso...');
                            break;
                        case 1975:
                            swal('Clue','45 + 40 * 50 - 70');
                            break;
                        case 2016:
                            swal('Clue','Donald Trump becomes president of the United States...');
                            break;
                        case 2013:
                            swal('Clue','The year Breaking Bad ended');
                            break;
                        default:
                            break;
                    }
                }
            }
            intentos++;
            document.getElementById('attempts').innerHTML = "Attempts: " + intentos +"/4";
        }
        else{
            swal('Enter a valid number');
        }
    }

    if(win == true){
        swal('Congratulations!', 'You won.', 'success');
        document.getElementById('txtAño').disabled = true;
        document.getElementById('submit').disabled = true;
    }

    if (win == false && intentos == 4){
        swal('Game Over :(');
        document.getElementById('txtAño').disabled = true;
        document.getElementById('submit').disabled = true;
    }
}

