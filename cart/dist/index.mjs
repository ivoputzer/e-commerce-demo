import {faker as $ktuuV$faker} from "@faker-js/faker";


function $b961a1332ddaab65$export$2e2bcd8739ae039(d = document) {
    const fragment = d.createDocumentFragment();
    const randomCartNumber = Math.random();
    const h2 = d.createElement("h2");
    h2.innerText = "Cart";
    const p = d.createElement("p");
    p.innerText = `${(0, $ktuuV$faker).name.fullName()} have ${randomCartNumber} item in your cart`;
    fragment.appendChild(h2);
    fragment.appendChild(p);
    return fragment;
}


export {$b961a1332ddaab65$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=index.mjs.map
