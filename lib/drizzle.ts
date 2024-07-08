import {drizzle} from 'drizzle-orm/vercel-postgres'
import {sql} from '@vercel/postgres'
import {  pgTable, varchar } from 'drizzle-orm/pg-core'


export const userDataTable = pgTable("authenticationtable",{
    username :varchar('username', {length : 255}).notNull(),
    useremail:varchar('useremail', {length : 255}).notNull().unique(),
    password: varchar('password', {length : 255}).notNull(),
})


export const db = drizzle(sql);