import React from 'react'
import { motion } from 'framer-motion'
import { useEventDate } from '../hooks/useEventDate'
import { useCheckin } from '../contexts/CheckinContext'
import { 
  RocketIcon, 
  InstagramIcon, 
  YoutubeIcon, 
  LinkedinIcon, 
  GithubIcon, 
  LinkIcon, 
  CalendarIcon, 
  ClockIcon, 
  GlobeIcon, 
  TrophyIcon, 
  InfoIcon, 
  SmartphoneIcon, 
  CheckIcon,
  TargetIcon,
  HeartIcon,
  SparkleIcon
} from './Icons'

const Footer = ({ onOpenCheckin }) => {
  const { checkinData } = useCheckin()
  const { eventDate } = useEventDate()
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'Instagram',
      icon: <InstagramIcon className="w-6 h-6" />,
      url: 'https://instagram.com/iaclub.oficial',
      color: 'hover:text-pink-400'
    },
    {
      name: 'YouTube',
      icon: <YoutubeIcon className="w-6 h-6" />,
      url: 'https://youtube.com/iaclub',
      color: 'hover:text-red-400'
    },
    {
      name: 'LinkedIn',
      icon: <LinkedinIcon className="w-6 h-6" />,
      url: 'https://linkedin.com/company/iaclub',
      color: 'hover:text-blue-400'
    },
    {
      name: 'GitHub',
      icon: <GithubIcon className="w-6 h-6" />,
      url: 'https://github.com/iaclub',
      color: 'hover:text-gray-300'
    }
  ]

  const quickLinks = [
    {
      name: 'Cronograma Completo',
      href: '#cronograma',
      icon: <CalendarIcon className="w-5 h-5" color="#37E359" />
    },
    {
      name: 'Primeira Aula',
      href: '#primeira-aula',
      icon: <RocketIcon className="w-5 h-5" color="#37E359" />
    },
    {
      name: 'FAQ',
      href: '#faq',
      icon: <InfoIcon className="w-5 h-5" color="#37E359" />
    }
  ]

  const importantInfo = [
    {
      title: 'Data do Evento',
      value: eventDate,
      icon: <CalendarIcon className="w-5 h-5" color="#37E359" />
    },
    {
      title: 'Duração',
      value: '5 aulas',
      icon: <ClockIcon className="w-5 h-5" color="#37E359" />
    },
    {
      title: 'Formato',
      value: '100% Online',
      icon: <GlobeIcon className="w-5 h-5" color="#37E359" />
    },
    {
      title: 'Certificado',
      value: 'Certificado Digital',
      icon: <TrophyIcon className="w-5 h-5" color="#37E359" />
    }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-background via-secondary/10 to-background border-t border-white/10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5" />
      
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <RocketIcon className="w-10 h-10" color="#37E359" />
            <h2 className="text-3xl md:text-4xl font-bold text-text-light" style={{ fontFamily: 'var(--font-chakra-petch), system-ui, sans-serif' }}>
              IAClub
            </h2>
          </div>
          
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            Transformando vidas através da inteligência artificial. 
            <span className="text-primary font-semibold"> Seu futuro na tecnologia começa aqui.</span>
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-16">
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-text-light mb-6 flex items-center gap-2">
              <LinkIcon className="w-6 h-6" color="#37E359" />
              <span>Links Rápidos</span>
            </h3>
            
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center gap-3 text-text-muted hover:text-primary transition-colors duration-300 group"
                  >
                    <span className="group-hover:scale-110 transition-transform duration-300">
                      {link.icon}
                    </span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenCheckin}
                  className="flex items-center gap-3 text-text-muted hover:text-primary transition-colors duration-300 group"
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    <CheckIcon className="w-5 h-5" color="#37E359" />
                  </span>
                  <span>Fazer Check-in</span>
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Important Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-text-light mb-6 flex items-center gap-2">
              <InfoIcon className="w-6 h-6" color="#37E359" />
              <span>Informações</span>
            </h3>
            
            <ul className="space-y-4">
              {importantInfo.map((info, index) => (
                <li key={index} className="group">
                  <div className="flex items-start gap-3">
                    <span className="group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </span>
                    <div>
                      <div className="text-sm text-text-muted uppercase tracking-wide">
                        {info.title}
                      </div>
                      <div className="text-text-light font-medium">
                        {info.value}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-text-light mb-6 flex items-center gap-2">
              <SmartphoneIcon className="w-6 h-6" color="#37E359" />
              <span>Redes Sociais</span>
            </h3>
            
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    flex flex-col items-center p-4 glass-card border border-white/10 
                    hover:border-primary/30 transition-all duration-300 group
                    ${social.color}
                  `}
                >
                  <span className="mb-2 group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                  <span className="text-sm text-text-muted group-hover:text-current">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-primary-light/10 border border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-light" />
            
            <h3 className="text-2xl md:text-3xl font-bold text-text-light mb-4 flex items-center gap-3 justify-center">
              <TargetIcon className="w-8 h-8" color="#37E359" />
              Não perca sua chance de mudar de vida!
            </h3>
            
            <p className="text-lg text-text-muted mb-6">
              Faça seu check-in agora e garante sua vaga no Gestor de IA do ZERO que já transformou milhares de vidas.
            </p>

            <motion.button
              onClick={onOpenCheckin}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-background font-bold text-xl px-10 py-5 rounded-xl transition-all duration-300 group"
            >
              <RocketIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" color="#fff" />
              <span>CONFIRMAR PRESENÇA AGORA</span>
              <SparkleIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" color="#fbbf24" />
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-text-muted text-sm">
            <div className="flex items-center gap-2">
              <span>© {currentYear} IAClub.</span>
              <span>Todos os direitos reservados.</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Termos de Uso
              </a>
            </div>
          </div>
          
          {/* Final Brand Message */}
          <div className="text-center mt-8 pt-8 border-t border-white/5">
            <p className="text-text-muted text-sm">
              Feito com <HeartIcon className="inline w-4 h-4 text-red-500 animate-pulse" color="#ef4444" /> para transformar vidas através da inteligência artificial
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background Decorations */}
      <div className="absolute bottom-0 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
    </footer>
  )
}

export default Footer 