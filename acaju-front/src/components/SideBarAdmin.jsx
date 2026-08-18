import Link from 'next/link';
import styles from './SideBarAdmin.module.css';
import { 
  ClipboardCheck, 
  Clock, 
  FileText, 
  Users, 
  FolderKanban, 
  Image, 
  FileDown, 
  UserCog, 
  UsersRound,
  LogOut 
} from 'lucide-react';

export default function SideBarAdmin() {
  return (
    <div className={styles.sideBar}>
      <h2 className={styles.titulo}>Painel ACAJU</h2>
      <nav className={styles.nav}>

        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href="/admin/pendencias" className={styles.link}>
              <div className={styles.linkContent}>
                <ClipboardCheck size={20} className={styles.icon} />
                <span>Pendências</span>
              </div>
              <span className={styles.badge}>2</span>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/admin/horarioFuncionamento" className={styles.link}>
              <div className={styles.linkContent}>
                <Clock size={20} className={styles.icon} />
                <span>Horário de funcionamento</span>
              </div>
            </Link>
          </li>
        </ul>

        <h4 className={styles.h4}>PUBLICAÇÕES</h4>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href="/admin/noticias" className={styles.link}>
              <div className={styles.linkContent}>
                <FileText size={20} className={styles.icon} />
                <span>Notícias</span>
              </div>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/admin/multiroes" className={styles.link}>
              <div className={styles.linkContent}>
                <Users size={20} className={styles.icon} />
                <span>Mutirões</span>
              </div>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/admin/projetos" className={styles.link}>
              <div className={styles.linkContent}>
                <FolderKanban size={20} className={styles.icon} />
                <span>Projetos</span>
              </div>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/admin/memoriasCaicaras" className={styles.link}>
              <div className={styles.linkContent}>
                <Image size={20} className={styles.icon} />
                <span>Memórias Caiçaras</span>
              </div>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/admin/galeria" className={styles.link}>
              <div className={styles.linkContent}>
                <Image size={20} className={styles.icon} />
                <span>Galeria de Fotos</span>
              </div>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/admin/documentos" className={styles.link}>
              <div className={styles.linkContent}>
                <FileDown size={20} className={styles.icon} />
                <span>Documentos</span>
              </div>
            </Link>
          </li>
        </ul>

        <h4 className={styles.h4}>USUÁRIOS</h4>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href="/admin/meuPerfil" className={styles.link}>
              <div className={styles.linkContent}>
                <UserCog size={20} className={styles.icon} />
                <span>Meu Perfil</span>
              </div>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/admin/gerenciarEquipe" className={styles.link}>
              <div className={styles.linkContent}>
                <UsersRound size={20} className={styles.icon} />
                <span>Gerenciar Equipe</span>
              </div>
            </Link>
          </li>
        </ul>

        <ul className={styles.logoutUl}>
          <li className={styles.li}>
            <Link href="/admin/login" className={styles.logoutLink}>
              <LogOut size={20} className={styles.icon} />
              <span>Sair do sistema</span>
            </Link>
          </li>
        </ul>

      </nav>
    </div>
  );
}