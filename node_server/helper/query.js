const db = require('../config/db');

const response = {
    status : 'failure',
    payload : []
};


const queryHelper = (query,type) => {
    return new Promise((resolve,reject) => {
        db.query(query,(err,data) => {
            if(err) {
                response.payload = err;
                reject(response);
            }
            response.status = 'success';
            response.payload = (type === 'select') ? data : true;
            resolve(response);
        });
    });
};

module.exports = queryHelper;