import styles from './busca.module.scss'
import { AiOutlineSearch } from 'react-icons/ai';
import Link from 'next/link';

const buscaParametros = [
  { name: 'Descobrir', url: '/' },
  { name: 'Navegar', url: '/' },
  { name: 'Novidades', url: '/' },
];

export default function Busca() {

  return (
    <div className={styles.container__busca}>
      <div className={styles.box__busca}>
        <div className={styles.search}>
          <input type="text" placeholder="Procurar jogos" />
          <button><AiOutlineSearch /></button>
        </div>
        <ul className={styles.parametros}>
          {buscaParametros.map((item, index) => (
            <li key={`searchBarLi_${index}`}>
              <Link href={item.url} key={`searchBarLink_${index}`} >
                <p key={`searchBarP_${index}`} >{item.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}