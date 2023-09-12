export default function Article({title, date, preview}){
    return(
<article>
    <h3>{title}</h3>
    {date ? <small>{date}</small> : "January 1, 1970"}
    <p>{preview}</p>

</article>
    );
}