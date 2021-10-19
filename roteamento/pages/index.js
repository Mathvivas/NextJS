import Link from 'next/link'

const HomePage = () => {
	return (
		<>
			<h1>Notícias</h1>
			<ul>
				<li>
					<Link href="/esportes">
						Esportes
					</Link>
				</li>
				<li>
					<Link href="/politica">
						Política
					</Link>
				</li>
			</ul>
		</>
	)
}

export default HomePage