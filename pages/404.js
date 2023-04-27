import Layout from "../components/Layout"
import Link from "next/link"
const custom404 = () =>
    <Layout>
        <div className="text-center">
            <h1>404</h1>
            <p>este error es modificable y es muestra como un ejemplo, pofavor retorna a
                <Link legacyBehavior href="/">
                    <a>Home</a>
                </Link>
            </p>
        </div>
    </Layout>
export default custom404;