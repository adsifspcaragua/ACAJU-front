import RegisterForm from '@/components/registerForm';
import "../page.login.css"

export default function Home() {
  return (
    <div style={styles.page}>    
       <RegisterForm />
    </div>
  );
}

const styles = {
  page: {
    width: "100vw",             
    height: "100vh",           
    display: "flex",            
    justifyContent: "center",   
    alignItems: "center",       
    margin: 0,
    padding: "20px",
    boxSizing: "border-box",
  }
};