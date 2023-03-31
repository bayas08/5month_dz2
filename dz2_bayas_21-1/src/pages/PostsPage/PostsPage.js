import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Button, CircularProgress} from "@mui/material";


export default function PostsPage() {
    const [post, setPost] = useState([])
    const [load, setLoad] = useState(false)
    const navigate = useNavigate()

    const back = () => {
        navigate(-1)
    }

    useEffect(() => {
        setLoad(true)
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(resp => resp.json())
            .then(data => setPost(data))
            .finally(() => setLoad(false))
    }, [])
    return (
        <>
            {
                load
                    ?
                    <div>
                        <CircularProgress/>
                    </div>
                    :
                    <>
                        <h2>Posts</h2>
                        <Button variant='contained' onClick={back}>Back</Button>
                        {post.map( i => <div key={i?.id}>
                                <Link to={`/posts/${i?.id}`}>
                                    <img src={i?.url} alt=""/>
                                </Link>
                                <p>{i?.title}</p>
                            </div>
                        )}
                    </>
            }
        </>
    );
}