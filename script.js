function years(AgeFather, AgeSon) {

    let yearsAgo = AgeFather - (AgeSon * 2);

    return yearsAgo;
}

let AgeFather = 52;
let AgeSon = 19;


const result = years(AgeFather, AgeSon);
console.log( result );

