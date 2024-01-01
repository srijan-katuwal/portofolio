import axios from 'axios';
import qs from 'qs';

const baseURL = "http://localhost:3000";

const addBlog = function (content) {
    return new Promise((resolve, reject) => {

        var data = qs.stringify({
            'content': JSON.stringify(content),
            'author': 'srijan'
        });
        var config = {
            method: 'post',
            url: `${baseURL}/blog`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error);
            });
    })

}

export { addBlog };
