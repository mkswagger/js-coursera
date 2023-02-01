newFunction();

function newFunction() {
    var cubes = 'ABCDEFG';
    for (var i = 0; i < cubes.length; i++) {
        var styles = "font-size:40 px;border-radius :10px ; border :1 px solid blue; background: blue; color:purple;";
        console.log("%c" + cubes[i], styles);
    }
}
/*
*
*
*/