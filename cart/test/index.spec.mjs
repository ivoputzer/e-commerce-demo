import { equal, ok } from "assert";
import { JSDOM } from "jsdom";
import { domainToASCII } from "url";
import createCartFragment from "../index.mjs";




describe('cart', () =>{
	it('should invoke createFragmentCart', ()=>{
		const jdom = new JSDOM();
		const fragment = createCartFragment(jdom.window.document);
		ok(fragment instanceof jdom.window.DocumentFragment);
	})

})