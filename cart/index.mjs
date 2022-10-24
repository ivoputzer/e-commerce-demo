import { faker } from "@faker-js/faker";

export default function createCartFragment(doc = document) {

  
  const fragment = doc.createDocumentFragment();
  const randomCartNumber = Math.random();

  const h2 = doc.createElement("h2");
  h2.innerText = "Cart";

  const p = doc.createElement("p");
  p.innerText = `Hi ${faker.name.firstName()}, you have ${randomCartNumber} item in your cart`;

  fragment.appendChild(h2);
  fragment.appendChild(p);

  return fragment;
}
