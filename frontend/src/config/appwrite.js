import { Client, Account, Databases } from 'appwrite';

const client = new Client()
.setEndpoint('http://localhost/v1')
.setProject('6385d6019120b485f57d')

export const account = new Account(client);

export const databases = new Databases(client, '6385d695b022713ca4b3')