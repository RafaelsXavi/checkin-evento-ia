import React from 'react'

export const BrainIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
)

export const FireIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} fill={color} viewBox="0 0 24 24">
    <path d="M12 2c1.1 0 2 .9 2 2 0 .74-.4 1.39-1 1.73V7h1c1.1 0 2 .9 2 2v1h1c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h1v-1c0-1.1.9-2 2-2h1V5.73c-.6-.34-1-.99-1-1.73 0-1.1.9-2 2-2z"/>
    <path d="M12 6c-2.5 0-4.5 2-4.5 4.5 0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5C16.5 8 14.5 6 12 6z"/>
  </svg>
)

export const LightningIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} fill={color} viewBox="0 0 24 24">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
)

export const RobotIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
    <rect x="3" y="11" width="18" height="10" rx="2" strokeWidth={2}/>
    <circle cx="12" cy="5" r="2" strokeWidth={2}/>
    <path d="M12 7v4" strokeWidth={2}/>
    <line x1="8" y1="16" x2="8" y2="16" strokeWidth={3} strokeLinecap="round"/>
    <line x1="16" y1="16" x2="16" y2="16" strokeWidth={3} strokeLinecap="round"/>
  </svg>
)

export const DiamondIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} fill={color} viewBox="0 0 24 24">
    <polygon points="12,2 17,7 12,22 7,7"/>
  </svg>
)

export const GiftIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
    <polyline points="20,12 20,22 4,22 4,12" strokeWidth={2}/>
    <rect x="2" y="7" width="20" height="5" strokeWidth={2}/>
    <line x1="12" y1="22" x2="12" y2="7" strokeWidth={2}/>
    <path d="M12,7H7.5a2.5,2.5 0,0,1 0,-5C11,2 12,7 12,7z" strokeWidth={2}/>
    <path d="M12,7h4.5a2.5,2.5 0,0,1 0,-5C13,2 12,7 12,7z" strokeWidth={2}/>
  </svg>
)

export const TargetIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={2}/>
    <circle cx="12" cy="12" r="6" strokeWidth={2}/>
    <circle cx="12" cy="12" r="2" strokeWidth={2}/>
  </svg>
)

export const TrophyIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} fill={color} viewBox="0 0 24 24">
    <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V7C19 9.76 16.76 12 14 12H13V17H16C16.55 17 17 17.45 17 18S16.55 19 16 19H8C7.45 19 7 18.55 7 18S7.45 17 8 17H11V12H10C7.24 12 5 9.76 5 7V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM17 6V7C17 8.65 15.65 10 14 10H10C8.35 10 7 8.65 7 7V6H17Z"/>
  </svg>
)

export const ChartIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
    <line x1="18" y1="20" x2="18" y2="10" strokeWidth={2}/>
    <line x1="12" y1="20" x2="12" y2="4" strokeWidth={2}/>
    <line x1="6" y1="20" x2="6" y2="14" strokeWidth={2}/>
  </svg>
)

export const CalendarIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth={2}/>
    <line x1="16" y1="2" x2="16" y2="6" strokeWidth={2}/>
    <line x1="8" y1="2" x2="8" y2="6" strokeWidth={2}/>
    <line x1="3" y1="10" x2="21" y2="10" strokeWidth={2}/>
  </svg>
)

export const ClockIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={2}/>
    <polyline points="12,6 12,12 16,14" strokeWidth={2}/>
  </svg>
)

export const GlobeIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={2}/>
    <line x1="2" y1="12" x2="22" y2="12" strokeWidth={2}/>
    <path d="M12,2a15.3,15.3 0,0,1 4,10 15.3,15.3 0,0,1 -4,10 15.3,15.3 0,0,1 -4,-10 15.3,15.3 0,0,1 4,-10z" strokeWidth={2}/>
  </svg>
)

export const RocketIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} fill={color} viewBox="0 0 24 24">
    <path d="M12 1L9 9L1 12L9 15L12 23L15 15L23 12L15 9L12 1Z"/>
  </svg>
)

export const CheckIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
    <polyline points="20,6 9,17 4,12" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const StarIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} fill={color} viewBox="0 0 24 24">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
  </svg>
)

export const PlayIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} fill={color} viewBox="0 0 24 24">
    <polygon points="5,3 19,12 5,21"/>
  </svg>
)

export const UserIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeWidth={2}/>
    <circle cx="12" cy="7" r="4" strokeWidth={2}/>
  </svg>
)

export const CpuIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" strokeWidth={2}/>
    <rect x="9" y="9" width="6" height="6" strokeWidth={2}/>
    <line x1="9" y1="1" x2="9" y2="4" strokeWidth={2}/>
    <line x1="15" y1="1" x2="15" y2="4" strokeWidth={2}/>
    <line x1="9" y1="20" x2="9" y2="23" strokeWidth={2}/>
    <line x1="15" y1="20" x2="15" y2="23" strokeWidth={2}/>
    <line x1="20" y1="9" x2="23" y2="9" strokeWidth={2}/>
    <line x1="20" y1="14" x2="23" y2="14" strokeWidth={2}/>
    <line x1="1" y1="9" x2="4" y2="9" strokeWidth={2}/>
    <line x1="1" y1="14" x2="4" y2="14" strokeWidth={2}/>
  </svg>
)

export const DollarIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
    <line x1="12" y1="1" x2="12" y2="23" strokeWidth={2}/>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeWidth={2}/>
  </svg>
)

export const SparkleIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} fill={color} viewBox="0 0 24 24">
    <path d="M12 2L8 8L2 12L8 16L12 22L16 16L22 12L16 8L12 2Z"/>
  </svg>
)

export const InstagramIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} fill={color} viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="#fff" strokeWidth={2}/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#fff" strokeWidth={2} strokeLinecap="round"/>
  </svg>
)

export const YoutubeIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} fill={color} viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

export const LinkedinIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} fill={color} viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

export const GithubIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} fill={color} viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

export const LinkIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const InfoIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={2}/>
    <line x1="12" y1="16" x2="12" y2="12" strokeWidth={2}/>
    <line x1="12" y1="8" x2="12.01" y2="8" strokeWidth={2}/>
  </svg>
)

export const SmartphoneIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" strokeWidth={2}/>
    <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth={2} strokeLinecap="round"/>
  </svg>
)

export const HeartIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} fill={color} viewBox="0 0 24 24">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
)

export const MailIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth={2}/>
    <polyline points="22,6 12,13 2,6" strokeWidth={2}/>
  </svg>
)

export const WrenchIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" strokeWidth={2}/>
  </svg>
)

export const VideoIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
    <polygon points="23,7 16,12 23,17" strokeWidth={2}/>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" strokeWidth={2}/>
  </svg>
)

export const QuestionIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={2}/>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" strokeWidth={2}/>
    <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth={2}/>
  </svg>
)

export const HandshakeIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
    <path d="M18 12H22L20 8H18L13 2H11L6 8H4L2 12H6V20H18V12Z" strokeWidth={2}/>
    <path d="M6 12L13 7L18 12" strokeWidth={2}/>
  </svg>
)

export const WhatsappIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} fill={color} viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
  </svg>
)

export const BookIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeWidth={2}/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" strokeWidth={2}/>
  </svg>
)