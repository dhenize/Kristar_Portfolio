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
                    top: 12px; right: 12px;
                    width: 36px; height: 36px;
                    border-radius: 50%;
                    background: #621D7A;
                    color: white;
                    border: 2px solid white;
                    font-size: 18px; font-weight: bold;
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
                    padding: 12px 14px;
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
                    font-size: .85rem;
                    letter-spacing: .13em;
                    margin: 0 0 10px 0;
                }

                .am-resume-btn {
                    display: flex; align-items: center; justify-content: center; gap: 8px;
                    width: 100%;
                    background: linear-gradient(135deg, #621D7A, #E85395);
                    border: none; border-radius: 999px;
                    padding: 10px 18px;
                    color: white;
                    font-size: .82rem; font-family: 'Lato', sans-serif; font-weight: 700;
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
                    padding: 4px 10px;
                    color: rgba(255,255,255,0.85);
                    font-size: .70rem;
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

                /* Mobile: stack profile bar on top of bio */
                @media (max-width: 639px) {
                    .am-layout {
                        flex-direction: column !important;
                        overflow-y: auto !important;
                    }
                    .am-sidebar {
                        width: 100% !important;
                        border-right: none !important;
                        border-bottom: 1px solid rgba(255,255,255,0.08) !important;
                        flex-direction: row !important;
                        align-items: center !important;
                        gap: 14px !important;
                        padding: 1rem !important;
                        flex-shrink: 0 !important;
                    }
                    .am-sidebar-inner {
                        flex-direction: row !important;
                        gap: 14px !important;
                        align-items: center !important;
                        padding: 0 !important;
                        overflow: visible !important;
                    }
                    .am-profile-ring {
                        width: 72px !important;
                        height: 72px !important;
                        flex-shrink: 0 !important;
                    }
                    .am-sidebar-meta {
                        display: none !important;
                    }
                    .am-resume-btn {
                        padding: 8px 14px !important;
                        font-size: .75rem !important;
                    }
                }
            `}</style>

            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-3 sm:px-4 py-4">
                <div
                    className={`w-full max-w-3xl relative ${animateIn ? 'am-modal-enter' : 'am-modal-leave'}`}
                    style={{
                        borderRadius: '12px',
                        border: '4px solid transparent',
                        background: 'linear-gradient(#231528, #231528) padding-box, linear-gradient(180deg, #621D7A, #E85395, #FF9071, #C8AF62) border-box',
                        maxHeight: '92vh',
                    }}
                >
                    <div
                        className="relative bg-[#231528] rounded-xl"
                        style={{ height: 'min(600px, 88vh)' }}
                    >
                        <button className="am-close-btn" onClick={handleClose}>✕</button>

                        <div className={`w-full h-full rounded-xl overflow-hidden flex ${panelClass}`}>
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
        <div className="am-layout flex w-full h-full overflow-hidden">

            {/* ── LEFT: ID card ── */}
            <div className="am-sidebar" style={{
                width: '210px',
                flexShrink: 0,
                background: 'linear-gradient(180deg, #1c0d2a 0%, #231528 60%, #2b1438 100%)',
                borderRight: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="am-sidebar-inner" style={{
                    flex: 1,
                    overflowY: 'auto',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '1.3rem 1rem 1.3rem',
                    scrollbarWidth: 'none'
                }}>
                    {/* Profile pic */}
                    <div className="am-profile-ring" style={{
                        width: '90px', height: '90px',
                        borderRadius: '50%', overflow: 'hidden', flexShrink: 0,
                        background: 'linear-gradient(135deg, #621D7A, #E85395)'
                    }}>
                        <img src={profilePic} alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    {/* Name */}
                    <div style={{ textAlign: 'center', width: '100%' }}>
                        <h2 style={{ color: 'white', fontSize: '1.8rem', fontFamily: '"Just Another Hand", cursive', lineHeight: 1, margin: 0 }}>
                            Kristar
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '.72rem', fontFamily: 'Lato, sans-serif', margin: '4px 0 0', lineHeight: 1.45 }}>
                            Dhenize Krista Faith<br />C. Lopez
                        </p>
                    </div>

                    <div className="am-sidebar-meta" style={{ width: '100%', display: 'contents' }}>
                        <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />

                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <div>
                                <p style={{ color: '#C8AF62', fontSize: '.65rem', fontFamily: 'Lato, sans-serif', letterSpacing: '.1em', margin: '0 0 3px', fontWeight: 700 }}>EMAIL</p>
                                <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '.72rem', fontFamily: 'Lato, sans-serif', wordBreak: 'break-all', lineHeight: 1.5, margin: 0 }}>
                                    dhenize.lopez11@gmail.com
                                </p>
                            </div>
                            <div>
                                <p style={{ color: '#C8AF62', fontSize: '.65rem', fontFamily: 'Lato, sans-serif', letterSpacing: '.1em', margin: '0 0 3px', fontWeight: 700 }}>LOCATION</p>
                                <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '.72rem', fontFamily: 'Lato, sans-serif', lineHeight: 1.5, margin: 0 }}>
                                    Brgy. Malagasang 1-F,<br />Imus, Cavite
                                </p>
                            </div>
                        </div>

                        <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />

                        <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: '5px', justifyContent: 'center' }}>
                            {['IT Student', 'Fullstack Dev', 'QA', 'Illustrator', 'Content Creator'].map(tag => (
                                <span key={tag} className="am-tag">{tag}</span>
                            ))}
                        </div>

                        <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />
                    </div>

                    <button className="am-resume-btn" onClick={onViewResume}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14 2 14 8 20 8"/>
                        </svg>
                        View Resume
                    </button>
                </div>
            </div>

            {/* ── RIGHT: Bio ── */}
            <div className="am-right-scroll flex-1 overflow-y-auto" style={{ padding: '1.4rem 1.3rem' }}>
                <div className="am-stagger" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <div>
                        <h1 style={{ color: 'white', fontSize: '2.4rem', fontFamily: '"Just Another Hand", cursive', lineHeight: 1.05, margin: 0 }}>
                            About Me
                        </h1>
                    </div>

                    <div className="am-fact-card">
                        <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '.85rem', fontFamily: 'Lato, sans-serif', lineHeight: 1.8, margin: 0 }}>
                            She was born on <span style={{ color: '#C8AF62', fontWeight: 600 }}>November 24, 2004</span> in the City of Manila. She is the oldest daughter and the first among the two children of <span style={{ color: '#C8AF62', fontWeight: 600 }}>Christopher R. Lopez and Desita C. Lopez</span>.
                        </p>
                    </div>

                    <div className="am-fact-card">
                        <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '.85rem', fontFamily: 'Lato, sans-serif', lineHeight: 1.8, margin: 0 }}>
                            She finished her primary education at Malagasang II Elementary School in Imus City, Cavite in 2016; her secondary education at Gen. Tomas Mascardo National High School in 2020; and her senior high school at Informatics College Cavite – Imus in 2022.
                        </p>
                    </div>

                    <div className="am-fact-card" style={{ borderColor: 'rgba(232,83,149,0.35)', background: 'rgba(98,29,122,0.15)' }}>
                        <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '.85rem', fontFamily: 'Lato, sans-serif', lineHeight: 1.8, margin: 0 }}>
                            Currently, she is in her fourth year of college at Cavite State University — Imus Campus, under the program of Bachelor of Science in Information Technology, and she expects to finish her studies in 2026.
                        </p>
                    </div>

                    <div style={{ marginTop: '8px' }}>
                        <p className="am-section-label">FACTS ABOUT KRISTAR PORTFOLIO</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <div className="am-fact-card">
                                <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '.83rem', fontFamily: 'Lato, sans-serif', lineHeight: 1.8, margin: 0 }}>
                                    <span style={{ color: '#C8AF62', fontWeight: 700 }}>"Kristar"</span> is Dhenize's artist name created during senior high school. It is derived from her second name <span style={{ color: '#C8AF62', fontWeight: 600 }}>Krista</span>, combined with her favorite shape — the <span style={{ color: '#C8AF62', fontWeight: 600 }}>star</span>.
                                </p>
                            </div>
                            <div className="am-fact-card">
                                <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '.83rem', fontFamily: 'Lato, sans-serif', lineHeight: 1.8, margin: 0 }}>
                                    Tech stack: <span style={{ color: '#C8AF62', fontWeight: 600 }}>React JS (Vite)</span>, <span style={{ color: '#C8AF62', fontWeight: 600 }}>Tailwind CSS</span>, and <span style={{ color: '#C8AF62', fontWeight: 600 }}>JavaScript</span>. Deployed on <span style={{ color: '#C8AF62', fontWeight: 600 }}>Vercel</span>.
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