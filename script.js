// for take input of addition and subtraction

function takeinput() {
    window.row = document.getElementById('row').value;
    window.column = document.getElementById('column').value;
    console.log(row, column);
    document.getElementById('mainbox').style['display'] = 'block';
    document.getElementById('ansbtn').style['display'] = 'block';
    let matrix1 = document.getElementById('matrix1');
    matrix1.style['grid-template-columns'] = `repeat(${column},80px)`;
    matrix1.style['grid-template-row'] = `repeat(${row},80px)`;
    let ids = 1;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            boxx = document.createElement('input');
            boxx.type = 'number';
            matrix1.appendChild(boxx);
            boxx.id = `a${ids}`;
            boxx.classList.add('box');
            ids++;
            console.log('done')
        }
    }

    let matrix2 = document.getElementById('matrix2');
    matrix2.style['grid-template-columns'] = `repeat(${column},80px)`;
    matrix2.style['grid-template-row'] = `repeat(${row},80px)`;
    ids = 1;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            boxx = document.createElement('input');
            boxx.type = 'number';
            matrix2.appendChild(boxx);
            boxx.id = `b${ids}`;
            boxx.classList.add('box');
            ids++;
            console.log('done')
        }
    }

    let ans = document.getElementById('ans');
    ans.style['grid-template-columns'] = `repeat(${column},80px)`;
    ans.style['grid-template-row'] = `repeat(${row},80px)`;
    ids = 1;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            boxx = document.createElement('div');
            ans.appendChild(boxx);
            boxx.id = `ans${ids}`;
            boxx.classList.add('box');
            ids++;
            console.log('done')
        }
    }

    document.getElementById('submit-button').onclick = 'null';
}
// for addtion
function addans() {
    let a = [];
    let b = [];
    let ids = 1;
    document.getElementById('ans').style['display'] = 'grid'
    for (let i = 0; i < window.row; i++) {
        a[i] = [];
        b[i] = [];
        for (let j = 0; j < window.column; j++) {
            a[i][j] = document.getElementById(`a${ids}`).valueAsNumber;
            b[i][j] = document.getElementById(`b${ids}`).valueAsNumber;
            document.getElementById(`ans${ids}`).innerHTML = a[i][j] + b[i][j];
            ids++;

        }
    }
}
// for subtraction
function subans() {
    let a = [];
    let b = [];
    let ids = 1;
    document.getElementById('ans').style['display'] = 'grid'
    for (let i = 0; i < window.row; i++) {
        a[i] = [];
        b[i] = [];
        for (let j = 0; j < window.column; j++) {
            a[i][j] = document.getElementById(`a${ids}`).valueAsNumber;
            b[i][j] = document.getElementById(`b${ids}`).valueAsNumber;
            document.getElementById(`ans${ids}`).innerHTML = a[i][j] - b[i][j];
            ids++;

        }
    }
}


// for take input of transpose
function transinput() {
    window.row = document.getElementById('row').value;
    window.column = document.getElementById('column').value;
    console.log(row, column);
    document.getElementById('mainbox').style['display'] = 'block';
    document.getElementById('ansbtn').style['display'] = 'block';
    let matrix1 = document.getElementById('matrix1');
    matrix1.style['grid-template-columns'] = `repeat(${column},80px)`;
    matrix1.style['grid-template-row'] = `repeat(${row},80px)`;
    let ids = 1;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            boxx = document.createElement('input');
            boxx.type = 'number';
            matrix1.appendChild(boxx);
            boxx.id = `a${ids}`;
            boxx.classList.add('box');
            ids++;
            console.log('done')
        }
    }

    let ans = document.getElementById('ans');
    ans.style['grid-template-columns'] = `repeat(${row},80px)`;
    ans.style['grid-template-row'] = `repeat(${column},80px)`;
    ids = 1;
    for (let i = 0; i < column; i++) {
        for (let j = 0; j < row; j++) {
            boxx = document.createElement('div');
            ans.appendChild(boxx);
            boxx.id = `ans${ids}`;
            boxx.classList.add('box');
            ids++;
            console.log('done')
        }
    }

    document.getElementById('submit-button').onclick = 'null';
}
// do the transpose
function transans() {
    let a = [];
    let ids = 1;
    document.getElementById('ans').style['display'] = 'grid'
    for (let i = 0; i < window.row; i++) {
        a[i] = [];
        for (let j = 0; j < window.column; j++) {
            a[i][j] = document.getElementById(`a${ids}`).valueAsNumber;
            ids++;
        }
    }
    ids = 1;
    for (let i = 0; i < window.column; i++) {
        for (let j = 0; j < window.row; j++) {
            document.getElementById(`ans${ids}`).innerHTML = a[j][i];
            ids++;
        }
    }
}


