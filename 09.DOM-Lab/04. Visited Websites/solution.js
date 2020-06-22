function solve() {
    const anchor = Array.from(document.querySelectorAll("a"));
    const counts = anchor.map(el => el.nextElementSibling.innerHTML.split(" ")[1]);
    let container = document.querySelector("#page1 > .middled");
    container.addEventListener("click", function (e) {
        const target = e.target;
        const parent = e.target.parentElement;
        const isNotTargetAnchor = e.target.localName !== "a";
        const isNotTargetParent = (parent && parent.localName !== "a");

        if (isNotTargetAnchor && isNotTargetParent) {
            return;
        }
        const targetAnchor = isNotTargetAnchor ? parent : target;

        let counterIndex = anchor.indexOf(targetAnchor);
        if (counterIndex === -1) {
            return;
        }
        counts[counterIndex]++;
        const paragraph = targetAnchor.nextElementSibling;
        paragraph.innerHTML = `visited ${counts[counterIndex]} times`
    });

}