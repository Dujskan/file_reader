import { fileReader } from './fileReader.mjs';

const main = async () => {
    console.log(fileReader);
    let input = await fileReader('./day3.txt', 'utf8')
        .then((val) => {
            return val;
        })
        .catch((reason) => {
            throw console.log(reason);
        });
    console.log(input);
}

main();
