import style from './Footer.module.css';
import chat from '../assets/chat.svg';
import ellipse_plus from '../assets/ellipse_plus.svg';
import home from '../assets/home.svg';
import user from '../assets/user.svg';
import search from '../assets/search.svg';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

	const navigate = useNavigate();

	return (
		<>
			<div className={style.footer}>
				<div className={style.icons}>
					<img src={home} alt="" onClick={() => navigate('/')} />
					<img src={search} alt="" />
					<img style={{ height: "6rem" }} src={ellipse_plus} alt="" />
					<img src={chat} alt="" />
					<img src={user} alt="" onClick={() => navigate('/perfil')} />
				</div>
			</div>
		</>
	)
}

export default Footer