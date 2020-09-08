function solve(worker) {
    if (worker.dizziness) {
        worker.levelOfHydrated += 0.1 * worker.weight * worker.experience;
        worker.dizziness = false;
    }
    return worker;
}

const worker ={ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
;
console.log(solve(worker));
