//rsf!!!
import React, { useState} from 'react';
import PostItem from './components/PostItem';
import MyInput from './UI/input/MyInput';



function Form() {
    function addPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then(data => {
                setPostst(data);
                console.log(data)
                });
    }
    const [posts, setPostst] = useState([])

    const [ post, setPost] = useState({title: '', body: ''})
    
    const addNewPost = (e) => {
        e.preventDefault()
        setPostst([...posts, {...post, id: Date.now()}])
        setPost({title: '', body: ''})
    }

    const removePost = (post) => {
        setPostst(posts.filter(p => p.id !== post.id))
    }

   
    return (
        <div>
            <form>
                <MyInput 
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    type="text" 
                    placeholder='заголовок'
                /> 
                <MyInput 
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    type="text" 
                    placeholder='текст'
                /> 
                <button onClick={addNewPost}>добавить</button>

            </form>
            <div>
                {posts.map((post, index, remove) => 
                    <PostItem  remove={removePost} number={index + 1} post={post}/>
                )}
            </div>
            <button 
                onClick={addPosts}>
                     посты
            </button>
        </div>
    );
}

export default Form;