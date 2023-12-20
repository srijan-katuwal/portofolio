import axios from 'axios';
import qs from 'qs';

const baseURL = "http://localhost:3000";

const addBlog = function (content) {
    var data = qs.stringify({
        'title': '1',
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
            return JSON.stringify(response.data);
        })
        .catch(function (error) {
            return error;
        });
}

export { addBlog };
