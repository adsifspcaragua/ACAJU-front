// src/app/admin/meuPerfil/page.js
import prisma from '@/lib/prisma';
import MeuPerfilForm from '@/components/MeuPerfilForm';

export default async function GerenciarUsuarioPage() {
  const admin = await prisma.aDM.findFirst({
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
    },
  });

  if (!admin) {
    return <div className="p-8 text-center">Nenhum administrador cadastrado.</div>;
  }

  return <MeuPerfilForm admin={admin} />;
}