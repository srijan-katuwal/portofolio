import axios from 'axios';
import qs from 'qs';

const API_URL = import.meta.env.VITE_API_URL;

const UPLOAD_IMAGE = function (request) {
    return new Promise((resolve, reject) => {

        var data = new FormData();
        data.append('image', request.image);

        var config = {
            method: 'post',
            url: `${API_URL}/blog/image`,
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
            'title': request.title,
            'body': JSON.stringify(request.body),
            'author': request.author,
            'summary': request.summary,
            'previewImage': request.previewImage
        });

        var config = {
            method: 'post',
            url: `${API_URL}/blog`,
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

const GET_IMAGES = function () {
    return new Promise((resolve, reject) => {

        var config = {
            method: 'get',
            url: `${API_URL}/blog/images`,
            headers: {}
        };

        axios(config)
            .then(function (response) {
                resolve(response);
            })
            .catch(function (error) {
                reject(error);
            });
    })
}

const GET_BLOGS = function() {
    return new Promise((resolve, reject) => {

        var config = {
            method: 'get',
            url: `${API_URL}/blog`,
        };

        axios(config)
            .then(function (response) {
                resolve(response);
            })
            .catch(function (error) {
                reject(error);
            });
    })
}

export { ADD_BLOG, UPLOAD_IMAGE, GET_IMAGES, GET_BLOGS };
