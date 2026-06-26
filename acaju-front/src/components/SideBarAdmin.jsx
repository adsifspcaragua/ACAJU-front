import Link from 'next/link';

export default function SideBarAdmin() {
  return (
    <div style={styles.sideBar}>
      <h2 style={styles.titulo}>Painel ACAJU</h2>
      <nav style={styles.nav}>
        

        <ul style={styles.ul}>
          <li style={styles.li}>
            <Link href="/pendencias" style={styles.link}>
              <span>Pendências</span>
            </Link>
          </li>
          <li style={styles.li}>
            <Link href="/horario" style={styles.link}>Horário de funcionamento</Link>
          </li>
        </ul>

        
        <h4 style={styles.h4}>PUBLICAÇÕES</h4>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <Link href="/admin/news" style={styles.link}>Notícias</Link>
          </li>
          <li style={styles.li}>
            <Link href="/admin/multiroes" style={styles.link}>Mutirões</Link>
          </li>
          <li style={styles.li}>
            <Link href="/admin/projects" style={styles.link}>Projetos</Link>
          </li>
          <li style={styles.li}>
            <Link href="/admin/memorias" style={styles.link}>Memórias Caiçaras</Link>
          </li>
          <li style={styles.li}>
            <Link href="/galeria" style={styles.link}>Galeria de Fotos</Link>
          </li>
          <li style={styles.li}>
            <Link href="/admin/documents" style={styles.link}>Documentos</Link>
          </li>
        </ul>

       
        <h4 style={styles.h4}>USUÁRIOS</h4>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <Link href="/equipe" style={styles.link}>Gerenciar Equipe</Link>
          </li>
        </ul>

       
        <ul style={styles.logoutUl}>
          <li style={styles.li}>
            <Link href="/admin/login" style={styles.logoutLink}>Sair do sistema</Link>
          </li>
        </ul>

      </nav>
    </div>
  );
}


const styles = {
  sideBar: {
    backgroundColor: "#045950",
    width: "300px",
    minHeight: "100vh",
    padding: "30px 20px",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    fontFamily: "sans-serif",
  },
  titulo: {
    color: "#ffffff",
    fontSize: "24px",
    fontWeight: "bold",
    margin: "0 0 25px 0",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  ul: {
    listStyle: "none",
    padding: 0,
    margin: "0 0 20px 0",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  logoutUl: {
    listStyle: "none",
    padding: 0,
    margin: "auto 0 0 0", 
  },
  h4: {
    color: "#4ade80",
    fontSize: "12px",
    fontWeight: "bold",
    letterSpacing: "1px",
    margin: "10px 0 10px 12px",
  },
  li: {
    display: "block",
  },
  link: {
    color: "#ffffff",
    fontSize: "16px",
    textDecoration: "none",
    padding: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoutLink: {
    color: "#fca5a5",
    fontSize: "16px",
    textDecoration: "none",
    padding: "12px",
    display: "block",
  },
  badge: {
    backgroundColor: "#ef4444",
    color: "#ffffff",
    fontSize: "12px",
    fontWeight: "bold",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};