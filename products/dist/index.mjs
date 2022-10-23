import {faker as $ktuuV$faker} from "@faker-js/faker";


var $b961a1332ddaab65$export$2e2bcd8739ae039 = $b961a1332ddaab65$var$createProductFragment;
function $b961a1332ddaab65$var$createProductFragment() {
    const fragment = document.createDocumentFragment();
    const h2 = document.createElement("h2");
    h2.innerText = "Products for sale";
    const ul = document.createElement("ul");
    [
        (0, $ktuuV$faker).commerce.product(),
        (0, $ktuuV$faker).commerce.product(),
        (0, $ktuuV$faker).commerce.product()
    ].forEach((product)=>{
        const li = document.createElement("li");
        li.innerText = product;
        ul.appendChild(li);
    });
    fragment.appendChild(h2);
    fragment.appendChild(ul);
    return fragment;
}


export {$b961a1332ddaab65$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=index.mjs.map
