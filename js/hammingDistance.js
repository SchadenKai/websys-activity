const dna1 = "CAACCCC";
const dna2 = "CCAACAC";

function calculateDiff(firstDNA, secondDNA) {
    let count = 0;
    for(let i = 0; i < firstDNA.length; i++) {
        if (firstDNA.charAt(i) != secondDNA.charAt(i)) {
            count++;
        }
    }
    return count;
}
if (dna1.length == dna2.length) {
    let results = calculateDiff(dna1,dna2)
    console.log(results);
} else {
    console.log("The two DNA must have the same distance");
}