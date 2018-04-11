const gc = document.getElementById("canvas").getContext("2d");
const width = document.getElementById("canvas").getAttribute("width");
const height = document.getElementById("canvas").getAttribute("height");

// time measure (duration)
let start;
let elapsed;

// the Array to sort
const points = new Array(600);

function paint() {
    gc.fillStyle = "black";
    for (let i = 0; i < points.length; i++) {
        gc.fillRect(i, points[i], 2, 2);
    }
}

function shuffle() {
    gc.fillStyle = "white";
    gc.fillRect(0, 0, width, height);

    gc.fillStyle = "black";
    for (let i = 0; i < points.length; i++) {
        points[i] = Math.floor((Math.random() * 1000)) % height;
        gc.fillRect(i, points[i], 2, 2);
    }
}

// --------------------------------------------------------------
function start_bubblesort() {
    start = new Date().getTime();
    bubblesort();
}

function bubblesort() {
    let fertig = true;
    const len = points.length;
    for (let i = 0; i < len - 1; i++) {
        if (points[i] > points[i + 1]) {
            let help;

            //austauschen
            //löschen
            gc.fillStyle = "white";
            gc.fillRect(i, points[i], 2, 2);
            gc.fillRect(i + 1, points[i + 1], 2, 2); // x , y , width , height

            help = points[i];
            points[i] = points[i + 1];
            points[i + 1] = help;

            fertig = false;

            gc.fillStyle = "black";
            gc.fillRect(i, points[i], 2, 2);
            gc.fillRect(i + 1, points[i + 1], 2, 2);
        }
    }

    // nochmals?
    if (fertig == false)
        setTimeout(bubblesort, 10); // in 10 ms nochmals sortieren
    else {
        elapsed = new Date().getTime() - start;
        document.getElementById("duration").innerHTML = "duration " + elapsed + " ms";
    }
}

// --------------------------------------------------------------
function start_quicksort() {
    const len = points.length;

    start = new Date().getTime();
    quicksort(0, len - 1);
}


function quicksort(left, right) {
    let fertig = true;
    let i = left;
    let j = right;
    let pivotidx = (left + right) / 2;
    let pivot = parseInt(points[pivotidx.toFixed()]); //toFixed() = runden
    //partition
    while (i <= j) {
        while (parseInt(points[i]) < pivot) {
            i += 1;
        }
        while (parseInt(points[j]) > pivot) {
            j -= 1;
        }
        if (i <= j) {

            gc.fillStyle = "white";
            gc.fillRect(i, points[i], 2, 2);
            gc.fillRect(i + 1, points[i + 1], 2, 2);
            gc.fillRect(j, points[j], 2, 2);
            gc.fillRect(j + 1, points[j + 1], 2, 2);

            const tmp = points[i];
            points[i] = points[j];
            points[j] = tmp;
            i++;
            j--;

            fertig = false;
            gc.fillStyle = "black";
            gc.fillRect(i, points[i], 2, 2);
            gc.fillRect(i + 1, points[i + 1], 2, 2);
            gc.fillRect(j, points[j], 2, 2);
            gc.fillRect(j + 1, points[j + 1], 2, 2);
        }
    }

    if (fertig == false) {
        setTimeout(quicksort, 10);
    } else {
        elapsed = new Date().getTime() - start;
        document.getElementById("duration").innerHTML = "duration " + elapsed + " ms";
    }

    //recursion
    if (left < j) {
        quicksort(left, j);
    }
    if (i < right) {
        quicksort(i, right);
    }
}