// for multiplication input
function mulinput() {
    window.row1 = document.getElementById('row1').value;
    window.column1 = document.getElementById('column1').value;
    window.row2 = document.getElementById('row2').value;
    window.column2 = document.getElementById('column2').value;

    if (column1 == row2) {
        document.getElementById('mainbox').style['display'] = 'block';
        document.getElementById('ansbtn').style['display'] = 'block';
        let matrix1 = document.getElementById('matrix1');
        matrix1.style['grid-template-columns'] = `repeat(${column1},80px)`;
        matrix1.style['grid-template-row'] = `repeat(${row1},80px)`;
        let ids = 1;
        for (let i = 0; i < row1; i++) {
            for (let j = 0; j < column1; j++) {
                boxx = document.createElement('input');
                boxx.type = 'number';
                matrix1.appendChild(boxx);
                boxx.id = `a${ids}`;
                boxx.classList.add('box');
                ids++;
                console.log('done')
            }
        }

        let matrix2 = document.getElementById('matrix2');
        matrix2.style['grid-template-columns'] = `repeat(${column2},80px)`;
        matrix2.style['grid-template-row'] = `repeat(${row2},80px)`;
        ids = 1;
        for (let i = 0; i < row2; i++) {
            for (let j = 0; j < column2; j++) {
                boxx = document.createElement('input');
                boxx.type = 'number';
                matrix2.appendChild(boxx);
                boxx.id = `b${ids}`;
                boxx.classList.add('box');
                ids++;
                console.log('done')
            }
        }

        let ans = document.getElementById('ans');
        ans.style['grid-template-columns'] = `repeat(${column2},80px)`;
        ans.style['grid-template-row'] = `repeat(${row1},80px)`;
        console.log(column1, row2);
        ids = 1;
        for (let i = 0; i < row1; i++) {
            for (let j = 0; j < column2; j++) {
                boxx = document.createElement('div');
                ans.appendChild(boxx);
                boxx.id = `ans${ids}`;
                boxx.classList.add('box');
                ids++;
                console.log('done')
            }
        }
    }
    else {
        document.getElementById('ans').style['display'] = 'flex';
        document.getElementById(`ans`).innerHTML='Multiplication is not Possible'
    }
    document.getElementById('submit-button').onclick = 'null';
}
// for multiplication
function mulans() {
    let a = [];
    let b = [];
    let ids = 1;
    document.getElementById('ans').style['display'] = 'grid'
    for (let i = 0; i < window.row1; i++) {
        a[i] = [];
        for (let j = 0; j < window.column1; j++) {
            a[i][j] = document.getElementById(`a${ids}`).valueAsNumber;
            ids++;
        }
    }
    ids = 1;
    for (let i = 0; i < window.row2; i++) {
        b[i] = [];
        for (let j = 0; j < window.column2; j++) {
            b[i][j] = document.getElementById(`b${ids}`).valueAsNumber;
            ids++;
        }
    }
    ids = 1;
    let multi = [];
    for (let i = 0; i < window.row1; i++) {
        multi[i] = [];
        for (let j = 0; j < window.column2; j++) {
            multi[i][j] = 0;
            for (let k = 0; k < window.column2; k++) {
                multi[i][j] = multi[i][j] + a[i][k] * b[k][j];
            }
            document.getElementById(`ans${ids}`).innerHTML = multi[i][j];
            ids++;
        }
    }
}
var inverse_flag = 0;

// for adjoint calculation
function adjans() {
    let a = [];
    let ids = 1;
    document.getElementById('ans').style['display'] = 'grid'
    for (let i = 0; i < 3; i++) {
        a[i] = [];
        for (let j = 0; j < 3; j++) {
            a[i][j] = document.getElementById(`a${ids}`).valueAsNumber;
            ids++;
        }
    }
    let m = 0;
    let n = 0;
    let adj = [];
    let b = [];
    for (let i = 0; i < 3; i++) {
        adj[i] = [];
        for (let j = 0; j < 3; j++) {
            m = 0;

            for (let k = 0; k < 3; k++) {
                n = 0;
                b[m] = [];
                for (let l = 0; l < 3; l++) {
                    if (k != i && l != j) {
                        b[m][n] = a[k][l];
                        n++;
                    }
                }
                if (k != i)
                    m++;
            }
            adj[i][j] = ((-1) ** (i + j)) * ((b[0][0] * b[1][1]) - (b[0][1] * b[1][0]));
        }
    }
    if (inverse_flag == 1) {
        return adj;
    }
    ids = 1;
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            document.getElementById(`ans${ids}`).innerHTML = adj[j][i];
            ids++;
        }
    }
}


// for dereminant soluton
function determinantans() {
    let a = [];
    let ids = 1;
    document.getElementById('ans').style['display'] = 'flex';
    for (let i = 0; i < 3; i++) {
        a[i] = [];
        for (let j = 0; j < 3; j++) {
            a[i][j] = document.getElementById(`a${ids}`).valueAsNumber;
            ids++;
        }
    }
    let m = 0;
    let n = 0;
    let determinant = 0;
    let b = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            m = 0;

            for (let k = 0; k < 3; k++) {
                n = 0;
                b[m] = [];
                for (let l = 0; l < 3; l++) {
                    if (k != i && l != j) {
                        b[m][n] = a[k][l];
                        n++;
                    }
                }
                if (k != i)
                    m++;
            }
            determinant = determinant + (((-1) ** (i + j)) * a[1][j] * ((b[0][0] * b[1][1]) - (b[0][1] * b[1][0])));
        }
    }
    // for(let i=0;i<3;i++){
    //     determinant=determinant+(a[1][i]*(a[]))
    // }
    if (inverse_flag == 1) {
        return determinant;
    }
    document.getElementById(`ans`).innerHTML = determinant;
}


// for inverse calculation
function inverseans() {
    inverse_flag = 1;
    
    let dete = determinantans();
    if (dete == 0 ) {
        document.getElementById('ans').style['display'] = 'flex';
        document.getElementById(`ans`).innerHTML='Inverse Not Exisit'
        // console.log('inverse not exist');
        return;
    }
    else {
        document.getElementById('ans').style['display'] = 'flex';
        let adj = adjans();
        let ids = 1;
        
        for (i = 0; i < 3; i++) {
            for (j = 0; j < 3; j++) {
                document.getElementById(`ans${ids}`).innerHTML = `${adj[j][i]}/${dete}`;
                ids++;
            }
        }

    }
}