import Article from "./Article";
export default function ArticleList({posts}){
    const postList = posts.map(post => {
        return <Article id={post.id} title={post.title} date={post.date} preview={post.preview} key={post.id} />
    })

return(
        <main>
            {postList}
        </main>
);

}