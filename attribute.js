
//delete this since they declare features and hash
var features = []
let chars = "abcdef1234567890";
var hash = "0x";
while (hash.length < 64) hash = hash + chars.charAt(Math.floor(Math.random() * 16));
var featuresReduced = features;

//uncomment this in final script
// hash = tokenData.hash 

var bgType;
console.log("hash:" + hash)
let type = xx(2) == 69 ? "based" : xx(2) < 200 ? "light" : "dark"

features.push("Color Mode: " + type);

console.log(xx(2))
let bgSelect = xx(3);
if (type == "light") {
    if (bgSelect < 6) {
        features.push("Background: Solid")
    }
    if (bgSelect > 5 && bgSelect < 50) {
        features.push("Background: Dots")
        // dotsbg();
    }
    if (bgSelect > 49 && bgSelect < 100) {
        features.push("Background: Grid")
        // gridbg();
    }
    if (bgSelect > 99 && bgSelect < 126) {
        bgType = "notebook"
        features.push("Background: 90's Notebook")
        // notebookbg(width);
    }
    if (bgSelect > 125 && bgSelect < 160) {
        features.push("Background: 3D Grid")
        // grid3Dbg();
    }
    if (bgSelect > 159 && bgSelect < 180) {
        features.push("Background: Horizon")
        // horizonbg();
    }
    if (bgSelect > 179 && bgSelect < 190) {
        features.push("Background: Sprinkles")
        // sprinklesbg();
    }
    if (bgSelect > 189 && bgSelect < 200) {
        features.push("Background: Sprinkles Gradient")
        // sprinklesGradientbg();
    }
    if (bgSelect > 199 && bgSelect < 226) {
        features.push("Background: Worms")
        // wormsbg();
    }
    if (bgSelect > 225) {
        features.push("Background: Fake Grid")
        // fakegridbg();
    }
}
if (type == "dark") {
    if (bgSelect < 8) {
        features.push("Background: Dots")
        // dotsbg();
    }
    if (bgSelect > 7 && bgSelect < 17) {
        features.push("Background: Solid")
        // background(00, 00, 00);
    }
    if (bgSelect > 16 && bgSelect < 26) {
        features.push("Background: Starscape")
        // starscapebg(randomOffset4, randomOffset5);
    }
    if (bgSelect > 25 && bgSelect < 100) {
        features.push("Background: Grid")
        // gridbg();
    }
    if (bgSelect > 99 && bgSelect < 126) {
        features.push("Background: 3D Grid")
        // grid3Dbg();
    }
    if (bgSelect > 125 && bgSelect < 176) {
        features.push("Background: Horizon")
        // horizonbg();
    }
    if (bgSelect > 175 && bgSelect < 227) {
        features.push("Background: 90's Notebook")
        bgType = "notebook"
        // notebookbg();
    }
    if (bgSelect > 226) {
        features.push("Background: Fake Grid")
        // fakegridbg();
    }
}
if (type == "based") {
    features.push("Background: Based Gradient")

}
let framingShape = xx(22);
if (framingShape > -1 && framingShape < 8 && bgType != "notebook") {
    features.push("Frame: 90's Notebook Ellipse")
}
if (framingShape > 7 && framingShape < 16) {
    frameShape = "ellipse";
    features.push("Frame: Ellipse")
}
if (framingShape > 15 && framingShape < 26) {
    frameShape = "square";
    features.push("Frame: Square")
}
if (framingShape > 25 && framingShape < 41) {
    frameShape = "default_triangle";
    features.push("Frame: Triangle")
}
if (framingShape > 40 && framingShape < 50) {
    frameShape = "gradient_default_triangle";
    features.push("Frame: Gradient Triangle")
}
if (framingShape > 249 && bgType == "grid") framingShape = 50;
if (framingShape > 49 && framingShape < 75) {
    frameShape = "gradient_flipped_triangle";
    features.push("Frame: Flipped Gradient Triangle")
}
if (framingShape > 74 && framingShape < 120) {
    frameShape = "flipped_triangle";
    features.push("Frame: Flipped Triangle")
}
if (framingShape > 119 && framingShape < 150) {
    frameShape = "gradientellipse";
    features.push("Frame: Gradient Ellipse")
}
if (framingShape > 149 && framingShape < 225) {
    frameShape = "inverse_flipped_triangle";
    features.push("Frame: Inverse Flipped Triangle")
}
if (framingShape > 224 && framingShape < 250) {
    frameShape = "default_flipped_triangle";
    features.push("Frame: Flipped Triangle")
}
if (framingShape > 249 && bgType != "grid") {
    frameShape = "gridTriangle";
    features.push("Frame: Grid Triangle")
}
console.log(features)
function xx(a) {
    return parseInt(hash.substring(a, a + 2), 16)
}
///////////////CUTOFF HERE, EVERYTHING BELOW NEEDS TO BE DELETED, 
///////////////OR REDUCED TO FEATURE LOGIC ABOVE THIS LINE

// let randomOffset = xxs(16);
// if (xx(16) < 63) {
//     randomOffset *= -5;
// } else if (xx(16) < 126) {
//     randomOffset *= 2;
// } else if (xx(16) < 189) {
//     randomOffset *= -3;
//     randomOffset /= 2;
// } else {
//     randomOffset /= 2;
// }
// let randomOffset2 = xx(26) < 165 ? 0 - xxs(26) : xxs(26);
// let randomOffset3 = xx(46) < 165 ? 0 - xxs(46) : xxs(46);
// let randomOffset4 = xx(48) % 2 == 0 ? 0 - xxs(48) : xxs(48);
// let randomOffset5 = xx(52) % 2 == 0 ? 0 - xxs(52) : xxs(52);



let centeredShape = xx(6);
let xPos = s(512);
let yPos = s(512);

if (centeredShape < 24 && frameShape != "square") {
    if (frameShape == "square") centeredShape = (28);
    features.push("Shape: Square")
}
if (centeredShape > 23 && centeredShape < 65 && frameShape != "ellipse" && bgType != "horizon") {
    if (type == "based") {
        blendMode(ADD);
    }
    features.push("Shape: Retro Sun")
}
if (centeredShape > 64 && centeredShape < 128 && frameShape != "ellipse") {
    centeredShapeType = "solid";
    features.push("Shape: Solid Circle")
}
if (centeredShape > 127 && centeredShape < 226) {
    centeredShapeType = "solid";
    features.push("Shape: Solid Triangle")
}
if (centeredShape > 224 && frameShape != "square" && type == "dark") {
    if (frameShape == "square") centeredShape = xx(28);
    features.push("Shape: Gradient Rectangle")
}

let floatingShape1 = xx(14);
if (floatingShape1 < 65 && floatingShape1 > 31) {
    features.push("Shape: Triangle")
}

