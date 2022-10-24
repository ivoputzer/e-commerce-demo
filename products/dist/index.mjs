import {faker as $2Ac6m$faker} from "@faker-js/faker";


function $2b174381e2ac1a4d$export$2e2bcd8739ae039() {
    const fragment = document.createDocumentFragment();
    const h2 = document.createElement("h2");
    h2.innerText = "Products for sale";
    const ul = document.createElement("ul");
    [
        (0, $2Ac6m$faker).commerce.product(),
        (0, $2Ac6m$faker).commerce.product(),
        (0, $2Ac6m$faker).commerce.product()
    ].forEach((product)=>{
        const li = document.createElement("li");
        li.innerText = product;
        ul.appendChild(li);
    });
    fragment.appendChild(h2);
    fragment.appendChild(ul);
    return fragment;
}


export {$2b174381e2ac1a4d$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=index.mjs.map
