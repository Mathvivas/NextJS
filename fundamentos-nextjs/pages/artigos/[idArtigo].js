import { useRouter } from 'next/router'

// Página Dinâmica
// localhost:3000/artigos/??? ==> Qualquer url com esse padrão terá esta página renderizada
const DetalhesPage = () => {
    const router = useRouter()
    console.log(router.query.idArtigo)
    return (
        <h1>Detalhes</h1>
    )
}

export default DetalhesPage