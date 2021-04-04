import {getPercents} from "../../utils/getPercent.js";
describe ("test for function getPercents", () => {
	it("the function returns result of percent of the number", ()=>{
	expect (getPercents(30,200)).toBe(60);
	});
		
	});

