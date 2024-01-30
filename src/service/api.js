import axios from 'axios';
import qs from 'qs';

const baseURL = "http://localhost:3000";

const UPLOAD_IMAGE = function (request) {
    return new Promise((resolve, reject) => {

        var data = new FormData();
        data.append('image', request.image);

        var config = {
            method: 'post',
            url: `${baseURL}/blog/image`,
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

const ADD_BLOG = function (request) {
    return new Promise((resolve, reject) => {

        var data = new FormData();

        var data = qs.stringify({
            'title': 'test',
            'body': JSON.stringify(request.body),
            'author': 'srijan',
            'previewImage': request.previewImage
        });

        var config = {
            method: 'post',
            url: `${baseURL}/blog`,
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

export { ADD_BLOG, UPLOAD_IMAGE };
