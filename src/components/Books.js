import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import '../App.css';
import { useNavigate } from 'react-router-dom';
function Books(){
    const navigate=useNavigate();
    const [books, setBooks] = useState([])
    const [disBooks,setDisBooks] = useState([]);
    useEffect(() => {
        const fetchBooks = async () => {
        const res = await axios.get(
            `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=1zpHZXDExVbgFIKX0WG51nbB5Nlyhuv2`
        )
        setDisBooks(res.data.results.books)
        setBooks(res.data.results.books)
        }
        fetchBooks()
    }, [])
    function search(tit){
        console.log(tit);
        let newbooks=books.filter((val) => {
            let title=val.title.toLowerCase();
            return title.includes(tit.toLowerCase());
        });
        setDisBooks(newbooks);
    }
    return (
        <div>
            <center>
                <h3 style={{fontSize:"30px", textDecoration:"underline"}}>
                    Books
                </h3>
                <input type="text" onChange={(event)=>{search(event.target.value);}}></input>
            </center>
            <div id="all-books">
                {
                    disBooks.map((val)=>{
                        return <>
                        <div id="books-details">
                            <img id="book-img" alt={val.title} src={val.book_image}></img>
                            <br></br>
                            <div>
                                <button id="title" onClick={()=>{navigate('/about', { state: { book:val } });}}><u>Title:</u> {val.title}</button>
                            </div>
                            <br></br>
                            <div id="desc">
                                <u>Descpription:</u> {val.description}
                            </div>
                        </div>
                        </>
                    })
                }
                <br></br>
                <br></br>
            </div>
        </div>
    )
}

export default Books;