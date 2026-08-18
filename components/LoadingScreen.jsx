'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import './LoadingScreen.css'

const GAME_LINE_COUNT = 27

const LoadingScreen = ({ onComplete }) => {
  const [hidden, setHidden] = useState(false)
  const [fading, setFading] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [complete, setComplete] = useState(false)
  const [gameOut, setGameOut] = useState(false)
  const [percent, setPercent] = useState(0)
  const loadState = useRef({ percent: 0 })
  const intervals = useRef([])

  const clearAllIntervals = useCallback(() => {
    intervals.current.forEach(clearInterval)
    intervals.current = []
  }, [])

  const updatePercent = useCallback((val) => {
    const clamped = Math.min(val, 100)
    loadState.current.percent = clamped
    setPercent(clamped)
  }, [])

  useEffect(() => {
    const i1 = setInterval(() => {
      if (loadState.current.percent <= 50) {
        const next = loadState.current.percent + Math.round(Math.random() * 5)
        updatePercent(next)
      } else {
        clearAllIntervals()
        const i2 = setInterval(() => {
          const next = loadState.current.percent + Math.round(Math.random())
          updatePercent(next)
          if (next > 91) {
            clearAllIntervals()
          }
        }, 2000)
        intervals.current.push(i2)
      }
    }, 100)
    intervals.current.push(i1)

    return clearAllIntervals
  }, [clearAllIntervals, updatePercent])

  const finishLoading = useCallback(() => {
    return new Promise((resolve) => {
      clearAllIntervals()
      const i = setInterval(() => {
        if (loadState.current.percent < 100) {
          updatePercent(loadState.current.percent + 1)
        } else {
          clearInterval(i)
          resolve()
        }
      }, 2)
      intervals.current.push(i)
    })
  }, [clearAllIntervals, updatePercent])

  const handleClick = useCallback(async () => {
    if (clicked) return
    setClicked(true)
    await finishLoading()
    setComplete(true)
    setGameOut(true)
    setTimeout(() => {
      setFading(true)
      setTimeout(() => {
        setHidden(true)
        if (onComplete) onComplete()
      }, 800)
    }, 1000)
  }, [clicked, finishLoading, onComplete])

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
  }, [])

  if (hidden) return null

  return (
    <div
      className={`ls-root${fading ? ' ls-fade-out' : ''}${hidden ? ' ls-hidden' : ''}`}
      style={{ display: hidden ? 'none' : undefined }}
    >
      <div className="ls-split">
        <div className="ls-left" />
        <div className="ls-right">
          <div className={`ls-game${gameOut ? ' ls-game-out' : ''}`}>
            <div className="ls-game-container">
              <div className="ls-game-in">
                {Array.from({ length: GAME_LINE_COUNT }, (_, i) => (
                  <div key={i} className="ls-game-line" />
                ))}
              </div>
              <div className="ls-game-ball" />
            </div>
          </div>
          <div className="ls-jp-content">
            <div className="ls-jp-text-container">
              <div className="ls-jp-main">読み込み中...</div>
              <div className="ls-jp-sub">システムを起動する</div>
            </div>
            <div className="ls-loader">
              <div className="ls-loader-bar" style={{ '--pct': `${percent}%` }} />
              <div className="ls-loader-percent">{percent}%</div>
            </div>
          </div>
          <div className="ls-vertical-text">機・械・の・下・の・機・械</div>
        </div>
      </div>
      <div
        className={`ls-wrap${clicked ? ' ls-clicked' : ''}${complete ? ' ls-complete' : ''}`}
        onMouseMove={handleMouseMove}
      >
        <div className="ls-hover" />
        <div className="ls-button" onClick={handleClick}>
          <div className="ls-text-container">
            <div className="ls-content">
              <div className="ls-content-in">
                Loading <span>{percent}%</span>
              </div>
            </div>
            <div className="ls-box" />
          </div>
          <div className="ls-content2"><span>ようこそ</span></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
