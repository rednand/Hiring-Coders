var colors = ["black", "white", "yellow", "green", "blue"];

for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

for (var i = 0; i < 10; i++) {
    console.log(i);
}

var x = 0;
while (x < 10) { //execua depois da verificação
    console.log(x);
    x++;
}

var y = 1;

do { //executa antes da verificação
    console.log(y);
    y++;
} while (y < 10);