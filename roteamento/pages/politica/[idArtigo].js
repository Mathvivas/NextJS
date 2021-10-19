import { useRouter } from 'next/router'

const ArtigoPoliticaPage = () => {
    const router = useRouter()
    return(
        <p>{router.query.idArtigo}</p>
    )
}

export default ArtigoPoliticaPage