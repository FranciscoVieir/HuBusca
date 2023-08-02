import { format } from 'date-fns';

export function formatDate(date: string) {
	return format(new Date(date), 'dd/MM/yyyy HH:mm:ss');
}
