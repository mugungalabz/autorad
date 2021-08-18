
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