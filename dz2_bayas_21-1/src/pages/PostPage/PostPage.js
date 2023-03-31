import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Button, CircularProgress} from "@mui/material";

const PostPage = () => {
    const [post, setPost] = useState({})
    const [load, setLoad] = useState(false)
    const {id} = useParams()
    const navi = useNavigate()



    const back = () => {
        navi(-1)
    }

    useEffect(() => {
        setLoad(true)
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .then(resp => resp.json())
            .then(post => setPost(post))
            .finally(() => setLoad(false))
    }, [])

    return (
        <div>
            {
                load
                    ?
                    <div>
                        <CircularProgress/>
                    </div>
                    :
                    <>
                        <h2>Post</h2>
                        <Button variant='contained' onClick={back}>back</Button>
                        <div className="img">
                            <img src={post?.url} alt="icon"/>
                        </div>
                        <h2>{post?.title}</h2>
                        <div className="img">
                            <img src={post?.thumbnailUrl} alt="icon"/>
                        </div>
                    </>
            }
        </div>
    );
};

export default PostPage;