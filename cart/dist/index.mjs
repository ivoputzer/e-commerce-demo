import {faker as $ktuuV$faker} from "@faker-js/faker";


function $b961a1332ddaab65$var$createCartFragment(d = document) {
    const fragment = d.createDocumentFragment();
    const randomCartNumber = Math.random();
    const name = (0, $ktuuV$faker).name.firstName();
    const h2 = d.createElement("h2");
    h2.innerText = "Cart";
    const p = d.createElement("p");
    p.innerText = `${name} have ${randomCartNumber} item in your cart`;
    fragment.appendChild(h2);
    fragment.appendChild(p);
    return fragment;
}
var $b961a1332ddaab65$export$2e2bcd8739ae039 = $b961a1332ddaab65$var$createCartFragment;


export {$b961a1332ddaab65$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=index.mjs.map
