const $ = function (v) {
    
    const placeholder = (c) => {
        console.log(v+c)
    }

    return {
        test: placeholder
    }
}