if (floatingShape1 < 32 && floatingShape1 > 16) {
    features.push("Shape: Thic Triangle")
}
if (floatingShape1 < 16) {
    features.push("Shape: Thic Triangle")
}
if (floatingShape1 > 64 && floatingShape1 < 230) {
    features.push("Shape: Triangle")
}
if (floatingShape1 > 229 && sprinkles_used == false) {
    features.push("Shape: Sprinkles Triangle")
}
if (floatingShape1 > 64 && floatingShape1 < 80 && bgType != "notebook" && framingShapeType != "notebook") {
    features.push("Shape: Sprinkles Circle")
}
if (floatingShape1 > 79 && floatingShape1 < 100) {
    features.push("Shape: Sprinkles Circle")
}
if (floatingShape1 > 69 && floatingShape1 < 150 && bgType != "horizon" && bgType != "grid" && bgType != "fakegrid" && bgType != "3Dgrid" && centeredShapeType != "horizon" && bars_used == false && grid_used == false) {
    bars_used = true;
    let gridSize = xx(42);
    gridSize = gridSize * 2;
    if (gridSize < 65) {
        gridSize = gridSize + 64;
    }
    if (gridSize > 500) {
        gridSize = Math.floor(gridSize / 2);
    }
    gridSize = s(gridSize);
    let floatingGridCounter = s(32);
    let floatingGridCounterH = s(32);
    let floatingGrid_height_failsafe = 0;
    if (s(340) + randomOffset2 + floatingGridCounterH > s(512) && gridSize > s(200)) {
        floatingGrid_height_failsafe = s(-200);
    }
    noFill();
    strokeWeight(s(2));
    if (type == "light") {
        stroke(0);
    }
    if (type == "dark") {
        stroke(255);
    }
    while (floatingGridCounterH < gridSize) {
        while (floatingGridCounter < gridSize) {

            square(s(300) + randomOffset3 + floatingGridCounter, s(340) + randomOffset2 + floatingGridCounterH + floatingGrid_height_failsafe, s(32));
            floatingGridCounter = floatingGridCounter + s(32);
        }
        floatingGridCounterH = floatingGridCounterH + s(32);
        floatingGridCounter = s(32);
    }
}
if (floatingShape1 > 149 && floatingShape1 < 175 && bgType != "horizon" && bgType != "grid" && bgType != "fakegrid" && bgType != "3Dgrid" && centeredShapeType != "horizon" && bars_used == false) {
    if (type == "based") {
        blendMode(ADD);
    }
    bars_used = true;
    let gridSize = xx(40) * 2;
    gridSize = gridSize * 2;
    if (gridSize < s(65)) {
        gridSize = gridSize + s(64);
    }
    if (gridSize > s(500)) {
        gridSize = Math.floor(gridSize / 2);
    }
    gridSize = s(gridSize);
    let floatingGridCounter = s(32);
    let floatingGridCounterH = s(32);
    let floatingGrid_height_failsafe = 0;
    if (s(340) + randomOffset2 + floatingGridCounterH > s(512) && gridSize > s(200)) {
        floatingGrid_height_failsafe = s(-200);
    }
    noFill();
    strokeWeight(s(2));
    if (type == "light") {
        stroke(0);
    }
    if (type == "dark") {
        stroke(255);
    }
    let blackSquareStart = true;
    while (floatingGridCounterH < gridSize) {
        currSquareBlack = blackSquareStart;
        while (floatingGridCounter < gridSize) {
            fill(currSquareBlack ? 0 : 255);
            square(s(300) + randomOffset3 + floatingGridCounter, s(340) + randomOffset2 + floatingGridCounterH + floatingGrid_height_failsafe, s(32));
            floatingGridCounter += s(32);
            currSquareBlack = !currSquareBlack;
        }
        blackSquareStart = !blackSquareStart;
        floatingGridCounterH += s(32);
        floatingGridCounter = s(32);
    }
    blendMode(BLEND);
}
if (floatingShape1 > 174 && floatingShape1 < 200 && bgType != "horizon" && centeredShapeType != "horizon") {
    bars_used = true;
    stroke(nonBGColor(2));
    strokeWeight(s(4));
    strokeCap(ROUND);
    let radius = s(xx(30));
    if (radius < s(100)) {
        radius += s(76);
    }
    if (radius > s(200)) {
        radius -= s(55);
    }
    let lineH = radius * (-1);
    let firstlastline = 16;
    let venetian_circle_failsafe = 0;
    while (lineH < radius) {
        let chord = pow(radius, 2) - pow(lineH, 2);
        if (lineH + s(32) >= radius) {
            firstlastline = (-4);
        }
        if (randomOffset < s(-100)) {
            venetian_circle_failsafe = s(250);
        }

        line(s(412) + randomOffset2, s(356) + lineH + randomOffset + venetian_circle_failsafe, s(412) + firstlastline + sqrt(chord) + randomOffset2, s(356) + lineH + randomOffset + venetian_circle_failsafe);
        line(s(412) + randomOffset2, s(356) + lineH + randomOffset + venetian_circle_failsafe, s(412) - firstlastline - sqrt(chord) + randomOffset2, s(356) + lineH + randomOffset + venetian_circle_failsafe);
        lineH = lineH + s(16);
        firstlastline = 0;
    }
}

if (floatingShape1 > 99 && floatingShape1 < 125) {
    strokeWeight(s(32));
    noFill();
    stroke(nonBGColor(2));
    strokeCap(SQUARE);
    let arcBegin = radians(random(0, 200) + 10);
    let arcEnd = radians(random(0, 200) + 10);
    arcBegin = arcBegin / 4;
    arcEnd = arcEnd * 2;
    if (arcEnd - arcBegin < radians(50)) {
        arcEnd = arcEnd * 4;
    }
    if (arcEnd - arcBegin > radians(330)) {
        arcEnd = arcEnd / 3;
    }
    if (randomOffset4 > 125) {
        arcBegin = arcBegin + radians(180);
        arcEnd = arcEnd + radians(180);
    }
    let arcSize = abs(randomOffset4) + s(100);
    arc(s(512), s(512), arcSize, arcSize, arcBegin, arcEnd);
}

