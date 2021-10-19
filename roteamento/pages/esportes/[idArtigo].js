import { useRouter } from 'next/router'

const ArtigoEsportesPage = () => {
    const router = useRouter()
    return (
        <p>{router.query.idArtigo}</p>
    )
}

export default ArtigoEsportesPage