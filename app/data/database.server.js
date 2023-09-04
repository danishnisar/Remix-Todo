import {PrismaClient} from '@prisma/client';

let prisma;

if(process.env.NODE_ENV === 'production'){
    prisma = new PrismaClient();
    prisma.$connnect();

}else{
    if(!global.__db){
        global.__db = new PrismaClient();
        global.__db.$connnect();
    }
    prisma = global.__db;

}

export {prisma};