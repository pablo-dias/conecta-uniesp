import React from 'react'
import style from './Profile.module.css'
import arrowLeft from '../assets/arrow-left.svg'
import { useNavigate } from 'react-router-dom'

const Profile = ({ nome = "Amanda Souza", sobre = "Nascida e criada em uma pequena cidade do interior, Maria sempre ansiava por explorar o mundo além das fronteiras familiares. Desde cedo, ela mergulhou na leitura voraz de livros sobre aventura, ciência e cultura, alimentando assim sua sede insaciável por conhecimento.", tipo = "Aluno", curso = "Sistemas para Internet", periodo = "4" }) => {

	const navigate = useNavigate()

	return (
		<>
			<div className={style.container}>
				<div className={style.background}>
					<div className={style.imgContainer}>
						<img src="https://s3-alpha-sig.figma.com/img/a696/6af9/9cf441220a6974a8d705012355a3d4e2?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nD4VJ2jG-SwAYRy8S8cz7F6WIDTApgcnUSL-RuhCzFuTq~J270Q1cQcmKR94BAe1hTvSjCCri-5wH3yrH6X2CYHufFAQayGMOVhoPz1Ip7IvNHS3ch-EOUYogJTqU1KyUZcN~fuB2Aw9amJLmb3BfYMmdYs01CqkcQS9tTkwguYvClD89liO7sVT7Rdl5e0NZ5drI2ivLyLBfv564m9pH5XAm3m11NU7w1JKRiTk7pbZR1HjNQS6626NgfW1AzKw~Tzs4aH2twgY5hG-M5KQX8QwG47Yu9yeH8TApndwwliP~67UBJkOe~MDcn4Ny-1dt10nyJh8-A-JxXI9oTEWWw__" alt="" />
					</div>
				</div>

				<div className={style.goBack} onClick={() => navigate('/')}>
					<img src={arrowLeft} alt="" />
					<p>Voltar</p>
				</div>

				<div className={style.info}>
					<div className={style.subTitle}>
						<div className={style.nome}>{nome}</div>
						<div className={style.curso}>{curso}</div>
					</div>

					<div className={style.button}>
						<button>Editar</button>
					</div>
					<div className={style.profileText}>Sobre</div>
					<div className={style.sobre}>{sobre}</div>
					<div className={style.profileText}>Tipo</div>
					<div className={style.tipo}>{tipo}</div>
					<div className={style.profileText}>Período</div>
					<div className={style.periodo}>{periodo}º Semestre</div>
					<div className={style.profileText}>Meus grupos</div>
					<div className={style.groups}>
						<div className={style.periodo}>Descomplicando</div>
						<div className={style.button}>
							<button>Ver meus grupos</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Profile