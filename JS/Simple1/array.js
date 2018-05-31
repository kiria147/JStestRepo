function zodzioApvertimas(a) {

    let b = "";
    for (let i = a.length - 1; i >= 0; i--) {
        b += a[i];

    }
    return b;
}

let zodis = prompt("Iveskite zodi kuri apversime", zodis);
zodzioApvertimas(zodis);