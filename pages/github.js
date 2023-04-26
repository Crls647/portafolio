import Layout from "../components/Layout"

const Github = ({user}) => {
    return (
        <Layout>
            <div className="col-md4 offset-md-4">
                <div className="card card-body text-center">
                    <h1>{user.name}</h1>
                    <img src={user.avatar_url} alt=""/>
                    <p>{user.bio}</p>
                    <a href={user.blog} target="_blank" className="btn btn-outline-secondary my-2">mi blog</a>
                    <a href={user.html_url} target="_blank" className="btn btn-outline-secondary">ir a mi Github</a>
                    
                </div>
                
            </div>
        </Layout>
    )
}
export async function getServerSideProps(){
    const res = await fetch('https://api.github.com/users/Crls647')
    const data = await res.json();

    console.log(data)
    return{
        props:{
            user: data
        }
    }
}
export default Github
