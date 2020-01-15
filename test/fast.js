'use strict';

const CustomError = (message, type) => ({
    message: `Error: ${message}`,
    type: `API::${type}`
})

const whiteList = ['.png', '.gif', '.jpg'];

const data = [];

const isValidImageFIles = (data, type) => {
    data.forEach(item => {
        // console.log(item);
        const ret = whiteList.find(_item => item.endsWith(_item));
        if(ret) return true;
        return false;
    })
}

if(!isValidImageFIles(['fast.pptx'])){
    throw CustomError('isValidImageFiles','invalidRequest');
}
