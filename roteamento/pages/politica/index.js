import Link from 'next/link'

const PoliticaPage = () => {
    return (
        <>
            <h1>
                Política
            </h1>
            <ul>
                <li>
                    <Link href="/politica/lei-improbidade">
                        Senado aprova nova lei de improbidade (PL 2505/2021)
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default PoliticaPage