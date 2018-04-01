"use strict";
let gc = document.getElementById("canvas").getContext("2d");
console.log(document.getElementById("canvas").getContext("2d"));

let width = document.getElementById("canvas").getAttribute("width");
let height = document.getElementById("canvas").getAttribute("height");

// time measure (duration)
let start;
let elapsed;

// the Array to sort
let points = new Array(600);


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


//
// bubblesort
// --------------------------------------------------------------
function start_bubblesort() {
    start = new Date().getTime();
    bubblesort();
}

function bubblesort() {
    let fertig = true;
    let len = points.length;
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


//
// quicksort
// --------------------------------------------------------------
function start_quicksort() {
    let len = points.length;

    start = new Date().getTime();
    quicksort(0, len - 1);
}


function quicksort(left, right) {
    let fertig = true;
    let i = left;
    let j = right;
    let tmp;
    let pivotidx = (left + right) / 2;
    let pivot = parseInt(points[pivotidx.toFixed()]);
    /* partition */
    while (i <= j) {


        while (parseInt(points[i]) < pivot) {
            i++;
        }

        while (parseInt(points[j]) > pivot) {
            j--;
        }

        if (i <= j) {

            gc.fillStyle = "white";
            gc.fillRect(i, points[i], 2, 2);
            gc.fillRect(i + 1, points[i + 1], 2, 2);
            gc.fillRect(j, points[j], 2, 2);
            gc.fillRect(j + 1, points[j + 1], 2, 2);

            tmp = points[i];
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
        // console.log(elapsed);
    }


    /* recursion */
    if (left < j) {
        quicksort(left, j);
    }
    if (i < right) {
        quicksort(i, right);
    }
}


//
// SelectionSort
// --------------------------------------------------------------
function start_selectionsort() {
    alert("SelectionSort: Not implemented!");
}

function selectionsort() {

}

//
// ShellSort
// --------------------------------------------------------------
function start_shellsort() {
    alert("ShellSort: Not implemented!");
}

function shellsort() {

}