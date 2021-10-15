import bcrypt from 'bcrypt';

export const toHash = async (hash: string, saltRounds: number) => {
	return await bcrypt.hash(hash, saltRounds);
}

export const compareHash = async (suppliedHash: string, storedHash: string) => {
	return await bcrypt.compare(suppliedHash, storedHash);
}