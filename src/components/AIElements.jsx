import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const AIElements = () => {
  const [aiTerms] = useState([
    'neural_network.train()',
    'model.predict(data)',
    'accuracy: 98.7%',
    'loss: 0.023',
    'epoch: 150/200',
    'learning_rate: 0.001',
    'batch_size: 32',
    'optimizer: Adam',
    'activation: ReLU',
    'layers: [512, 256, 128]',
    'dropout: 0.2',
    'validation_acc: 97.3%',
    'tensor.shape: [32, 224, 224, 3]',
    'GPU utilization: 89%',
    'training_time: 2.3h',
    'model_size: 145MB',
    'inference_time: 12ms',
    'confidence: 0.94',
    'feature_maps: 1024',
    'attention_weights',
    'transformer.forward()',
    'embedding_dim: 768',
    'num_heads: 12',
    'sequence_length: 512',
    'temperature: 0.8'
  ])

  const neuralNetworkNodes = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating AI Data */}
      {aiTerms.map((term, index) => (
        <motion.div
          key={`${term}-${index}`}
          className="floating-ai-data absolute"
          initial={{
            x: -200,
            y: Math.random() * window.innerHeight,
            opacity: 0
          }}
          animate={{
            x: window.innerWidth + 200,
            y: Math.random() * window.innerHeight,
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            delay: index * 0.8,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{
            fontSize: '11px',
            color: `hsl(${180 + Math.random() * 60}, 70%, ${60 + Math.random() * 20}%)`,
            filter: 'blur(0.5px)'
          }}
        >
          {term}
        </motion.div>
      ))}

      {/* Neural Network Visualization */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
            </radialGradient>
          </defs>
          
          {/* Neural connections */}
          {neuralNetworkNodes.map((node, i) => 
            neuralNetworkNodes.slice(i + 1).map((targetNode, j) => {
              if (Math.random() > 0.7) return null
              return (
                <motion.line
                  key={`connection-${i}-${j}`}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${targetNode.x}%`}
                  y2={`${targetNode.y}%`}
                  stroke="url(#nodeGradient)"
                  strokeWidth="0.5"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: [0, 0.3, 0],
                    strokeWidth: [0.5, 1.5, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    delay: node.delay + j * 0.1,
                    repeat: Infinity,
                    repeatDelay: 5
                  }}
                />
              )
            })
          )}
          
          {/* Neural nodes */}
          {neuralNetworkNodes.map(node => (
            <motion.circle
              key={node.id}
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="2"
              fill="url(#nodeGradient)"
              initial={{ r: 2, opacity: 0.6 }}
              animate={{ 
                r: [2, 4, 2],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 2,
                delay: node.delay,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          ))}
        </svg>
      </div>

      {/* Data Flow Particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            delay: i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{
            boxShadow: '0 0 10px rgba(34, 211, 238, 0.8)',
          }}
        />
      ))}

      {/* AI Processing Indicators */}
      <motion.div 
        className="absolute top-4 right-4 text-xs font-mono text-cyan-400/60"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div>◉ AI Systems Online</div>
        <div>◉ Neural Networks Active</div>
        <div>◉ Processing: 847 ops/sec</div>
      </motion.div>
    </div>
  )
}

export default AIElements