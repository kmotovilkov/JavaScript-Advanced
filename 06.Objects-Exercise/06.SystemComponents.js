function systemComponents(arr) {
    let systems = new Map();

    for (let line of arr) {
        let [system, component, subcomponent] = line.split(" | ");


        if (!systems.get(system)) {
            systems.set(system, new Map());
        }
        if (!systems.get(system).get(component)) {
            systems.get(system).set(component, [])
        }
        systems.get(system).get(component).push(subcomponent);
    }

    let systemsSort = Array.from(systems.keys()).sort((a, b) => sortSystems(a, b));

    for (let system of systemsSort) {
        console.log(system);
        let componentsSort = Array.from(systems.get(system).keys()).sort((c1, c2) => sortComponents(system, c1, c2));

        for (let component of componentsSort) {
            console.log(`|||${component}`);
            systems.get(system).get(component).forEach(sc => console.log(`||||||${sc}`))
        }
    }

    function sortSystems(a, b) {
        if (systems.get(a).size !== systems.get(b).size) {
            return systems.get(b).size - systems.get(a).size;
        } else {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        }
    }

    function sortComponents(system, a, b) {
        return systems.get(system).get(b).length - systems.get(system).get(a).length;
    }
}

systemComponents(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']
);