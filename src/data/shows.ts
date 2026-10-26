export interface Show {
  id: string;
  festival: string;
  venue: string;
  city: string;
  ticketUrl: string;
}

/**
 * Próximo show de Cerro Dublín.
 * Actualmente sin fechas activas ya que el último show ha finalizado.
 */
export const UPCOMING_SHOW: Show | null = null;
