let aibe = prompt("Iveksite aibe", aibe);
let string = aibe;
let ieskomas = prompt("Iveskite ieskoma nari", ieskomas);
let ieskome = string.indexOf(ieskomas);

if ( ieskome !== -1 )
{
    document.write("Is ieskomos aibes " + aibe + " radome " + ieskomas + " nari", ++ieskome + " pozicijoje");
}

if ( ieskome == -1 )
{
    document.write('Ieskomo nario nera');
}
