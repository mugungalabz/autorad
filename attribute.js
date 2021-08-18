
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
let type = xx(2) == 69 ? "Based" : xx(2) < 200 ? "Light" : "Dark"

features.push("Mood: " + type);

console.log(xx(2))
let bgSelect = xx(3);
if (type == "Light") {
    if (bgSelect < 6) {
        features.push("Scene: Uniform")
    }
    if (bgSelect > 5 && bgSelect < 50) {
        features.push("Scene: Dots")
        // dotsbg();
    }
    if (bgSelect > 49 && bgSelect < 100) {
        features.push("Scene: Grid")
        // gridbg();
    }
    if (bgSelect > 99 && bgSelect < 126) {
        bgType = "notebook"
        features.push("Scene: 90's Notebook")
        // notebookbg(width);
    }
    if (bgSelect > 125 && bgSelect < 160) {
        features.push("Scene: 3D Grid")
        // grid3Dbg();
    }
    if (bgSelect > 159 && bgSelect < 180) {
        features.push("Scene: Retrowave")
        // horizonbg();
    }
    if (bgSelect > 179 && bgSelect < 190) {
        features.push("Scene: Sprinkles")
        // sprinklesbg();
    }
    if (bgSelect > 189 && bgSelect < 200) {
        features.push("Scene: Vibing Sprinkles")
        // sprinklesGradientbg();
    }
    if (bgSelect > 199 && bgSelect < 226) {
        features.push("Scene: Memphis")
        // wormsbg();
    }
    if (bgSelect > 225) {
        features.push("Scene: Vibing Grid")
        // fakegridbg();
    }
}
if (type == "Dark") {
    if (bgSelect < 8) {
        features.push("Scene: Dots")
        // dotsbg();
    }
    if (bgSelect > 7 && bgSelect < 17) {
        features.push("Scene: Uniform")
        // background(00, 00, 00);
    }
    if (bgSelect > 16 && bgSelect < 26) {
        features.push("Scene: Starscape")
        // starscapebg(randomOffset4, randomOffset5);
    }
    if (bgSelect > 25 && bgSelect < 100) {
        features.push("Scene: Grid")
        // gridbg();
    }
    if (bgSelect > 99 && bgSelect < 126) {
        features.push("Scene: 3D Grid")
        // grid3Dbg();
    }
    if (bgSelect > 125 && bgSelect < 176) {
        features.push("Scene: Retrowave")
        // horizonbg();
    }
    if (bgSelect > 175 && bgSelect < 227) {
        features.push("Scene: 90's Notebook")
        bgType = "notebook"
        // notebookbg();
    }
    if (bgSelect > 226) {
        features.push("Scene: Vibing Grid")
        // fakegridbg();
    }
}
if (type == "Based") {
    features.push("Scene: Void")

}
let framingShape = xx(22);
if (framingShape > -1 && framingShape < 8 && bgType != "notebook") {
    features.push("Shape: 90's Notebook Circle")
}
if (framingShape > 7 && framingShape < 16) {
    frameShape = "ellipse";
    features.push("Shape: Circle")
}
if (framingShape > 15 && framingShape < 26) {
    frameShape = "square";
    features.push("Shape: Square")
}
if (framingShape > 25 && framingShape < 41) {
    frameShape = "default_triangle";
    features.push("Shape: Triangle")
}
if (framingShape > 40 && framingShape < 50) {
    frameShape = "gradient_default_triangle";
    features.push("Shape: Vibing Triangle")
}
if (framingShape > 249 && bgType == "grid") framingShape = 50;
if (framingShape > 49 && framingShape < 75) {
    frameShape = "gradient_flipped_triangle";
    features.push("Shape: Vibing Triangle")
}
if (framingShape > 74 && framingShape < 120) {
    frameShape = "flipped_triangle";
    features.push("Shape: Triangle")
}
if (framingShape > 119 && framingShape < 150) {
    frameShape = "gradientellipse";
    features.push("Shape: Vibing Circle")
}
if (framingShape > 149 && framingShape < 225) {
    frameShape = "inverse_flipped_triangle";
    features.push("Shape: Triangle")
}
if (framingShape > 224 && framingShape < 250) {
    frameShape = "default_flipped_triangle";
    features.push("Shape: Triangle")
}
if (framingShape > 249 && bgType != "grid") {
    frameShape = "gridTriangle";
    features.push("Shape: Grid Triangle")
}
let curveType = xx(14);
if (curveType < 16) {
features.push("Flourish: Vibing Flourish")
}
if (curveType > 15 && curveType < 65) {
features.push("Flourish: Regular Flourish")
}
if (curveType > 64 && curveType < 128) {
features.push("Flourish: Regular Flourish")
   }
if (curveType > 129 && curveType < 241) {
    features.push("Flourish: Regular Flourish")
}
if (curveType > 240) {
   features.push("Flourish: Vibing Flourish")
}
console.log(features)
function xx(a) {
    return parseInt(hash.substring(a, a + 2), 16)
}
