import React, { useState, useEffect } from 'react'
import CvResume from '../../components/home/cvresume.jsx'

import profilePic from '../../assets/kristar/LOPEZ_2X2.png'

const AboutMe = ({ onClose }) => {
    const [animateIn, setAnimateIn] = useState(false)
    const [showCV, setShowCV] = useState(false)
    const [panelDir, setPanelDir] = useState('in-left')

    useEffect(() => {
        setTimeout(() => setAnimateIn(true), 60)
    }, [])

    const handleClose = () => {
        setAnimateIn(false)
        setTimeout(onClose, 320)
    }

    const handleViewResume = () => {
        setPanelDir('out-left')
        setTimeout(() => {
            setShowCV(true)
            setPanelDir('in-right')
        }, 300)
    }

    const handleBackToAbout = () => {
        setPanelDir('out-right')
        setTimeout(() => {
            setShowCV(false)
            setPanelDir('in-left')
        }, 300)
    }

    const panelClass = {
        'out-left':  'am-slide-out-left',
        'out-right': 'am-slide-out-right',
        'in-right':  'am-slide-in-right',
        'in-left':   'am-slide-in-left',
    }[panelDir] || ''

    return (
        <>
            <style>{`
                @keyframes am-fadeIn {
                    from { opacity: 0; transform: scale(0.94) translateY(16px); }
                    to   { opacity: 1; transform: scale(1) translateY(0); }
                }
                @keyframes am-fadeOut {
                    from { opacity: 1; transform: scale(1) translateY(0); }
                    to   { opacity: 0; transform: scale(0.94) translateY(16px); }
                }
                @keyframes am-slideOutLeft {
                    from { opacity: 1; transform: translateX(0); }
                    to   { opacity: 0; transform: translateX(-55px); }
                }
                @keyframes am-slideInRight {
                    from { opacity: 0; transform: translateX(55px); }
                    to   { opacity: 1; transform: translateX(0); }
                }
                @keyframes am-slideOutRight {
                    from { opacity: 1; transform: translateX(0); }
                    to   { opacity: 0; transform: translateX(55px); }
                }
                @keyframes am-slideInLeft {
                    from { opacity: 0; transform: translateX(-55px); }
                    to   { opacity: 1; transform: translateX(0); }
                }
                @keyframes am-pulseRing {
                    0%, 100% { box-shadow: 0 0 0 3px rgba(232,83,149,0.5), 0 0 0 7px rgba(98,29,122,0.25); }
                    50%      { box-shadow: 0 0 0 5px rgba(232,83,149,0.75), 0 0 0 11px rgba(98,29,122,0.35); }
                }
                @keyframes am-staggerIn {
                    from { opacity: 0; transform: translateY(14px); }
                    to   { opacity: 1; transform: translateY(0); }
                }

                .am-modal-enter { animation: am-fadeIn  .32s cubic-bezier(.22,1,.36,1) forwards; }
                .am-modal-leave { animation: am-fadeOut .28s cubic-bezier(.22,1,.36,1) forwards; }

                .am-slide-out-left  { animation: am-slideOutLeft  .3s cubic-bezier(.4,0,.2,1) forwards; }
                .am-slide-out-right { animation: am-slideOutRight .3s cubic-bezier(.4,0,.2,1) forwards; }
                .am-slide-in-right  { animation: am-slideInRight  .3s cubic-bezier(.4,0,.2,1) forwards; }
                .am-slide-in-left   { animation: am-slideInLeft   .3s cubic-bezier(.4,0,.2,1) forwards; }

                .am-close-btn {
                    position: absolute;
                    top: 15px; right: 15px;
                    width: 40px; height: 40px;
                    border-radius: 50%;
                    background: #621D7A;
                    color: white;
                    border: 2px solid white;
                    font-size: 20px; font-weight: bold;
                    display: flex; align-items: center; justify-content: center;
                    cursor: pointer; z-index: 100;
                    transition: background .3s ease, transform .3s ease, box-shadow .3s ease;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.35);
                }
                .am-close-btn:hover {
                    background: #FF9071;
                    transform: rotate(90deg) scale(1.1);
                    box-shadow: 0 6px 20px rgba(0,0,0,0.4);
                }

                .am-profile-ring {
                    animation: am-pulseRing 3s ease-in-out infinite;
                }

                .am-right-scroll::-webkit-scrollbar { width: 4px; }
                .am-right-scroll::-webkit-scrollbar-track { background: transparent; }
                .am-right-scroll::-webkit-scrollbar-thumb { background: rgba(200,175,98,0.35); border-radius: 4px; }
                .am-right-scroll:hover::-webkit-scrollbar-thumb { background: rgba(200,175,98,0.6); }

                .am-fact-card {
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 12px;
                    padding: 14px 16px;
                    transition: background .2s, border-color .2s;
                }
                .am-fact-card:hover {
                    background: rgba(98,29,122,0.18);
                    border-color: rgba(232,83,149,0.28);
                }

                .am-section-label {
                    color: #C8AF62;
                    font-family: 'Lato', sans-serif;
                    font-weight: 700;
                    font-size: .90rem;
                    letter-spacing: .13em;
                    margin: 0 0 10px 0;
                }

                .am-resume-btn {
                    display: flex; align-items: center; justify-content: center; gap: 8px;
                    width: 100%;
                    background: linear-gradient(135deg, #621D7A, #E85395);
                    border: none; border-radius: 999px;
                    padding: 11px 18px;
                    color: white;
                    font-size: .85rem; font-family: 'Lato', sans-serif; font-weight: 700;
                    cursor: pointer; letter-spacing: .04em;
                    transition: opacity .2s, transform .2s, box-shadow .2s;
                    box-shadow: 0 4px 16px rgba(98,29,122,0.45);
                }
                .am-resume-btn:hover {
                    opacity: .9; transform: translateY(-1px);
                    box-shadow: 0 6px 22px rgba(232,83,149,0.5);
                }

                .am-tag {
                    background: rgba(98,29,122,0.28);
                    border: 1px solid rgba(232,83,149,0.32);
                    border-radius: 999px;
                    padding: 4px 11px;
                    color: rgba(255,255,255,0.85);
                    font-size: .72rem;
                    font-family: 'Lato', sans-serif;
                }

                .am-stagger > * {
                    animation: am-staggerIn .42s cubic-bezier(.22,1,.36,1) both;
                }
                .am-stagger > *:nth-child(1) { animation-delay: .04s; }
                .am-stagger > *:nth-child(2) { animation-delay: .10s; }
                .am-stagger > *:nth-child(3) { animation-delay: .17s; }
                .am-stagger > *:nth-child(4) { animation-delay: .24s; }
                .am-stagger > *:nth-child(5) { animation-delay: .31s; }
                .am-stagger > *:nth-child(6) { animation-delay: .38s; }
            `}</style>

            {/* Backdrop */}
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">

                {/* Gradient border — same technique as .skills-modal-border */}
                <div
                    className={`w-full max-w-3xl relative ${animateIn ? 'am-modal-enter' : 'am-modal-leave'}`}
                    style={{
                        borderRadius: '12px',
                        border: '4px solid transparent',
                        background: 'linear-gradient(#231528, #231528) padding-box, linear-gradient(180deg, #621D7A, #E85395, #FF9071, #C8AF62) border-box',
                    }}
                >
                    <div
                        className="relative bg-[#231528] rounded-xl"
                        style={{ height: '600px' }}
                    >
                        <button className="am-close-btn" onClick={handleClose}>✕</button>

                        <div
                            className={`w-full h-full rounded-xl overflow-hidden flex ${panelClass}`}
                        >
                            {showCV
                                ? <CvResume onBack={handleBackToAbout} />
                                : <AboutPanel onViewResume={handleViewResume} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const AboutPanel = ({ onViewResume }) => {
    return (
        <div className="flex w-full h-full">

            {/* ── LEFT: ID card — fixed layout, no scroll needed ── */}
            <div
                style={{
                    width: '230px',
                    flexShrink: 0,
                    background: 'linear-gradient(180deg, #1c0d2a 0%, #231528 60%, #2b1438 100%)',
                    borderRight: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    /* Top stripe is a border, not an absolute/sticky element */
                    borderTop: '4px solid transparent',
                    backgroundImage: 'linear-gradient(180deg, #1c0d2a 0%, #231528 60%, #2b1438 100%)',
                    backgroundClip: 'padding-box',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >

                <div style={{
                    flex: 1,
                    overflowY: 'auto',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '1.5rem 1.2rem 1.5rem',
                    scrollbarWidth: 'none'
                }}>

                    {/* Profile pic */}
                    <div
                        className="am-profile-ring"
                        style={{
                            width: '100px', height: '100px',
                            borderRadius: '50%', overflow: 'hidden', flexShrink: 0,
                            background: 'linear-gradient(135deg, #621D7A, #E85395)'
                        }}
                    >
                        <img src={profilePic} alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    {/* Name block */}
                    <div style={{ textAlign: 'center', width: '100%' }}>
                        <h2 style={{ color: 'white', fontSize: '1.9rem', fontFamily: '"Just Another Hand", cursive', lineHeight: 1, margin: 0 }}>
                            Kristar
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '.75rem', fontFamily: 'Lato, sans-serif', margin: '5px 0 0', lineHeight: 1.45 }}>
                            Dhenize Krista Faith<br />C. Lopez
                        </p>
                    </div>

                    {/* Divider */}
                    <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />

                    {/* Contact */}
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <div>
                            <p style={{ color: '#C8AF62', fontSize: '.68rem', fontFamily: 'Lato, sans-serif', letterSpacing: '.1em', margin: '0 0 3px', fontWeight: 700 }}>EMAIL</p>
                            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '.75rem', fontFamily: 'Lato, sans-serif', wordBreak: 'break-all', lineHeight: 1.5, margin: 0 }}>
                                dhenize.lopez11@gmail.com
                            </p>
                        </div>
                        <div>
                            <p style={{ color: '#C8AF62', fontSize: '.68rem', fontFamily: 'Lato, sans-serif', letterSpacing: '.1em', margin: '0 0 3px', fontWeight: 700 }}>LOCATION</p>
                            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '.75rem', fontFamily: 'Lato, sans-serif', lineHeight: 1.5, margin: 0 }}>
                                Brgy. Malagasang 1-F,<br />Imus, Cavite
                            </p>
                        </div>
                    </div>

                    {/* Divider */}
                    <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />

                    {/* Role tags */}
                    <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center' }}>
                        {['IT Student', 'Fullstack Developer', 'QA', 'Illustrator', 'Content Creator'].map(tag => (
                            <span key={tag} className="am-tag">{tag}</span>
                        ))}
                    </div>

                    {/* Divider */}
                    <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />

                    {/* View Resume button */}
                    <button className="am-resume-btn" onClick={onViewResume}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14 2 14 8 20 8"/>
                        </svg>
                        View Resume
                    </button>

                </div>
            </div>

            {/* ── RIGHT: Bio — scrollable ── */}
            <div
                className="am-right-scroll flex-1 overflow-y-auto"
                style={{ padding: '1.8rem 1.6rem 1.8rem 1.5rem' }}
            >
                <div className="am-stagger" style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>

                    {/* Header */}
                    <div>
                        <h1 style={{ color: 'white', fontSize: '2.6rem', fontFamily: '"Just Another Hand", cursive', lineHeight: 1.05, margin: 0 }}>
                            About Me
                        </h1>
                    </div>

                    {/* Bio */}
                    <div className="am-fact-card">
                        <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '.88rem', fontFamily: 'Lato, sans-serif', lineHeight: 1.8, margin: 0 }}>
                            She was born on <span style={{ color: '#C8AF62', fontWeight: 600 }}>November 24, 2004</span> in the City of Manila. She is the oldest daughter and the first among the two children of <span style={{ color: '#C8AF62', fontWeight: 600 }}>Christopher R. Lopez and Desita C. Lopez</span>.
                        </p>
                    </div>

                    {/* Education paragraph */}
                    <div className="am-fact-card">
                        <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '.88rem', fontFamily: 'Lato, sans-serif', lineHeight: 1.8, margin: 0 }}>
                            She finished her primary education at Malagasang II Elementary School in Imus City, Cavite in 2016; her secondary education at Gen. Tomas Mascardo National High School in Imus City, Cavite in 2020; and her senior high school education at Informatics College Cavite – Imus in 2022.
                        </p>
                    </div>

                    {/* Current education highlight */}
                    <div className="am-fact-card" style={{ borderColor: 'rgba(232,83,149,0.35)', background: 'rgba(98,29,122,0.15)' }}>
                        <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '.88rem', fontFamily: 'Lato, sans-serif', lineHeight: 1.8, margin: 0 }}>
                            Currently, she is in her fourth year of college at Cavite State University — Imus Campus, under the program of Bachelor of Science in Information Technology, and she expects to finish her studies in 2026.
                        </p>
                    </div>

                    {/* Facts */}
                    <div style = {{marginTop: '20px'}}>
                        <p className="am-section-label">FACTS ABOUT KRISTAR PORTFOLIO</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <div className="am-fact-card">
                                <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '.86rem', fontFamily: 'Lato, sans-serif', lineHeight: 1.8, margin: 0 }}>
                                    <span style={{ color: '#C8AF62', fontWeight: 700 }}>"Kristar"</span> is Dhenize's artist name created during senior high school. It is derived from her second name <span style={{ color: '#C8AF62', fontWeight: 600 }}>Krista</span>, combined with her favorite shape — the <span style={{ color: '#C8AF62', fontWeight: 600 }}>star</span> — due to her fascination in studying celestial bodies and phenomena.
                                </p>
                            </div>
                            <div className="am-fact-card">
                                <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '.86rem', fontFamily: 'Lato, sans-serif', lineHeight: 1.8, margin: 0 }}>
                                    The tech stack used to make this portfolio: <span style={{ color: '#C8AF62', fontWeight: 600 }}>React JS (Vite)</span>, <span style={{ color: '#C8AF62', fontWeight: 600 }}>Tailwind CSS</span>, and <span style={{ color: '#C8AF62', fontWeight: 600 }}>JavaScript</span>. Its GitHub repository is deployed on <span style={{ color: '#C8AF62', fontWeight: 600 }}>Vercel</span>.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutMe