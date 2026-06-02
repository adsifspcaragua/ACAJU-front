import RegisterForm from '@/components/RegisterForm';
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
    backgroundImage: "linear-gradient(135deg, #045950, #2DBFAF, #045950)",
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