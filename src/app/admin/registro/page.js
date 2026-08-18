import RegisterForm from '@/components/registerForm.jsx';
import '@/app/admin/page.admin.css';

export default function Register() {
  return (
    <div style={styles.page}>    
       <RegisterForm />
    </div>
  );
}

const styles = {
  page: {
    blur: "100px",
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