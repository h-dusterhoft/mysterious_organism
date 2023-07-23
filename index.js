// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//let strand1 = mockUpStrand();
//let strand2 = mockUpStrand();
//console.log(strand1);
//console.log(strand2);

const pAequorFactory = (num, dnaArr) => {
  return {
    _specimenNum: num,
    _dna: dnaArr,
    mutate() {
      let i = Math.floor(Math.random() * 15);
      let randBase = this._dna[i];
      let newBase = returnRandBase();
      if (randBase !== newBase) {
        this._dna.splice(i, 1, newBase);
      }
      return this._dna;
    },
    compareDNA(altPAequor) {
       let sharedDNA = [];
       for (let i = 0; i < this._dna.length; i++) {
         if (this._dna[i] === altPAequor._dna[i]) {
           sharedDNA.push(this._dna[i]);
         }
       }
      //console.log(sharedDNA);
      let percentage = ((sharedDNA.length / 15) * 100).toFixed();
      console.log(`specimen ${this._specimenNum} and specimen ${altPAequor._specimenNum} have ${percentage}% DNA in common`);
    },
    willLikelySurvive() {
      let survivalBases = this._dna.filter(el => el === 'C' || el === 'G');
      //console.log(survivalBases);
      let survivalPercent = ((survivalBases.length / 15) * 100).toFixed();
      //console.log(survivalPercent);
      if (survivalPercent >= 60) {
        return true;
      } else {
        return false;
      }
    }
  };
};

//console.log(pAequorFactory(0, strand1)._dna);
//let altPAequor = pAequorFactory(100, strand2);
//console.log(pAequorFactory(0, strand1).compareDNA(altPAequor));


const specimen = [];
let idcounter = 1;

while (specimen.length < 30) {
  let newOrg = pAequorFactory(idcounter, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    specimen.push(newOrg);
  }
  idcounter++;
}

console.log(specimen);










