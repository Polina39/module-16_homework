import {getMaxNum} from "../../getMaxNum/getMaxNum.js";

describe ('test for function getMaxNum',  ()=> {
	it ("max a", ()=>{
		expect(getMaxNum(3,2,1)).toBe("max is a")})
	it ("max b", ()=>{
		expect(getMaxNum(1,3,2)).toBe("max is b")})
	it ("max c", ()=>{
		expect(getMaxNum(1,2,3)).toBe("max is c")})
});