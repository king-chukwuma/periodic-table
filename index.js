const period1 = document.querySelectorAll(".period");

let j = 1;
let k = 0; // count of nodeList Traversal



let contentArray = ["H", " ", "He"];
let numberOfGroup = 3;

let periodContent  = {
    period1: {
        content: ['A', '', 'C']
    },
    period2: {
        number: 9,
        content: ['Li', 'Be', ' ','B','C','N','O', 'F', 'Ne']
    },
    period3: {
        number: 3,
        content: ['A', 'B', 'C']
    },
    period4: {
        number: 3,
        content: ['A', 'B', 'C']
    },
    period5: {
        number: 3,
        content: ['A', 'B', 'C']
    },
    period6: {
        number: 3,
        content: ['A', 'B', 'C']
    },
    period7: {
        number: 3,
        content: ['A', 'B', 'C']
    },
    period8: {
        number: 3,
        content: ['A', 'B', 'C']
    },
}

let content = [
    ['H', '', 'He'],
    ['Li', 'Be', ' ','B','C','N','O', 'F', 'Ne'],
    ['Na', 'Mg', ' ', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar'],
    ['K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn','Fe', 'Co', 'Ni', 'Cu', 'Zn','Ga', 'Ge', 'As', 'Se', 'Br', 'Kr'],
    ['Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe'],
    ['Cs', 'Bs', 'La', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn'],
    ['Fr', 'Ra', 'Ac', 'Rf', 'Db', , 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn', 'Nh', 'Fl' , 'Mc', 'Lv', 'Ts', 'Og']
]

console.log(content[1])


function createGroupsPerPeriod(number, contentArray){

    for (let i = 0; i < number; i++){
        let div = document.createElement('div');
        let className1 = `elements-${j}`
        let className2 = `element`
        div.classList.add(className1)
        div.classList.add(className2)
        div.textContent = contentArray[i];
        // period1[k].appendChild(div);
        j++;
        k++;
    }

}

createGroupsPerPeriod(content[0].length,content[0]);