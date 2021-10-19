import Link from 'next/link'

// host:porta/artigos
const ArtigosPage = () => {
    return (
        <>
            <h1>Artigos</h1>
            <ul>
                <li>
                    <Link href="artigos/programacao-com-java">Programação com Java</Link>
                </li>
                <li>
                    <Link href="artigos/programacao-com-python">Programação com Python</Link>
                </li>
            </ul>
        </>
    )
}

export default ArtigosPage