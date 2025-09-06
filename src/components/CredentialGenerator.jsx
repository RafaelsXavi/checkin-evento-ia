import React, { useRef, useEffect } from 'react'

const CredentialGenerator = ({ name, photo, onCredentialGenerated, shouldGenerate }) => {
  const canvasRef = useRef(null)

  // Gerar ID único
  const generateTicketId = () => {
    return Math.floor(Math.random() * 10000) + 1
  }

  const generateCredential = async () => {
    const canvas = canvasRef.current
    if (!canvas) {
      return
    }
    const ctx = canvas.getContext('2d')
    
    // Definir dimensões
    canvas.width = 800
    canvas.height = 500

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, 800, 500)
    gradient.addColorStop(0, '#020A13')
    gradient.addColorStop(0.3, '#0A2E4D')
    gradient.addColorStop(0.7, '#020A13')
    gradient.addColorStop(1, '#052033')
    
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 800, 500)

    // Elementos visuais de IA no fundo
    ctx.fillStyle = 'rgba(34, 211, 238, 0.08)'
    ctx.font = '14px Arial'
    const aiElements = [
      '🧠 Neural Networks',
      '🤖 Machine Learning',
      '📊 Data Analysis',
      '🎯 Pattern Recognition',
      '⚡ Deep Learning',
      '🔮 AI Prediction',
      '💡 Smart Algorithms',
      '🌟 Intelligence'
    ]
    
    for (let i = 0; i < aiElements.length; i++) {
      ctx.fillText(aiElements[i], 20 + (i % 3) * 250, 50 + (i * 60))
    }
    
    // Círculos representando nós neurais
    ctx.fillStyle = 'rgba(139, 92, 246, 0.1)'
    for (let i = 0; i < 15; i++) {
      const x = Math.random() * 800
      const y = Math.random() * 500
      const radius = Math.random() * 20 + 5
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, 2 * Math.PI)
      ctx.fill()
    }
    
    // Conexões entre nós
    ctx.strokeStyle = 'rgba(34, 211, 238, 0.15)'
    ctx.lineWidth = 1
    for (let i = 0; i < 10; i++) {
      ctx.beginPath()
      ctx.moveTo(Math.random() * 800, Math.random() * 500)
      ctx.lineTo(Math.random() * 800, Math.random() * 500)
      ctx.stroke()
    }

    // Glassmorphism card
    const cardX = 50
    const cardY = 50
    const cardWidth = 700
    const cardHeight = 400
    
    // Card background with glassmorphism
    const cardGradient = ctx.createLinearGradient(cardX, cardY, cardX, cardY + cardHeight)
    cardGradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)')
    cardGradient.addColorStop(1, 'rgba(255, 255, 255, 0.05)')
    
    ctx.fillStyle = cardGradient
    ctx.fillRect(cardX, cardY, cardWidth, cardHeight)
    
    // Card border (neon)
    ctx.strokeStyle = 'rgba(55, 227, 89, 0.3)'
    ctx.lineWidth = 2
    ctx.strokeRect(cardX, cardY, cardWidth, cardHeight)

    // Logo e título
    ctx.fillStyle = '#37E359'
    ctx.font = 'bold 32px Arial'
    ctx.fillText('🚀 IACLUB', cardX + 40, cardY + 60)
    
    ctx.fillStyle = '#F8F9FA'
    ctx.font = 'bold 24px Arial'
    ctx.fillText('GESTOR DE IA', cardX + 40, cardY + 100)
    ctx.font = 'bold 24px Arial'
    ctx.fillText('DO ZERO', cardX + 40, cardY + 130)

    // Foto (se fornecida)
    if (photo) {
      try {
        const img = new Image()
        img.crossOrigin = 'anonymous'
        
        img.onload = () => {
          // Desenhar foto circular mantendo proporção
          const photoX = cardX + cardWidth - 180
          const photoY = cardY + 40
          const photoSize = 120
          
          // Calcular proporções da imagem original
          const imgWidth = img.width
          const imgHeight = img.height
          const imgAspectRatio = imgWidth / imgHeight
          
          // Calcular dimensões para preencher o círculo mantendo proporção
          let drawWidth, drawHeight, drawX, drawY
          
          if (imgAspectRatio > 1) {
            // Imagem mais larga que alta
            drawHeight = photoSize
            drawWidth = photoSize * imgAspectRatio
            drawX = photoX - (drawWidth - photoSize) / 2
            drawY = photoY
          } else {
            // Imagem mais alta que larga ou quadrada
            drawWidth = photoSize
            drawHeight = photoSize / imgAspectRatio
            drawX = photoX
            drawY = photoY - (drawHeight - photoSize) / 2
          }
          
          // Clip circular
          ctx.save()
          ctx.beginPath()
          ctx.arc(photoX + photoSize/2, photoY + photoSize/2, photoSize/2, 0, Math.PI * 2)
          ctx.clip()
          
          // Desenhar foto com proporção correta
          ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight)
          
          // Border da foto
          ctx.restore()
          ctx.strokeStyle = '#37E359'
          ctx.lineWidth = 3
          ctx.beginPath()
          ctx.arc(photoX + photoSize/2, photoY + photoSize/2, photoSize/2, 0, Math.PI * 2)
          ctx.stroke()
          
          finishCredential()
        }
        
        img.onerror = () => {
          finishCredential()
        }
        
        img.src = photo
      } catch (error) {
        finishCredential()
      }
    } else {
      // Avatar placeholder
      const avatarX = cardX + cardWidth - 180
      const avatarY = cardY + 40
      const avatarSize = 120
      
      // Background do avatar
      ctx.fillStyle = 'rgba(55, 227, 89, 0.2)'
      ctx.beginPath()
      ctx.arc(avatarX + avatarSize/2, avatarY + avatarSize/2, avatarSize/2, 0, Math.PI * 2)
      ctx.fill()
      
      // Ícone de usuário
      ctx.fillStyle = '#37E359'
      ctx.font = '60px Arial'
      ctx.textAlign = 'center'
      ctx.fillText('👤', avatarX + avatarSize/2, avatarY + avatarSize/2 + 20)
      
      // Border
      ctx.strokeStyle = '#37E359'
      ctx.lineWidth = 3
      ctx.stroke()
      
      finishCredential()
    }

    function finishCredential() {
      try {
        // Nome da pessoa
        ctx.textAlign = 'left'
        ctx.fillStyle = '#F8F9FA'
        ctx.font = 'bold 36px Arial'
        const nameY = cardY + 220
        ctx.fillText(name || 'PARTICIPANTE', cardX + 40, nameY)
        
        // ID do ingresso
        const ticketId = generateTicketId()
        ctx.fillStyle = '#37E359'
        ctx.font = '20px monospace'
        ctx.fillText(`ID: #IC2025-${String(ticketId).padStart(4, '0')}`, cardX + 40, nameY + 40)
        
        // Evento info - sem data específica
        ctx.fillStyle = '#94A3B8'
        ctx.font = 'bold 18px Arial'
        ctx.fillText('GESTOR ONLINE • 2025', cardX + 40, nameY + 80)
        
        // Status
        ctx.fillStyle = '#37E359'
        ctx.font = 'bold 20px Arial'
        ctx.fillText('✅ CONFIRMADO', cardX + 40, nameY + 120)
        
        // Linha decorativa animada
        const lineY = cardY + cardHeight - 40
        const lineGradient = ctx.createLinearGradient(cardX + 40, lineY, cardX + cardWidth - 80, lineY)
        lineGradient.addColorStop(0, '#37E359')
        lineGradient.addColorStop(0.5, '#52FF74')
        lineGradient.addColorStop(1, '#37E359')
        
        ctx.strokeStyle = lineGradient
        ctx.lineWidth = 4
        ctx.beginPath()
        ctx.moveTo(cardX + 40, lineY)
        ctx.lineTo(cardX + cardWidth - 80, lineY)
        ctx.stroke()
        
        // Converter para data URL e chamar callback
        const dataURL = canvas.toDataURL('image/png', 1.0)
        if (onCredentialGenerated) {
          onCredentialGenerated(dataURL, ticketId)
        }
      } catch (error) {
        // Error handling
      }
    }
  }

  useEffect(() => {
    if (shouldGenerate && name) {
      generateCredential()
    }
  }, [shouldGenerate, name, photo])

  return (
    <canvas
      ref={canvasRef}
      style={{ display: 'none' }}
      width={800}
      height={500}
    />
  )
}

export default CredentialGenerator 