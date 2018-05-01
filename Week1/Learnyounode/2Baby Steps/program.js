var processArgumentsAmount = 0;
var processArgumentsSum = 0;

for (var i in process.argv) {
    
    processArgumentsAmount++;
    if (processArgumentsAmount == 3 || processArgumentsAmount == 4) {
        var arg = Number(process.argv[i])
        processArgumentsSum = arg + processArgumentsSum;
    }
}
console.log(processArgumentsSum);






