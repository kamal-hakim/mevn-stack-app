import axios from 'axios'

const url = 'http://localhost:5000/api/posts';

class PostService {
    static async getPosts() {
        var ret = null;
        await axios.get(url)
        .then((res) => {
            const data = res.data;
            ret =  data.map(post => ({
                ...post,
                createdAt: new Date(post.createdAt)
            }));
        })
        .catch((err) => {
            ret =  err.data;
        })
        return ret;
    }

    static insertPost(text) {
        return axios.post(url, {
            text: text
        });
    }

    static deletePost(id) {
        return axios.delete(`${url}/${id}`);
    }
}

export default PostService