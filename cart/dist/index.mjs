import {faker as $ktuuV$faker} from "@faker-js/faker";


const $b961a1332ddaab65$export$5d832d6580b26c5 = ()=>{
    return (0, $ktuuV$faker).name.fullName();
};
const $b961a1332ddaab65$export$2a3c5093b460106e = ()=>{
    return Math.floor(Math.random() * 10);
};
const $b961a1332ddaab65$export$3b6a672473cc0a85 = (d = document)=>{
    const fragment = d.createDocumentFragment();
    const randomCartNumber = $b961a1332ddaab65$export$2a3c5093b460106e();
    const randomName = $b961a1332ddaab65$export$5d832d6580b26c5();
    const h2 = d.createElement("h2");
    h2.innerText = "Cart";
    const p = d.createElement("p");
    p.innerText = `${randomName} have ${randomCartNumber} item in your cart`;
    fragment.appendChild(h2);
    fragment.appendChild(p);
    return fragment;
};
var $b961a1332ddaab65$export$2e2bcd8739ae039 = $b961a1332ddaab65$export$3b6a672473cc0a85;


export {$b961a1332ddaab65$export$5d832d6580b26c5 as generateName, $b961a1332ddaab65$export$2a3c5093b460106e as generateCart, $b961a1332ddaab65$export$3b6a672473cc0a85 as createCartFragment, $b961a1332ddaab65$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=index.mjs.map