if (floatingShape1 > 124 && floatingShape1 < 150 && bars_used == false) {
    if (type == "based") {
        blendMode(ADD);
    }
    worms_used = true;
    let sourceWormsCircle;
    let maskWormsCircle;
    sourceWormsCircle = createGraphics(DIM, DIM);
    sourceWormsCircle.background(255);
    sourceWormsCircle.noFill();
    sourceWormsCircle.strokeCap(ROUND);
    sourceWormsCircle.strokeWeight(s(5));
    sourceWormsCircle.stroke(0);
    let worm_column = 0;
    let worm_row = 0;
    let worm_switch = 0;
    let bezX1 = s(16);
    let bezX2 = s(4);
    let bezY1 = s(32);
    while (worm_row < s(1224)) {
        while (worm_column < DIM) {
            sourceWormsCircle.beginShape();
            sourceWormsCircle.curveVertex(s(int(random(0, 12) - bezX1)) + worm_row, s(int(random(0, 24)) - bezY1) + worm_column);
            sourceWormsCircle.curveVertex(s(int(random(0, 24))) + worm_row, s(int(random(0, 24))) + worm_column);
            sourceWormsCircle.curveVertex(s(int(random(0, 26))) + worm_row, s(int(random(0, 24))) + worm_column);
            sourceWormsCircle.curveVertex(s(int(random(0, 32))) + worm_row, int(random(0, 24)) + worm_column);
            sourceWormsCircle.curveVertex(s(int(random(0, 36))) + bezX2 + worm_row, s(int(random(0, 24))) + bezY1 + worm_column);
            sourceWormsCircle.endShape();
            worm_column = worm_column + s(24);
        }
        worm_column = worm_column + s(158);
        worm_switch++;
        worm_row = worm_row + s(32);
        if (worm_switch % 2 == 0) {
            worm_column = 0;
        }
        if (worm_switch % 2 != 0) {
            worm_column = s(-79);
        }
        if (worm_switch % 3 == 0) {
            worm_column = s(-128);
        }
    }
    maskWormsCircle = createGraphics(DIM, DIM);
    maskWormsCircle.ellipse(s(512) + randomOffset, s(512) + randomOffset, s(floatingShape1 * 2), s(floatingShape1 * 2));
    applyMask(sourceWormsCircle, maskWormsCircle);
    blendMode(BLEND);
}
if (floatingShape1 > 200 && floatingShape1 < 241 && bgType != "dots") {
    floatingShapeType = "dots_circle";
    let sourceDotsCircle;
    let maskDotsCircle;
    sourceDotsCircle = createGraphics(DIM, DIM);
    let dots_circle_counter = 0;
    let dots_height_counter = 0;
    if (type == "light") {
        sourceDotsCircle.background(255, 255, 255);
    }
    if (type == "dark") {
        sourceDotsCircle.background(0, 0, 0);
    }
    if (type == "based") {
        sourceDotsCircle.background(clrs[0]);
    }
    while (dots_height_counter < DIM) {
        while (dots_circle_counter < DIM) {
            sourceDotsCircle.noStroke();
            sourceDotsCircle.fill(clrs[1]);
            sourceDotsCircle.ellipse(dots_circle_counter, dots_height_counter, s(4), s(4));
            dots_circle_counter = dots_circle_counter + s(8);
        }
        dots_height_counter = dots_height_counter + s(8);
        dots_circle_counter = 0;
    }
    maskDotsCircle = createGraphics(DIM, DIM);
    maskDotsCircle.ellipse(s(512) + randomOffset, s(512) + randomOffset, s(floatingShape1), s(floatingShape1));
    applyMask(sourceDotsCircle, maskDotsCircle);
}
let curveWiggler1 = s(xx(16));
let curveWiggler2 = s(xx(18));
let curveWiggler4 = s(xx(20));
let curveWiggler5 = s(xx(22));
let curveType = xx(14);
if (curveType < 16) {
    let sourceGradientCurve;
    let maskGradientCurve;
    sourceGradientCurve = createGraphics(DIM, DIM);
    let x_lerp = 0;
    let y_lerp = 0;
    let w_lerp = DIM;
    let h_lerp = DIM;
    for (let i = y_lerp; i <= y_lerp + h_lerp; i++) {
        let inter = map(i, y_lerp, y_lerp + h_lerp, 0, 1);
        let c = lerpColor(clrs[0], clrs[1], inter);
        sourceGradientCurve.strokeWeight(2);
        sourceGradientCurve.stroke(c);
        sourceGradientCurve.line(i, x_lerp, i, x_lerp + w_lerp);
    }
    maskGradientCurve = createGraphics(DIM, DIM);

    if (curveWiggler1 > s(170)) {
        curveWiggler1 = curveWiggler1 - s(100);
    }
    if (curveWiggler2 > s(120)) {
        curveWiggler2 = curveWiggler2 - s(100);
    }
    if (curveWiggler4 > s(170)) {
        curveWiggler4 = curveWiggler4 - s(100);
    }
    if (curveWiggler5 > s(170)) {
        curveWiggler5 = curveWiggler5 - s(100);
    }
    let curveHeightInt = s(xx(24));
    let curveHeightOffset = 0;
    let curveOffset = s(xx(26));
    curveHeightOffset = curveHeightInt;
    curveHeightOffset = curveHeightOffset * (-2);
    if (xx(26) > 63 && xx(26) < 100) {
        curveOffset *= 4;
    }
    if (xx(26) < 64) {
        curveOffset = curveOffset * (-1);
    }
    if (xx(26) > 100) {
        curveOffset = curveOffset / 5;
    }
    if (xx(26) < 165) {
        curveHeightOffset = curveHeightInt;
        curveHeightOffset = curveHeightOffset * (-2);
    }
    maskGradientCurve.noFill();
    maskGradientCurve.strokeWeight(s(8));
    maskGradientCurve.stroke(255);
    let failsafe_flourish_mover = 0;
    maskGradientCurve.beginShape();
    if ((s(64) + curveOffset * 4) < 1) {
        failsafe_flourish_mover = s(200);
    }
    let flourishOffset = s(-320);
    if (curveHeightOffset < s(-300)) {
        curveHeightOffset += s(300);
    }
    maskGradientCurve.curveVertex(flourishOffset + s(120) + curveOffset * 4 + curveWiggler1 + failsafe_flourish_mover, s(256) + curveWiggler2 + curveOffset + curveHeightOffset);
    maskGradientCurve.curveVertex(flourishOffset + s(360) + curveOffset * 4 + failsafe_flourish_mover, s(550) + curveWiggler2 + curveOffset + curveHeightOffset);
    maskGradientCurve.curveVertex(flourishOffset + s(480) + curveOffset * 4 + curveWiggler2 + failsafe_flourish_mover, s(256) + curveWiggler1 + curveWiggler2 + curveOffset + curveHeightOffset);
    maskGradientCurve.curveVertex(flourishOffset + s(520) + curveOffset * 4 + failsafe_flourish_mover, s(740) + curveWiggler4 + (curveWiggler2 / 2) + curveOffset + curveHeightOffset);
    maskGradientCurve.curveVertex(flourishOffset + s(660) + curveOffset * 4 + curveWiggler1 + failsafe_flourish_mover, s(460) + curveWiggler5 + curveWiggler2 + 2 * curveOffset + curveHeightOffset);
    maskGradientCurve.curveVertex(flourishOffset + s(860) + curveOffset * 4 + failsafe_flourish_mover, s(512) + curveWiggler5 + 4 * curveOffset + curveHeightOffset);
    maskGradientCurve.curveVertex(flourishOffset + s(1060) + curveOffset * 4 + failsafe_flourish_mover, s(512) + curveWiggler1 + curveOffset + curveHeightOffset);
    maskGradientCurve.curveVertex(flourishOffset + s(2400) + curveOffset * 4 + failsafe_flourish_mover, s(800) + curveWiggler4 + (curveWiggler2 / 2) + curveOffset + curveHeightOffset - s(600));
    maskGradientCurve.endShape();
    applyMask(sourceGradientCurve, maskGradientCurve);
}
if (curveType > 15 && curveType < 65) {
    if (curveWiggler1 > s(170)) {
        curveWiggler1 -= s(100);
    }
    if (curveWiggler2 > s(120)) {
        curveWiggler2 -= s(100);
    }
    if (curveWiggler4 > s(170)) {
        curveWiggler4 -= s(100);
    }
    if (curveWiggler5 > s(170)) {
        curveWiggler5 -= s(100);
    }
    let curveHeightInt = s(xx(24));
    let curveHeightOffset = 0;
    let curveOffset = s(xx(26));
    curveHeightOffset = curveHeightInt;
    curveHeightOffset = curveHeightOffset * (-2);
    if (curveOffset > s(63) && curveOffset < s(100)) {
        curveOffset = curveOffset * 4;
    }
    if (curveOffset < s(64)) {
        curveOffset = curveOffset * (-1);
    }
    if (curveOffset > s(100)) {
        curveOffset = curveOffset / 5;
    }
    if (curveOffset < s(165)) {
        curveHeightOffset = curveHeightInt;
        curveHeightOffset = curveHeightOffset * (-2);
    }
    noFill();
    strokeWeight(s(8));
    stroke(clrs[2]);
    if (type == "dark" && clrs[2] == color('#000000')) {
        stroke(clrs[4]);
    }
    let failsafe_flourish_mover = 0;
    beginShape();
    if ((s(64) + curveOffset * 4) < 1) {
        failsafe_flourish_mover = s(200);
    }
    let flourishOffset = s(-320);
    if (curveHeightOffset < s(-300)) {
        curveHeightOffset = curveHeightOffset + s(300);
    }
    curveVertex(flourishOffset + s(120) + curveOffset * 4 + curveWiggler1 + failsafe_flourish_mover, s(256) + curveWiggler2 + curveOffset + curveHeightOffset);
    curveVertex(flourishOffset + s(360) + curveOffset * 4 + failsafe_flourish_mover, s(550) + curveWiggler2 + curveOffset + curveHeightOffset);
    curveVertex(flourishOffset + s(480) + curveOffset * 4 + curveWiggler2 + failsafe_flourish_mover, s(256) + curveWiggler1 + curveWiggler2 + curveOffset + curveHeightOffset);
    curveVertex(flourishOffset + s(520) + curveOffset * 4 + failsafe_flourish_mover, s(740) + curveWiggler4 + (curveWiggler2 / 2) + curveOffset + curveHeightOffset);
    curveVertex(flourishOffset + s(660) + curveOffset * 4 + curveWiggler1 + failsafe_flourish_mover, s(460) + curveWiggler5 + curveWiggler2 + 2 * curveOffset + curveHeightOffset);
    curveVertex(flourishOffset + s(860) + curveOffset * 4 + failsafe_flourish_mover, s(512) + curveWiggler5 + 4 * curveOffset + curveHeightOffset);
    curveVertex(flourishOffset + s(1060) + curveOffset * 4 + failsafe_flourish_mover, s(512) + curveWiggler1 + curveOffset + curveHeightOffset);
    curveVertex(flourishOffset + s(2400) + curveOffset * 4 + failsafe_flourish_mover, s(800) + curveWiggler4 + (curveWiggler2 / 2) + curveOffset + curveHeightOffset - s(600));
    endShape();
}
if (curveType > 64 && curveType < 128) {
    let curveOffset = xxs(26);
    let curveHeightOffset = 0;
    if (curveOffset > s(63) && curveOffset < s(100)) {
        curveOffset = curveOffset * 4;
    }
    if (curveOffset < s(64)) {
        curveOffset = curveOffset * (-1);
    }
    if (curveOffset > s(100)) {
        curveOffset = curveOffset / 5;
    }
    if (curveOffset < s(165)) {
        curveHeightOffset = 0 - s(xx(24));
    }
    noFill();
    strokeWeight(s(10));
    stroke(clrs[2]);
    if (type == "dark" && clrs[2] == color('#000000')) {
        stroke(clrs[4]);
    }
    let failsafe_flourish_mover = 0;
    beginShape();
    if ((s(64) + curveOffset * 4) < 1) {
        failsafe_flourish_mover = s(200);
    }
    curveVertex(s(64) + curveOffset * 4 + failsafe_flourish_mover, s(320) + curveWiggler1 + curveOffset + curveHeightOffset);
    curveVertex(s(128) + curveOffset * 4 + failsafe_flourish_mover, s(640) + curveWiggler4 + curveOffset + curveHeightOffset);
    curveVertex(s(160) + curveOffset * 4 + failsafe_flourish_mover, s(420) + curveWiggler2 + curveOffset + curveHeightOffset);
    curveVertex(s(200) + curveOffset * 4 + failsafe_flourish_mover, s(600) + curveWiggler1 + curveOffset + curveHeightOffset);
    curveVertex(s(260) + curveOffset * 4 + failsafe_flourish_mover, s(400) + curveWiggler5 + curveOffset + curveHeightOffset);
    curveVertex(s(512) + curveOffset * 4 + failsafe_flourish_mover, s(560) + curveWiggler2 + curveOffset + curveHeightOffset);
    curveVertex(s(768) + curveOffset * 4 + failsafe_flourish_mover, s(128) + curveWiggler1 + curveOffset + curveHeightOffset);
    endShape();
}
if (curveType > 129 && curveType < 241) {
    noFill();
    strokeWeight(s(10));
    stroke(nonBGColor(2));
    let curveOffset = s(xx(26));
    if (curveWiggler1 > s(170)) {
        curveWiggler1 -= s(100);
    }
    if (curveWiggler2 > s(120)) {
        curveWiggler2 -= s(100);
    }
    if (curveWiggler4 > s(170)) {
        curveWiggler4 -= s(100);
    }
    if (curveWiggler5 > s(170)) {
        curveWiggler5 -= s(100);
    }
    let curveHeightOffset = 0;
    if (curveOffset > s(63) && curveOffset < s(100)) {
        curveOffset *= 4;
    }
    if (curveOffset < s(64)) {
        curveOffset *= (-1);
    }
    if (curveOffset > s(100)) {
        curveOffset /= 5;
    }
    if (curveOffset < s(165)) {
        curveHeightOffset = s(xx(24) * -2);
    }
    noFill();
    strokeWeight(s(8));
    let failsafe_flourish_mover = 0;
    beginShape();
    if ((s(64) + curveOffset * 4) < 1) {
        failsafe_flourish_mover = s(200);
    }
    curveVertex(DIM + curveOffset * 4 + failsafe_flourish_mover, 0 + curveWiggler1 + curveOffset + curveHeightOffset);
    curveVertex(s(120) + curveOffset * 4 + curveWiggler1 + failsafe_flourish_mover, s(450) + curveWiggler2 + curveOffset + curveHeightOffset);
    curveVertex(s(640) + curveOffset * 4 + failsafe_flourish_mover, s(550) + curveWiggler2 + curveOffset + curveHeightOffset);
    curveVertex(s(200) + curveOffset * 4 + curveWiggler2 + failsafe_flourish_mover, s(650) + curveWiggler1 + curveWiggler2 + curveOffset + curveHeightOffset);
    curveVertex(s(528) + curveOffset * 4 + failsafe_flourish_mover, s(740) + curveWiggler4 + (curveWiggler2 / 2) + curveOffset + curveHeightOffset);
    curveVertex(s(128) + curveOffset * 4 + curveWiggler1 + failsafe_flourish_mover, s(875) + curveWiggler5 + curveWiggler2 + 2 * curveOffset + curveHeightOffset);
    curveVertex(0 + curveOffset * 4 + failsafe_flourish_mover, s(912) + curveWiggler5 + 4 * curveOffset + curveHeightOffset);
    endShape();
}
if (curveType > 240) {
    let sourceCurve;
    let maskCurve;
    sourceCurve = createGraphics(DIM, DIM);
    let x_lerp = 0;
    let y_lerp = 0;
    let w_lerp = DIM;
    let h_lerp = DIM;
    for (let i = y_lerp; i <= y_lerp + h_lerp; i++) {
        let inter = map(i, y_lerp, y_lerp + h_lerp, 0, 1);
        let c = lerpColor(clrs[0], clrs[1], inter);
        sourceCurve.strokeWeight(2);
        sourceCurve.stroke(c);
        sourceCurve.line(x_lerp, i, x_lerp + w_lerp, i);
    }
    maskCurve = createGraphics(DIM, DIM);
    maskCurve.noFill();
    maskCurve.strokeWeight(s(10));
    maskCurve.stroke(255);
    let curveOffset = xxs(26);
    if (curveWiggler1 > s(170)) {
        curveWiggler1 = curveWiggler1 - s(100);
    }
    if (curveWiggler2 > s(120)) {
        curveWiggler2 = curveWiggler2 - s(100);
    }
    if (curveWiggler4 > s(170)) {
        curveWiggler4 = curveWiggler4 - s(100);
    }
    if (curveWiggler5 > s(170)) {
        curveWiggler5 = curveWiggler5 - s(100);
    }
    let curveHeightOffset = 0;
    if (curveOffset > s(63) && curveOffset < s(100)) {
        curveOffset = curveOffset * 4;
    }
    if (curveOffset < s(64)) {
        curveOffset = curveOffset * (-1);
    }
    if (curveOffset > s(100)) {
        curveOffset = curveOffset / 5;
    }
    if (curveOffset < s(165)) {
        curveHeightOffset = xxs(24) * (-2);
    }
    maskCurve.noFill();
    maskCurve.strokeWeight(s(8));
    let failsafe_flourish_mover = 0;
    maskCurve.beginShape();
    if ((s(64) + curveOffset * 4) < 1) {
        failsafe_flourish_mover = s(200);
    }
    maskCurve.curveVertex(DIM + curveOffset * 4 + failsafe_flourish_mover, 0 + curveWiggler1 + curveOffset + curveHeightOffset);
    maskCurve.curveVertex(s(120) + curveOffset * 4 + curveWiggler1 + failsafe_flourish_mover, s(450) + curveWiggler2 + curveOffset + curveHeightOffset);
    maskCurve.curveVertex(s(640) + curveOffset * 4 + failsafe_flourish_mover, s(550) + curveWiggler2 + curveOffset + curveHeightOffset);
    maskCurve.curveVertex(s(200) + curveOffset * 4 + curveWiggler2 + failsafe_flourish_mover, s(650) + curveWiggler1 + curveWiggler2 + curveOffset + curveHeightOffset);
    maskCurve.curveVertex(s(528) + curveOffset * 4 + failsafe_flourish_mover, s(740) + curveWiggler4 + (curveWiggler2 / 2) + curveOffset + curveHeightOffset);
    maskCurve.curveVertex(s(128) + curveOffset * 4 + curveWiggler1 + failsafe_flourish_mover, s(875) + curveWiggler5 + curveWiggler2 + 2 * curveOffset + curveHeightOffset);
    maskCurve.curveVertex(0 + curveOffset * 4 + failsafe_flourish_mover, s(912) + curveWiggler5 + 4 * curveOffset + curveHeightOffset);
    maskCurve.endShape();
    applyMask(sourceCurve, maskCurve);
}
let floatingShape2 = xx(18);
if (floatingShape2 > 128 && floatingShape2 < 156) {
    let bar_triangle;
    bar_triangle = createGraphics(DIM, DIM);
    let barp = 0;
    bar_triangle.stroke(getColor(2));
    bar_triangle.strokeWeight(s(10));
    bar_triangle.noFill();
    while (barp < s(1424)) {
        bar_triangle.line(s(-100), s(-400) + barp, s(3400), s(800) + barp);
        barp += s(16);
    }
    let bar_triangle_mask;
    bar_triangle_mask = createGraphics(DIM, DIM);
    bar_triangle_mask.triangle(
        xsBetween(8, 100, 400), xsBetween(18, 100, 400),
        xsBetween(7, 400, 550), xsBetween(19, 400, 550),
        xsBetween(17, 750, 950), s(512) - xsBetween(9, 100, 120));
    applyMask(bar_triangle, bar_triangle_mask);
}
if (floatingShape2 < 7) {
    noStroke();
    fill(clrs[2]);
    rect(s(512) - randomOffset, s(300) - randomOffset / 2, s(floatingShape2 + 16), s(floatingShape2 + 16) * 8);
    rect(s(512) - randomOffset + s(64), s(300) - randomOffset / 2 - s(64), s(floatingShape2 + 16), s(floatingShape2 + 16) * 8);
    rect(s(512) - randomOffset + s(128), s(300) - randomOffset / 2 - s(128), s(floatingShape2 + 16), s(floatingShape2 + 16) * 8);
}
if (floatingShape2 > 7 && floatingShape2 < 17 && bars_used == false && bgType != "horizon") {
    strokeCap(ROUND);
    strokeWeight(s(4));
    stroke(nonBGColor(3));
    bars_used = true;
    let halfway_point = false;
    let line_circle_var = s(Math.floor(floatingShape2 / 2));
    let line_circle_height = s(floatingShape2);
    let line_circle_counter = 0;
    let height_adder = 0;
    let line_anchorX = s(512) + randomOffset;
    let line_anchorY = s(128) + randomOffset2;
    let line_triangle_height_failsafe = 0;
    if ((line_anchorY + (line_circle_counter + height_adder) * line_circle_height) < s(128)) {
        line_triangle_height_failsafe = s(256);
    }
    while (line_circle_counter < 16 && line_circle_counter > -1 && height_adder < 16) {
        if (halfway_point == false) {
            line(line_anchorX - line_circle_counter * line_circle_var, line_anchorY + (line_circle_counter + height_adder) * line_circle_height + line_triangle_height_failsafe, line_anchorX + line_circle_counter * line_circle_var, line_anchorY + (line_circle_counter + height_adder) * line_circle_height + line_triangle_height_failsafe);
            line_circle_counter++;
        }
    }
}
if (floatingShape2 > 16 && floatingShape2 < 32) {
    noStroke();
    fill(clrs[2]);
    rect(s(512) - randomOffset, s(300) - randomOffset / 2, s(floatingShape2), s(floatingShape2) * 8);
    rect(s(512) - randomOffset + s(64), s(300) - randomOffset / 2 + s(64), s(floatingShape2), s(floatingShape2) * 8);
    rect(s(512) - randomOffset + s(128), s(300) - randomOffset / 2 + s(128), s(floatingShape2), s(floatingShape2) * 8);
}

