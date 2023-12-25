// open full review div

function testReviewClick(el) {
    let setI = 0;
    
    if (setI == 0) {
        el.style.cssText = "height:unset; max-height:unset";
        setI++;
    } else {
        el.style.cssText = "height:40vh; max-height:350px";
        setI--;
    }
}