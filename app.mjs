import {
    fileReader
} from './fileReader.mjs';

const main = async () => {
    await fileReader('./text.txt', 'utf8')
        .then((val) => {
            return val;
        })
        .catch((reason) => {
            throw console.log(reason);
        });
}

main();