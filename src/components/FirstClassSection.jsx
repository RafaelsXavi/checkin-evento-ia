import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useEventDate } from '../hooks/useEventDate'
import { TargetIcon, FireIcon, LightningIcon, RobotIcon, DiamondIcon, GiftIcon, RocketIcon, DollarIcon, SparkleIcon } from './Icons'

const FirstClassSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const { eventDate } = useEventDate()

  const benefits = [
    {
      id: 1,
      icon: <TargetIcon className="w-12 h-12" color="#37E359" />,
      title: 'Fundamentos que Valem Ouro',
      description: 'Entenda TUDO sobre IA, Machine Learning e Deep Learning - o conhecimento base que empresas pagam R$ 10k+ por mês',
      color: 'from-primary/20 to-primary-light/20',
      border: 'border-primary/30',
      highlight: 'primary'
    },
    {
      id: 2,
      icon: <FireIcon className="w-12 h-12" color="#ef4444" />,
      title: 'As Principais IAs do Mercado',
      description: 'ChatGPT, Claude, Gemini, Midjourney - aprenda hands-on as ferramentas que TODO gestor de IA precisa dominar',
      color: 'from-red-500/20 to-orange-500/20',
      border: 'border-red-500/30',
      highlight: 'red-500'
    },
    {
      id: 3,
      icon: <LightningIcon className="w-12 h-12" color="#3b82f6" />,
      title: 'Engenharia de Prompt na Prática',
      description: 'Método C.O.R.P.O revelado - a técnica secreta para criar prompts que geram resultados profissionais',
      color: 'from-blue-500/20 to-cyan-500/20',
      border: 'border-blue-500/30',
      highlight: 'blue-500'
    },
    {
      id: 4,
      icon: <RobotIcon className="w-12 h-12" color="#8b5cf6" />,
      title: 'Seu Primeiro Agente de IA',
      description: 'Construa na hora um agente que trabalha 24h por você - saia da aula com sua primeira automação funcionando',
      color: 'from-purple-500/20 to-violet-500/20',
      border: 'border-purple-500/30',
      highlight: 'purple-500'
    },
    {
      id: 5,
      icon: <DiamondIcon className="w-12 h-12" color="#10b981" />,
      title: 'Os 3 Caminhos para os 10k+',
      description: 'CLT, Freelancer ou Empreendedor - qual rota seguir para chegar aos 5 dígitos com IA (com exemplos reais)',
      color: 'from-emerald-500/20 to-green-500/20',
      border: 'border-emerald-500/30',
      highlight: 'emerald-500'
    },
    {
      id: 6,
      icon: <GiftIcon className="w-12 h-12" color="#f59e0b" />,
      title: 'Bônus Exclusivos para Quem Ficar',
      description: 'TODAS as IAs do meu dia-a-dia + como economizar 40hrs/semana + todos os prompts da aula (só para quem ficar até o final)',
      color: 'from-yellow-500/20 to-amber-500/20',
      border: 'border-yellow-500/30',
      highlight: 'yellow-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const checkmarkVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: {
        pathLength: { duration: 0.5, ease: "easeInOut" },
        opacity: { duration: 0.2 }
      }
    }
  }

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-secondary/20" />
      
      {/* Container */}
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 mb-6"
          >
            <RocketIcon className="w-6 h-6" color="#37E359" />
            <span className="text-primary font-semibold text-lg">PRIMEIRA AULA IMPERDÍVEL</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-light mb-6" style={{ fontFamily: 'var(--font-chakra-petch), system-ui, sans-serif' }}>
            O que vai rolar na{' '}
            <span className="text-gradient">primeira aula</span>{' '}
            que você <span className="text-red-500">NÃO PODE</span> perder
          </h2>
          
          <p className="text-xl md:text-2xl text-text-muted max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            <span dangerouslySetInnerHTML={{ __html: eventDate.replace(/(\d+H)/, '<span class="text-primary font-semibold">$1</span>') }} />, eu vou te entregar:
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              variants={cardVariants}
              className="group"
            >
              <div className={`
                glass-card p-6 md:p-8 h-full ${benefit.border} border-2
                bg-gradient-to-br ${benefit.color}
                hover:border-primary/50 transition-all duration-300
                relative overflow-hidden cursor-pointer
                hover:scale-105 transform-gpu
              `}>
                {/* Checkmark */}
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30">
                    <motion.svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="text-primary"
                    >
                      <motion.path
                        d="M13.5 4.5L6 12L2.5 8.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        variants={checkmarkVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ delay: 0.5 + (index * 0.1) }}
                      />
                    </motion.svg>
                  </div>
                </div>

                {/* Icon */}
                <div className="text-5xl md:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-text-light mb-4 leading-tight" style={{ fontFamily: 'var(--font-sans)' }}>
                  {benefit.title}
                </h3>
                
                <p className="text-text-muted leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                  {benefit.description}
                </p>

                {/* Background decoration */}
                <div className="absolute bottom-0 right-0 w-20 h-20 opacity-10 pointer-events-none">
                  <div className={`w-full h-full bg-gradient-to-tl ${benefit.color} rounded-full blur-xl`} />
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                     style={{
                       background: `radial-gradient(circle at center, var(--${benefit.highlight})0.1, transparent 70%)`
                     }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center"
        >
          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-primary-light/10 border border-primary/20">
            {/* Time indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="inline-flex items-center gap-3 bg-red-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-red-500/20 mb-6"
            >
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-400 font-semibold">{eventDate}</span>
            </motion.div>

            <h3 className="text-2xl md:text-3xl font-bold text-text-light mb-4 flex items-center gap-3 justify-center">
              <DollarIcon className="w-8 h-8" color="#10b981" />
              Tudo isso na <span className="text-primary">PRIMEIRA AULA</span> - Seu Primeiro Passo para os 10k+
            </h3>
            
            <p className="text-lg md:text-xl text-text-muted mb-8 leading-relaxed">
              Enquanto outros cursos enrolam por meses, você vai sair da primeira aula já com 
              <span className="text-primary font-semibold"> um plano claro</span> e 
              <span className="text-primary font-semibold"> materiais práticos</span> para começar sua jornada.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              
              <div className="flex items-center gap-2 text-text-muted">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Materiais Inclusos</span>
              </div>

              <div className="flex items-center gap-2 text-text-muted">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Certificado Digital</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  )
}

export default FirstClassSection 