if (floatingShape2 < 50 && type == "dark" && clrs[2] != color('#000000') && clrs[3] != color('#000000')) {
    let sourceGradient;
    let maskGradient;
    sourceGradient = createGraphics(DIM, DIM);
    let x_lerp = 0;
    let y_lerp = 0;
    let gradientShapePosX = int(srandom(128, 824));
    let gradientShapePosY = int(srandom(128, 824));
    let w_lerp = gradientShapePosX + gradientShapePosX;
    let h_lerp = gradientShapePosY + gradientShapePosY;
    for (let i = y_lerp; i <= y_lerp + h_lerp; i++) {
        let inter = map(i, y_lerp, y_lerp + h_lerp, 0, 1);
        let c = lerpColor(clrs[2], clrs[3], inter);
        sourceGradient.strokeWeight(2);
        sourceGradient.stroke(c);
        sourceGradient.line(x_lerp, i, x_lerp + w_lerp, i);
    }
    maskGradient = createGraphics(DIM, DIM);
    maskGradient.triangle(gradientShapePosX, gradientShapePosY + s(128),
        gradientShapePosX - gradientShapePosX * (0.5),
        Math.floor(gradientShapePosY / 3) + s(128),
        gradientShapePosX + gradientShapePosX * (0.25), Math.floor(gradientShapePosY / 2) + s(128));
    applyMask(sourceGradient, maskGradient);
}
if (floatingShape2 > 50 && type == "dark" && clrs[2] != color('#000000') && clrs[3] != color('#000000')) {
    let sourceGradient;
    let maskGradient;
    sourceGradient = createGraphics(DIM, DIM);
    let x_lerp = 0;
    let y_lerp = 0;
    let gradientShapePosX = int(srandom(228, 724));
    let gradientShapePosY = int(srandom(228, 724));
    if (floatingShapeType == "dots_circle" && (s(512) + randomOffset) < s(500)) {
        gradientShapePosX += s(300);
    }
    if (ss_circle == true && (s(512) + randomOffset) < s(500)) {
        shift_gEllipse = gradientShapePosX += s(300);
    }
    if (gradientShapePosX > s(700)) {
        gradientShapePosX -= s(200);
    }
    let w_lerp = gradientShapePosX + s(340);
    let h_lerp = gradientShapePosY + s(340);
    for (let i = y_lerp; i <= y_lerp + h_lerp; i++) {
        let inter = map(i, y_lerp, y_lerp + h_lerp, 0, 1);
        let c = lerpColor(clrs[2], clrs[3], inter);
        sourceGradient.strokeWeight(2);
        sourceGradient.stroke(c);
        sourceGradient.line(x_lerp, i, x_lerp + w_lerp, i);
    }
    maskGradient = createGraphics(DIM, DIM);
    maskGradient.fill('#000000');
    maskGradient.ellipse(gradientShapePosX, gradientShapePosY, s(340), s(340));
    applyMask(sourceGradient, maskGradient);
}
if (floatingShape2 > 50 && floatingShape2 < 75) {
    let arc_counter = 0;
    let arcPosx = 0;
    let shiftNoodle = s(-512);
    let arcPosy = s(-712);
    let ellipse_constant = s(15);
    let noodleWaveOffset = srandom(-128, 128);
    let noodleWaveOffset2 = srandom(-100, 100);
    strokeWeight(s(6));
    strokeCap(SQUARE);
    stroke(clrs[4]);
    noFill();
    let rotateRAD = (3 * PI / 4.0);
    rotate(rotateRAD);
    while (arc_counter <= (6)) {
        stroke(clrs[4]);
        while (arcPosx < s(512)) {
            arc(arcPosx + shiftNoodle + noodleWaveOffset, arcPosy + noodleWaveOffset2, ellipse_constant, ellipse_constant - s(6), PI, TWO_PI, OPEN);
            arc(arcPosx + ellipse_constant + shiftNoodle + noodleWaveOffset, (arcPosy - 3) + noodleWaveOffset2, ellipse_constant, ellipse_constant - s(6), 0, PI, OPEN);
            arcPosx = arcPosx + 2 * ellipse_constant;
        }
        arcPosx = 0;
        arcPosy = arcPosy - s(15);
        arc_counter += 1;
    }
    rotate(-rotateRAD);
}
if (floatingShape2 > 74 && floatingShape2 < 101) {
    noStroke();
    fill(clrs[4]);
    let zotOffset = srandom(-128, 128);
    let zotOffset2 = srandom(-100, 100);
    beginShape();
    vertex(s(728) + zotOffset, s(240) + zotOffset2);
    vertex(s(800) + zotOffset, s(240) + zotOffset2);
    vertex(s(768) + zotOffset, s(320) + zotOffset2);
    vertex(s(820) + zotOffset, s(320) + zotOffset2);
    vertex(s(778) + zotOffset, s(400) + zotOffset2);
    vertex(s(820) + zotOffset, s(400) + zotOffset2);
    vertex(s(738) + zotOffset, s(540) + zotOffset2);
    vertex(s(768) + zotOffset, s(440) + zotOffset2);
    vertex(s(720) + zotOffset, s(440) + zotOffset2);
    vertex(s(748) + zotOffset, s(360) + zotOffset2);
    vertex(s(680) + zotOffset, s(360) + zotOffset2);
    vertex(s(728) + zotOffset, s(240) + zotOffset2);
    endShape();
}
if (floatingShape2 > 100 && floatingShape2 < 128) {
    two_straight = true;
    noFill();
    stroke(clrs[1]);
    strokeWeight(s(16));
    strokeCap(SQUARE);
    let straightLineLength = abs(randomOffset3) * 2;
    let shift_right = 0;
    if (straightLineLength > s(300)) {
        straightLineLength = straightLineLength / 3;
    }
    if (floatingShape2 > 112) {
        shift_right = s(256);
    }
    line(s(530) + randomOffset3 + shift_right, s(360) + randomOffset2, straightLineLength + randomOffset3 + shift_right, s(360) + randomOffset2);
    line(s(530) + randomOffset3 + shift_right, s(392) + randomOffset2, straightLineLength + randomOffset3 + shift_right, s(392) + randomOffset2);
}
if (floatingShape2 > 99 && floatingShape2 < 128 && two_straight == false) {
    noFill();
    stroke(clrs[1]);
    strokeWeight(s(32));
    strokeCap(SQUARE);
    let noodle_failsafe = 0;
    if (randomOffset < 0) {
        noodle_failsafe = s(250);
    }
    let arcPosx = s(256) + randomOffset + noodle_failsafe;
    let arcPosy = s(512) + randomOffset;
    arc(arcPosx, arcPosy, s(128), s(128), PI, TWO_PI, OPEN);
    arc(arcPosx + s(128), (arcPosy - 1), s(128), s(128), 0, PI, OPEN);
    arcPosx = arcPosx + 2 * s(128);
    arc(arcPosx, arcPosy, s(128), s(128), PI, TWO_PI, OPEN);
    arc(arcPosx + s(128), (arcPosy - 1), s(128), s(128), 0, PI, OPEN);
}
if (floatingShape2 > 127 && floatingShape2 < 160 && two_straight == false) {
    noFill();
    stroke(clrs[1]);
    strokeWeight(s(32));
    strokeCap(SQUARE);
    let arcPosx = s(512) + randomOffset;
    let arcPosy = s(512) + randomOffset;
    arc(arcPosx, arcPosy, s(64), s(64), PI, TWO_PI, OPEN);
    arc(arcPosx + s(64), (arcPosy - 1), s(64), s(64), 0, PI, OPEN);
    arcPosx = arcPosx + 2 * s(64);
    arc(arcPosx, arcPosy, s(64), s(64), PI, TWO_PI, OPEN);
    arc(arcPosx + s(64), (arcPosy - 1), s(64), s(64), 0, PI, OPEN);
}
if (floatingShape2 > 160 && floatingShape2 < 180 && two_straight == false) {
    noFill();
    stroke(nonBGColor(1));
    strokeWeight(s(32));
    strokeCap(SQUARE);
    let noodle_failsafe = 0;
    if (randomOffset < 0) {
        noodle_failsafe = s(250);
    }
    let arcPosx = s(256) + randomOffset + noodle_failsafe;
    let arcPosy = s(512) + randomOffset;
    arc(arcPosx, arcPosy, s(128), s(128), PI, TWO_PI, OPEN);
    arc(arcPosx + s(128), (arcPosy - 1), s(128), s(128), 0, PI, OPEN);
    arcPosx = arcPosx + 2 * s(128);
    arc(arcPosx, arcPosy, s(128), s(128), PI, TWO_PI, OPEN);
    arc(arcPosx + s(128), (arcPosy - 1), s(128), s(128), 0, PI, OPEN);
    arcPosy = arcPosy + s(128);
    arcPosx = s(256) + randomOffset + noodle_failsafe;
    arc(arcPosx, arcPosy, s(128), s(128), PI, TWO_PI, OPEN);
    arc(arcPosx + s(128), (arcPosy - 1), s(128), s(128), 0, PI, OPEN);
    arcPosx = arcPosx + 2 * s(128);
    arc(arcPosx, arcPosy, s(128), s(128), PI, TWO_PI, OPEN);
    arc(arcPosx + s(128), (arcPosy - 1), s(128), s(128), 0, PI, OPEN);
}
if (floatingShape2 > 179 && floatingShape2 < 241) {
    noStroke();
    fill(clrs[4]);
    let quote_gap = 0 + randomOffset2;
    let quote_mover = s(-256);
    let quote_moverH = int(srandom(-256, 100));
    quad(quote_mover + s(680) + quote_gap, quote_moverH + s(420) + quote_gap + (randomOffset / 4), quote_mover + s(712) + quote_gap, quote_moverH + s(432) + quote_gap + (randomOffset / 4), quote_mover + s(684) + quote_gap, quote_moverH + s(500) + quote_gap + (randomOffset / 4), quote_mover + s(658) + quote_gap, quote_moverH + s(488) + quote_gap + (randomOffset / 4));
    quote_gap = s(32) + randomOffset2;
    quad(quote_mover + s(680) + quote_gap, quote_moverH + s(420) + quote_gap + (randomOffset / 4), quote_mover + s(712) + quote_gap, quote_moverH + s(432) + quote_gap + (randomOffset / 4), quote_mover + s(684) + quote_gap, quote_moverH + s(500) + quote_gap + (randomOffset / 4), quote_mover + s(658) + quote_gap, quote_moverH + s(488) + quote_gap + (randomOffset / 4));
}
if (floatingShape2 > 240 && floatingShape2 < 250 && two_straight == false) {
    strokeWeight(s(24));
    strokeCap(SQUARE);
    stroke(nonBGColor(1));
    noFill();
    let crispy_noodle = s(24);
    beginShape();
    vertex(s(400) + crispy_noodle + randomOffset, s(400) + crispy_noodle + randomOffset);
    vertex(s(400) + 2 * crispy_noodle + randomOffset, s(400) + crispy_noodle * 2 + randomOffset);
    vertex(s(400) + 3 * crispy_noodle + randomOffset, s(400) + crispy_noodle + randomOffset);
    vertex(s(400) + 4 * crispy_noodle + randomOffset, s(400) + crispy_noodle * 2 + randomOffset);
    vertex(s(400) + 5 * crispy_noodle + randomOffset, s(400) + crispy_noodle + randomOffset);
    vertex(s(400) + 6 * crispy_noodle + randomOffset, s(400) + crispy_noodle * 2 + randomOffset);
    vertex(s(400) + 7 * crispy_noodle + randomOffset, s(400) + crispy_noodle + randomOffset);
    vertex(s(400) + 8 * crispy_noodle + randomOffset, s(400) + crispy_noodle * 2 + randomOffset);
    vertex(s(400) + 9 * crispy_noodle + randomOffset, s(400) + crispy_noodle + randomOffset);
    vertex(s(400) + 10 * crispy_noodle + randomOffset, s(400) + crispy_noodle * 2 + randomOffset);
    vertex(s(400) + 11 * crispy_noodle + randomOffset, s(400) + crispy_noodle + randomOffset);
    endShape();
}
if (floatingShape2 > 249) {
    strokeWeight(s(24));
    strokeCap(SQUARE);
    stroke(nonBGColor(1));
    noFill();
    let crispy_noodle = s(24);
    beginShape();
    vertex(s(400) + crispy_noodle + randomOffset, s(400) + crispy_noodle + randomOffset);
    vertex(s(400) + 2 * crispy_noodle + randomOffset, s(400) + crispy_noodle * 2 + randomOffset);
    vertex(s(400) + 3 * crispy_noodle + randomOffset, s(400) + crispy_noodle + randomOffset);
    vertex(s(400) + 4 * crispy_noodle + randomOffset, s(400) + crispy_noodle * 2 + randomOffset);
    vertex(s(400) + 5 * crispy_noodle + randomOffset, s(400) + crispy_noodle + randomOffset);
    vertex(s(400) + 6 * crispy_noodle + randomOffset, s(400) + crispy_noodle * 2 + randomOffset);
    vertex(s(400) + 7 * crispy_noodle + randomOffset, s(400) + crispy_noodle + randomOffset);
    vertex(s(400) + 8 * crispy_noodle + randomOffset, s(400) + crispy_noodle * 2 + randomOffset);
    vertex(s(400) + 9 * crispy_noodle + randomOffset, s(400) + crispy_noodle + randomOffset);
    vertex(s(400) + 10 * crispy_noodle + randomOffset, s(400) + crispy_noodle * 2 + randomOffset);
    vertex(s(400) + 11 * crispy_noodle + randomOffset, s(400) + crispy_noodle + randomOffset);
    endShape();
    let noodle_spacer = s(64);
    beginShape();
    vertex(s(400) + crispy_noodle + randomOffset, s(400) + crispy_noodle + randomOffset + noodle_spacer);
    vertex(s(400) + 2 * crispy_noodle + randomOffset, s(400) + crispy_noodle * 2 + randomOffset + noodle_spacer);
    vertex(s(400) + 3 * crispy_noodle + randomOffset, s(400) + crispy_noodle + randomOffset + noodle_spacer);
    vertex(s(400) + 4 * crispy_noodle + randomOffset, s(400) + crispy_noodle * 2 + randomOffset + noodle_spacer);
    vertex(s(400) + 5 * crispy_noodle + randomOffset, s(400) + crispy_noodle + randomOffset + noodle_spacer);
    vertex(s(400) + 6 * crispy_noodle + randomOffset, s(400) + crispy_noodle * 2 + randomOffset + noodle_spacer);
    vertex(s(400) + 7 * crispy_noodle + randomOffset, s(400) + crispy_noodle + randomOffset + noodle_spacer);
    vertex(s(400) + 8 * crispy_noodle + randomOffset, s(400) + crispy_noodle * 2 + randomOffset + noodle_spacer);
    vertex(s(400) + 9 * crispy_noodle + randomOffset, s(400) + crispy_noodle + randomOffset + noodle_spacer);
    vertex(s(400) + 10 * crispy_noodle + randomOffset, s(400) + crispy_noodle * 2 + randomOffset + noodle_spacer);
    vertex(s(400) + 11 * crispy_noodle + randomOffset, s(400) + crispy_noodle + randomOffset + noodle_spacer);
    endShape();
}
if (floatingShape2 > 64 && floatingShape2 < 100 && floatingShapeType != "dots_circle" && bars_used == false && worms_used == false) {
    let bars_square_counter = 0;
    bars_used = true;
    while (bars_square_counter < DIM / 4) {
        noFill();
        stroke(clrs[2]);
        strokeWeight(s(5));
        let bar_length = s(floatingShape2);
        line(bar_length * 2, bar_length * 2 + bars_square_counter, bar_length * 6, bar_length * 2 + bars_square_counter);
        bars_square_counter = bars_square_counter + s(16);
    }
}
if (floatingShape1 < 16) {
    strokeWeight(s(16));
    noFill();
    stroke(diffColor(clrs[1], 3));
    triangle(s(128) + DIM / 2 + randomOffset, DIM / 2 + randomOffset, DIM / 3, DIM / 1.5, DIM / 4 + randomOffset, DIM / 4);
}
noLoop();

}



