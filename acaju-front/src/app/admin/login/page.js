import LoginModal from '@/components/login-modal.jsx';
import '@/app/admin/page.admin.css';

export default function Login() {
  return (
    <div style={styles.page}>
       <LoginModal />    
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