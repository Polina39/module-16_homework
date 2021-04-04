export function getMaxNum(a, b, c) {
    let result;
    if (a > b) {
        if (a > c) {
         
   result = "max is a";
        } else {
            result = "max is c";
        }
    } else if (b > c) {
        result = "max is b";
    } else {
        result = "max is c";
    }
    return result;
}