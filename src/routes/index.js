import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import CreateBlog from '../views/CreateBlog.vue'

export default [
    { path: '/', name: 'home', component: Home },
    { path: '/blog', name: 'blog', component: Blog },
    { path: '/blog/create', name: 'createBlog', component: CreateBlog },
]