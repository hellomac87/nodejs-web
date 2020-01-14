'use strict';
// error handling

const CustomError = (message) => {
    this.message = message;
    this.type = 'NotImageFileException';
}

try {
    const  imgTypes = ['.jpg', '.png', '.gif'];
    const filename = 'fast.doc';

    const isImageFIle = imgTypes.find(ext => filename.endsWith(ext));

    if(!isImageFIle){
        throw new CustomError('this is not an image file');
    }

} catch (e) {
    console.error(e);
}

