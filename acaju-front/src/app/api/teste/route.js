import { NextResponse } from 'next/server';
import  prisma  from '@/lib/prisma';

export async function GET() {
  try {
    // Substitua 'usuario' pelo nome de algum model que você definiu no schema.prisma
    const dados = await prisma.ADM.findMany(); 
    return NextResponse.json(dados);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}