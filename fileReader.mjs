import fs from 'fs';

export const fileReader = (path, encoding) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, { encoding: encoding }, (err, data) => {
            err ? reject(err) : resolve(data);
        });
    });
};

