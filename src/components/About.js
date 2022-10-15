import '../App.css';
import { useLocation } from 'react-router-dom';

function About(){
    const {state}=useLocation();
    const {book}=state;
    return (
        <div id="about-book">
            <center>
                <div id="title-about">
                {book.title}
                </div>
                <br></br>
                <img id="book-img" alt={book.title} src={book.book_image}></img>
                <br></br>
            </center>
                <div>
                    <u>Descpription</u> : {book.description}
                    <br></br>
                    <br></br>
                    <u>Publisher</u> : {book.publisher}
                    <br></br>
                    <br></br>
                    <u>Author</u> : {book.author}
                    <br></br>
                    <br></br>
                    Contributed {book.contributor}
                    <br></br>
                    <br></br>
                    <a href={book.amazon_product_url} target="_blank" rel="noopener noreferrer">Amazon Link</a>
                    <br></br>
                    <br></br>
                    <u>ISBN 10 Code</u> : {book.primary_isbn10}
                    <br></br>
                    <br></br>
                    <u>ISBN 13 Code</u> : {book.primary_isbn13}
                    <br></br>
                    <br></br>
                    <u>Links where to buy this book</u> : 
                    <br></br>
                    <br></br>
                    {book.buy_links.map((val,i=0)=>{
                        return <>
                        <div>
                            {i+=1})
                            <a href={val.url} target="_blank" rel="noopener noreferrer">{val.name}</a>
                        </div>
                        </>
                    })}
                    <br></br>
                </div>
        </div>
    )
}

export default About;