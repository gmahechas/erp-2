import bcrypt from 'bcrypt';

export const toHash = async (hash: string) => {
	const salt = await bcrypt.genSalt();
	return await bcrypt.hash(hash, salt);
}

export const compareHash = async (suppliedHash: string, storedHash: string) => {
	return await bcrypt.compare(suppliedHash, storedHash);
}