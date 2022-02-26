import { useEffect, useState } from "react";
import axios from "axios";

const NewsFeed = () => {

    const [list, setList] = useState(null);

    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://crypto-news-live3.p.rapidapi.com/news',
            headers: {
              'x-rapidapi-host': 'crypto-news-live3.p.rapidapi.com',
              'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
            }
        };
          
        axios.request(options).then(function (response) {
            console.log(response.data);
            setList(response.data.slice(0, 16))
        }).catch(function (error) {
            console.error(error);
        });
        
    }, [])
    
    console.log("LIST",list);

    return (
        <div className="newsfeed">
            <h1 className="text-blue ff-heading">Crypto News Feed</h1>
            {
                list?.map(item => { 
                    return (
                        <div className="article" key={item.url}>
                            <a className="link" href={item.url}>
                                <p className="text-blue ff-body">{item.title}</p>
                            </a>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default NewsFeed;