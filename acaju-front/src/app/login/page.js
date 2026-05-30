import LoginModal from '@/components/login-modal';

export default function Home() {
  return (
    <div style={styles.page}>
       <LoginModal />    
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: "#183f15",
  }
};