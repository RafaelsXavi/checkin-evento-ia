import { useCheckin } from '../contexts/CheckinContext'

export const useEventDate = () => {
  const { checkinData } = useCheckin()

  // Função para formatar a data do countdown
  const formatEventDate = (dateString) => {
    const targetDate = dateString || checkinData?.countdownDate || "2025-08-19T20:00:00"
    
    if (!targetDate) return 'SEGUNDA-FEIRA, 19 DE AGOSTO, 20H'
    
    try {
      const date = new Date(targetDate)
      
      // Array de dias da semana em português
      const weekdays = [
        'DOMINGO', 'SEGUNDA-FEIRA', 'TERÇA-FEIRA', 'QUARTA-FEIRA', 
        'QUINTA-FEIRA', 'SEXTA-FEIRA', 'SÁBADO'
      ]
      
      // Array de meses em português
      const months = [
        'JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO',
        'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO'
      ]
      
      const weekday = weekdays[date.getDay()]
      const day = date.getDate()
      const month = months[date.getMonth()]
      const hour = date.getHours()
      
      return `${weekday}, ${day} DE ${month}, ${hour}H`
    } catch (error) {
      return 'SEGUNDA-FEIRA, 19 DE AGOSTO, 20H'
    }
  }

  // Função para obter apenas o dia da semana
  const getEventWeekday = (dateString) => {
    const targetDate = dateString || checkinData?.countdownDate || "2025-08-19T20:00:00"
    
    try {
      const date = new Date(targetDate)
      const weekdays = [
        'domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 
        'quinta-feira', 'sexta-feira', 'sábado'
      ]
      
      return weekdays[date.getDay()]
    } catch (error) {
      return 'segunda-feira'
    }
  }

  // Função para obter a data do countdown (formato original)
  const getCountdownDate = () => {
    return checkinData?.countdownDate || "2025-08-19T20:00:00"
  }

  return {
    formatEventDate,
    getEventWeekday,
    getCountdownDate,
    eventDate: formatEventDate()
  }
}