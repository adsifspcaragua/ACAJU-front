import styles from './SideBarAdmin.module.css';
import { useActionState } from 'react';
import { logout } from '../actions/auth';

import {
    LogOut
} from 'lucide-react';

export default function LogoutForm() {

    const [logoutState, formAction, isPendingLogout] = useActionState(logout, null);

    return (
        <form action={formAction}>
            <button type="Submit" className={styles.logoutLink}>
                <LogOut size={20} className={styles.icon} />
                Sair do sistema
            </button>
        </form>
    );
}