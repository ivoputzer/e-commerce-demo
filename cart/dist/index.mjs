import {faker as $ktuuV$faker} from "@faker-js/faker";


function $b961a1332ddaab65$export$2e2bcd8739ae039() {
    const fragment = document.createDocumentFragment();
    const randomCartNumber = Math.random();
    const h2 = document.createElement("h2");
    h2.innerText = "Cart";
    const p = document.createElement("p");
    p.innerText = `${(0, $ktuuV$faker).name.firstName()} have ${randomCartNumber} item in your cart`;
    fragment.appendChild(h2);
    fragment.appendChild(p);
    return fragment;
}


export {$b961a1332ddaab65$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=index.mjs.map