function grid3Dbg() {
    bgType = "3Dgrid";
    background(type == "light" ? 255 : 0);
    strokeWeight(1);
    let GridCounter = 4;
    let GridwCounter = 0 - DIM;
    let GridLoop = 24;
    stroke(type == "light" ? 0 : 255);
    while (GridCounter < DIM) {
        line(0, s(512) + GridCounter, DIM, s(512) + GridCounter);
        GridCounter *= 1.1;
    }
    while (GridwCounter < DIM) {
        line(GridwCounter, s(512) + 4, GridwCounter - (s(64) * GridLoop), DIM);
        GridLoop -= 1;
        GridwCounter += s(64);
    }
}

function horizonbg() {
    bgType = "horizon";
    if (type == "light") {
        background(255);
    } else {
        background(0, 0, 0);
    }
    let horizon = 0;
    strokeWeight(1);
    while (horizon < DIM) {
        stroke(type == "light" ? 0 : 255);
        strokeWeight(horizon / 1.5);
        line(0, s(512) + 20 * horizon, DIM, s(512) + 20 * horizon);
        horizon += 1;
    }
}

function fakegridbg() {
    bgType = "fakegrid";
    let x_lerp = 0;
    let y_lerp = 0;
    let w_lerp = DIM;
    let h_lerp = DIM;
    let fake_grid_counter = 0;
    let fake_grid_counter_h = 0;
    let fakeGrid;
    fakeGrid = createGraphics(DIM, DIM);
    for (var i = y_lerp; i <= y_lerp + h_lerp; i++) {
        let inter = map(i, y_lerp, y_lerp + h_lerp, 0, 1);
        let c = lerpColor(clrs[0], clrs[1], inter);
        fakeGrid.strokeWeight(2);
        fakeGrid.stroke(c);
        fakeGrid.line(x_lerp, i, x_lerp + w_lerp, i);
    }
    image(fakeGrid, 0, 0);
    while (fake_grid_counter_h < DIM + s(32)) {
        while (fake_grid_counter < DIM + s(32)) {
            fill(type == "light" ? 255 : 0);
            noStroke();
            square(fake_grid_counter - s(16), fake_grid_counter_h - s(16), s(64));
            fake_grid_counter = fake_grid_counter + s(66);
        }
        fake_grid_counter_h = fake_grid_counter_h + s(66);
        fake_grid_counter = 0;
    }
}

function gridbg() {
    bgType = "grid";
    if (type == "light") {
        background(255, 255, 255);
    } else {
        background(0, 0, 0);
    }
    let n = 0;
    while (n < DIM) {
        noFill();
        strokeWeight(s(2));
        if (type == "light") {
            stroke(0);
        } else {
            stroke(255, 255, 255);
        }
        line(0, s(64) + n, DIM, s(64) + n);
        line(s(64) + n, 0, s(64) + n, DIM);
        n += s(64);
    }
}



function starscapebg(randomOffset4, randomOffset5) {
    bgType = "starscape";
    let starAmt = abs(randomOffset5) * 40;
    let bigBang = 0;
    let starPosX = random(0, DIM);
    let starPosY = random(0, DIM);
    let starSize = 1;
    noStroke();
    fill(255);
    background(0);
    while (bigBang < starAmt) {
        ellipse(starPosX, starPosY, starSize, starSize);
        starPosX = random(0, DIM);
        starPosY = random(0, DIM);
        starSize = starSize + 1;
        if (starSize > s(5)) {
            starSize = 1;
        }
        bigBang += 1;
    }
}

