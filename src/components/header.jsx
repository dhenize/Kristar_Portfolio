import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import signature from '../assets/kristar/signature_cropped.png'

/* ── tiny canvas constellation that appears on hover ── */
const StarField = ({ active }) => {
    const canvasRef = useRef(null)
    const rafRef = useRef(null)
    const starsRef = useRef([])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        const W = canvas.width = 140
        const H = canvas.height = 56

        if (!active) {
            cancelAnimationFrame(rafRef.current)
            ctx.clearRect(0, 0, W, H)
            return
        }

        if (starsRef.current.length === 0) {
            for (let i = 0; i < 11; i++) {
                starsRef.current.push({
                    x: Math.random() * W,
                    y: Math.random() * H,
                    r: Math.random() * 1.4 + 0.4,
                    speed: Math.random() * 0.015 + 0.008,
                    phase: Math.random() * Math.PI * 2
                })
            }
        }

        let t = 0
        const draw = () => {
            ctx.clearRect(0, 0, W, H)
            const stars = starsRef.current
            t += 0.04

            ctx.lineWidth = 0.8
            for (let a = 0; a < stars.length; a++) {
                for (let b = a + 1; b < stars.length; b++) {
                    const dx = stars[a].x - stars[b].x
                    const dy = stars[a].y - stars[b].y
                    const dist = Math.sqrt(dx * dx + dy * dy)
                    if (dist < 45) {
                        ctx.globalAlpha = (1 - dist / 45) * 0.45
                        ctx.strokeStyle = '#E3D095'
                        ctx.beginPath()
                        ctx.moveTo(stars[a].x, stars[a].y)
                        ctx.lineTo(stars[b].x, stars[b].y)
                        ctx.stroke()
                    }
                }
            }

            stars.forEach(s => {
                const alpha = 0.5 + 0.5 * Math.sin(t * s.speed * 60 + s.phase)
                ctx.globalAlpha = alpha
                ctx.fillStyle = '#ffffff'
                ctx.beginPath()
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
                ctx.fill()
            })

            ctx.globalAlpha = 1
            rafRef.current = requestAnimationFrame(draw)
        }

        draw()
        return () => cancelAnimationFrame(rafRef.current)
    }, [active])

    return (
        <canvas
            ref={canvasRef}
            width={140}
            height={56}
            style={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
                opacity: active ? 1 : 0,
                transition: 'opacity .3s ease'
            }}
        />
    )
}

const NavLink = ({ to, children, onClick }) => {
    const [hovered, setHovered] = useState(false)

    const commonStyle = {
        position: 'relative', display: 'inline-block', padding: '4px 2px'
    }

    const textStyle = {
        position: 'relative', zIndex: 1, fontFamily: 'inherit',
        fontSize: hovered ? '1.2rem' : '1.125rem',
        fontWeight: hovered ? 500 : 400,
        letterSpacing: hovered ? '0.02em' : '0',
        color: hovered ? '#E3D095' : 'rgba(255,255,255,0.85)',
        textShadow: hovered
            ? '0 0 10px rgba(227,208,149,0.55), 0 0 24px rgba(151,78,195,0.3)'
            : 'none',
        transition: 'font-size .2s cubic-bezier(.22,1,.36,1), font-weight .15s ease, color .2s ease, text-shadow .25s ease, letter-spacing .2s ease',
        display: 'inline-block'
    }

    const underlineStyle = {
        position: 'absolute', bottom: 0, left: 0,
        height: '1px', width: hovered ? '100%' : '0%',
        background: 'linear-gradient(90deg, transparent, #E3D095, #974EC3)',
        transition: 'width .4s cubic-bezier(.22,1,.36,1)',
        borderRadius: '999px',
        boxShadow: hovered ? '0 0 4px rgba(227,208,149,0.5)' : 'none'
    }

    if (onClick) {
        return (
            <button onClick={onClick} style={{ ...commonStyle, background: 'none', border: 'none', cursor: 'pointer' }}
                onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                <StarField active={hovered} />
                <span style={textStyle}>{children}</span>
                <span style={underlineStyle} />
            </button>
        )
    }

    return (
        <Link to={to} style={commonStyle}
            onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <StarField active={hovered} />
            <span style={textStyle}>{children}</span>
            <span style={underlineStyle} />
        </Link>
    )
}

const Header = ({ onAboutMeClick }) => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className='bg-white/16 absolute w-full flex justify-between items-center p-4 z-50'>
            <div className='px-2 sm:px-5'>
                <img src={signature} alt="logo" className='w-16 sm:w-22' />
            </div>

            {/* Desktop nav */}
            <div className='hidden sm:flex gap-8 md:gap-15 px-5'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink onClick={onAboutMeClick}>About Me</NavLink>
            </div>

            {/* Mobile hamburger */}
            <button
                className='sm:hidden flex flex-col gap-1.5 px-4 py-2 z-50'
                onClick={() => setMenuOpen(v => !v)}
                aria-label="Toggle menu"
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
                {[0,1,2].map(i => (
                    <span key={i} style={{
                        display: 'block', width: '22px', height: '2px',
                        background: 'white', borderRadius: '2px',
                        transition: 'transform .25s, opacity .25s',
                        transform: menuOpen
                            ? i === 0 ? 'translateY(7px) rotate(45deg)'
                            : i === 2 ? 'translateY(-7px) rotate(-45deg)'
                            : 'scaleX(0)'
                            : 'none',
                        opacity: menuOpen && i === 1 ? 0 : 1,
                    }} />
                ))}
            </button>

            {/* Mobile dropdown */}
            {menuOpen && (
                <div style={{
                    position: 'absolute', top: '100%', left: 0, right: 0,
                    background: 'rgba(35,21,40,0.97)',
                    backdropFilter: 'blur(12px)',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', flexDirection: 'column',
                    padding: '1rem 1.5rem', gap: '1rem'
                }}>
                    {[
                        { label: 'Home', to: '/' },
                        { label: 'Projects', to: '/projects' },
                    ].map(({ label, to }) => (
                        <Link key={label} to={to} onClick={() => setMenuOpen(false)}
                            style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'Lato, sans-serif', fontSize: '1rem', textDecoration: 'none' }}>
                            {label}
                        </Link>
                    ))}
                    <button onClick={() => { onAboutMeClick(); setMenuOpen(false) }}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.85)', fontFamily: 'Lato, sans-serif', fontSize: '1rem', textAlign: 'left', padding: 0 }}>
                        About Me
                    </button>
                </div>
            )}
        </header>
    )
}

export default Header