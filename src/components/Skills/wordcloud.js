import React, { useEffect, useState } from 'react';

import TagCloud from 'TagCloud'

const WordCloud = () => {
  const [isLoading, setLoad] = useState(true)

  const container = '.content'
  const texts = [
    'Python',
    'TypeScript',
    'C++',
    'MySQL',
    'Firebase',
    'NodeJS',
    'Express',
    'Git',
    'GitHub',
    'HTML',
    'CSS',
    'JavaScript',
    'C',
    'XML',
    'Angular',
    'React',
    'Bootstrap',
    'Material UI',
    'Postman',
    'Figma',
    'Word',
    'Excel',
    'MongoDB',
  ]

  useEffect(() => {
    // Calculate responsive radius based on screen width
    const getRadius = () => {
      if (window.innerWidth < 768) return 180
      if (window.innerWidth < 1024) return 220
      return 280
    }

    const options = {
      radius: getRadius(),
      maxSpeed: 'normal',
      initSpeed: 'normal',
      direction: 135,
      keep: true,
    }

    const cloud = TagCloud(container, texts, options)

    // Handle window resize
    const handleResize = () => {
      const existingTagCloud = document.querySelector(container)
      if (existingTagCloud) {
        existingTagCloud.innerHTML = ''
        TagCloud(container, texts, {
          ...options,
          radius: getRadius()
        })
      }
    }

    window.addEventListener('resize', handleResize)

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize)
      const existingTagCloud = document.querySelector(container)
      if (existingTagCloud) {
        existingTagCloud.innerHTML = ''
      }
    }
  }, [])

  return (
    <div className="main">
      <span className="content"></span>
    </div>
  )
}

export default WordCloud