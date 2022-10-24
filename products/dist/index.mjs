import {faker as $2Ac6m$faker} from "@faker-js/faker";


function $2b174381e2ac1a4d$export$2e2bcd8739ae039(d = document) {
    const fragment = d.createDocumentFragment();
    const h2 = d.createElement("h2");
    h2.innerText = "Products for sale";
    const ul = d.createElement("ul");
    [
        (0, $2Ac6m$faker).commerce.product(),
        (0, $2Ac6m$faker).commerce.product(),
        (0, $2Ac6m$faker).commerce.product()
    ].forEach((product)=>{
        const li = d.createElement("li");
        li.innerText = product;
        ul.appendChild(li);
    });
    fragment.appendChild(h2);
    fragment.appendChild(ul);
    return fragment;
}


export {$2b174381e2ac1a4d$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=index.mjs.map
