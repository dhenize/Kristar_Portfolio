import React, { useState, useEffect } from 'react'
import CvResume from '../../components/home/cvresume.jsx'

// import profilePic from '../../assets/kristar/profile.jpg'

const AboutMe = ({ onClose }) => {
    const [animateIn, setAnimateIn] = useState(false)
    const [showCV, setShowCV] = useState(false)
    const [sliding, setSliding] = useState(false)
    const [panelDir, setPanelDir] = useState('in-left') // which animation to play

    useEffect(() => {
        setTimeout(() => setAnimateIn(true), 60)
    }, [])

    const handleClose = () => {
        setAnimateIn(false)
        setTimeout(onClose, 320)
    }

    const handleViewResume = () => {
        setPanelDir('out-left')
        setSliding(true)
        setTimeout(() => {
            setShowCV(true)
            setPanelDir('in-right')
            setSliding(false)
        }, 300)
    }

    const handleBackToAbout = () => {
        setPanelDir('out-right')
        setSliding(true)
        setTimeout(() => {
            setShowCV(false)
            setPanelDir('in-left')
            setSliding(false)
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
                    0%, 100% { box-shadow: 0 0 0 3px rgba(232,83,149,0.45), 0 0 0 6px rgba(98,29,122,0.2); }
                    50%      { box-shadow: 0 0 0 5px rgba(232,83,149,0.7), 0 0 0 10px rgba(98,29,122,0.3); }
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

                /* Close button: #621D7A → #FF9071 */
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

                /* Left panel scrollbar */
                .am-left-scroll::-webkit-scrollbar { width: 3px; }
                .am-left-scroll::-webkit-scrollbar-track { background: transparent; }
                .am-left-scroll::-webkit-scrollbar-thumb { background: rgba(232,83,149,0.3); border-radius: 4px; }

                /* Right panel scrollbar */
                .am-right-scroll::-webkit-scrollbar { width: 4px; }
                .am-right-scroll::-webkit-scrollbar-track { background: transparent; }
                .am-right-scroll::-webkit-scrollbar-thumb { background: rgba(200,175,98,0.3); border-radius: 4px; }
                .am-right-scroll:hover::-webkit-scrollbar-thumb { background: rgba(200,175,98,0.55); }

                .am-fact-card {
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.09);
                    border-radius: 12px;
                    padding: 12px 14px;
                    transition: background .2s, border-color .2s;
                }
                .am-fact-card:hover {
                    background: rgba(98,29,122,0.15);
                    border-color: rgba(232,83,149,0.25);
                }

                .am-section-label {
                    color: #C8AF62;
                    font-family: 'Lato', sans-serif;
                    font-weight: 700;
                    font-size: .68rem;
                    letter-spacing: .13em;
                    margin-bottom: 8px;
                    margin-top: 0;
                }

                .am-resume-btn {
                    display: flex; align-items: center; justify-content: center; gap: 7px;
                    width: 100%;
                    background: linear-gradient(135deg, #621D7A, #E85395);
                    border: none; border-radius: 999px;
                    padding: 10px 18px;
                    color: white;
                    font-size: .8rem; font-family: 'Lato', sans-serif; font-weight: 700;
                    cursor: pointer; letter-spacing: .04em;
                    transition: opacity .2s, transform .2s, box-shadow .2s;
                    box-shadow: 0 4px 16px rgba(98,29,122,0.45);
                }
                .am-resume-btn:hover {
                    opacity: .9; transform: translateY(-1px);
                    box-shadow: 0 6px 22px rgba(232,83,149,0.5);
                }

                .am-tag {
                    background: rgba(98,29,122,0.25);
                    border: 1px solid rgba(232,83,149,0.3);
                    border-radius: 999px;
                    padding: 3px 10px;
                    color: rgba(255,255,255,0.8);
                    font-size: .62rem;
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

                {/* Gradient border — #621D7A → #E85395 → #FF9071 → #C8AF62 */}
                <div
                    className={`w-full max-w-3xl rounded-2xl p-0.5 relative ${animateIn ? 'am-modal-enter' : 'am-modal-leave'}`}
                    style={{
                        background: 'linear-gradient(180deg, #621D7A 0%, #E85395 40%, #FF9071 70%, #C8AF62 100%)'
                    }}
                >
                    {/* Inner dark bg — NO overflow-hidden so left panel isn't cut */}
                    <div
                        className="relative bg-[#231528] rounded-2xl flex"
                        style={{ height: '580px' }}
                    >
                        {/* Close button sits above everything */}
                        <button className="am-close-btn" onClick={handleClose}>✕</button>

                        {/* Panel — takes full width/height, clips only at this level */}
                        <div
                            className={`w-full h-full rounded-2xl overflow-hidden ${panelClass}`}
                            style={{ display: 'flex' }}
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

/* ── About Panel — extracted so it can be a proper component with its own state ── */
const AboutPanel = ({ onViewResume }) => {
    return (
        <div className="flex w-full h-full">

            {/* ── LEFT: ID card — scrollable ── */}
            <div
                className="am-left-scroll shrink-0 overflow-y-auto"
                style={{
                    width: '210px',
                    background: 'linear-gradient(180deg, #1c0d2a 0%, #231528 55%, #2b1438 100%)',
                    borderRight: '1px solid rgba(255,255,255,0.07)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '1.75rem 1.1rem 1.5rem',
                    position: 'relative'
                }}
            >
                {/* Top accent stripe */}
                <div style={{
                    position: 'sticky', top: 0, left: 0,
                    width: 'calc(100% + 2.2rem)', marginLeft: '-1.1rem', marginTop: '-1.75rem',
                    marginBottom: '0',
                    height: '4px', flexShrink: 0,
                    background: 'linear-gradient(90deg, #621D7A, #E85395, #FF9071, #C8AF62)'
                }} />

                {/* Profile pic */}
                <div
                    className="am-profile-ring"
                    style={{
                        marginTop: '0.25rem',
                        width: '88px', height: '88px',
                        borderRadius: '50%', overflow: 'hidden', flexShrink: 0,
                        background: 'linear-gradient(135deg, #621D7A, #E85395)'
                    }}
                >
                    {/* Swap this div for: <img src={profilePic} alt="profile" style={{width:'100%',height:'100%',objectFit:'cover'}} /> */}
                    <div style={{
                        width: '100%', height: '100%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'rgba(255,255,255,0.35)', fontSize: '.62rem',
                        fontFamily: 'Lato, sans-serif', textAlign: 'center'
                    }}>profile pic</div>
                </div>

                {/* Name block */}
                <div style={{ textAlign: 'center', width: '100%' }}>
                    <p style={{ color: '#C8AF62', fontSize: '.58rem', fontFamily: 'Lato, sans-serif', letterSpacing: '.14em', margin: '0 0 3px' }}>
                        KNOWN AS
                    </p>
                    <h2 style={{ color: 'white', fontSize: '1.55rem', fontFamily: '"Just Another Hand", cursive', lineHeight: 1, margin: 0 }}>
                        Kristar
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '.66rem', fontFamily: 'Lato, sans-serif', margin: '4px 0 0', lineHeight: 1.4 }}>
                        Dhenize Krista Faith C. Lopez
                    </p>
                </div>

                {/* Divider */}
                <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.08)', flexShrink: 0 }} />

                {/* Contact */}
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div>
                        <p style={{ color: '#C8AF62', fontSize: '.58rem', fontFamily: 'Lato, sans-serif', letterSpacing: '.1em', margin: '0 0 2px' }}>EMAIL</p>
                        <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '.66rem', fontFamily: 'Lato, sans-serif', wordBreak: 'break-all', lineHeight: 1.5, margin: 0 }}>
                            dhenize.lopez11@gmail.com
                        </p>
                    </div>
                    <div>
                        <p style={{ color: '#C8AF62', fontSize: '.58rem', fontFamily: 'Lato, sans-serif', letterSpacing: '.1em', margin: '0 0 2px' }}>LOCATION</p>
                        <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '.66rem', fontFamily: 'Lato, sans-serif', lineHeight: 1.5, margin: 0 }}>
                            Brgy. Malagasang 1-F,<br />Imus, Cavite
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.08)', flexShrink: 0 }} />

                {/* Role tags */}
                <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: '5px', justifyContent: 'center' }}>
                    {['IT Student', 'Frontend Dev', 'UI/UX', 'Digital Artist'].map(tag => (
                        <span key={tag} className="am-tag">{tag}</span>
                    ))}
                </div>

                {/* Divider */}
                <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.08)', flexShrink: 0 }} />

                {/* View Resume button — always visible at bottom of left panel */}
                <button className="am-resume-btn" onClick={onViewResume}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                    </svg>
                    View Resume
                </button>
            </div>

            {/* ── RIGHT: Bio — scrollable ── */}
            <div
                className="am-right-scroll flex-1 overflow-y-auto"
                style={{ padding: '1.75rem 1.6rem 1.75rem 1.5rem' }}
            >
                <div className="am-stagger" style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem' }}>

                    {/* Header */}
                    <div>
                        <p style={{ color: '#C8AF62', fontSize: '.65rem', fontFamily: 'Lato, sans-serif', letterSpacing: '.15em', margin: '0 0 2px' }}>
                            ABOUT ME
                        </p>
                        <h1 style={{ color: 'white', fontSize: '2.5rem', fontFamily: '"Just Another Hand", cursive', lineHeight: 1, margin: 0 }}>
                            Who is Dhenize?
                        </h1>
                    </div>

                    {/* Bio */}
                    <div className="am-fact-card">
                        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '.82rem', fontFamily: 'Lato, sans-serif', lineHeight: 1.75, margin: 0 }}>
                            She was born on <span style={{ color: '#C8AF62' }}>[BIRTHDAY]</span> in the City of Manila. She is the oldest daughter and the first among the two children of <span style={{ color: '#C8AF62' }}>[PARENTS]</span>.
                        </p>
                    </div>

                    {/* Education */}
                    <div>
                        <p className="am-section-label">EDUCATION</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                            {[
                                { year: '2016', school: 'Malagasang II Elementary School', level: 'Primary Education', loc: 'Imus City, Cavite' },
                                { year: '2020', school: 'Gen. Tomas Mascardo National High School', level: 'Secondary Education', loc: 'Imus City, Cavite' },
                                { year: '2022', school: 'Informatics College Cavite – Imus', level: 'Senior High School', loc: 'Imus, Cavite' },
                                { year: '2026 ✦', school: 'Cavite State University — Imus Campus', level: 'BS Information Technology', loc: '4th Year · Expected 2026', current: true },
                            ].map((e, i) => (
                                <div
                                    key={i}
                                    className="am-fact-card"
                                    style={{
                                        display: 'flex', gap: '12px', alignItems: 'flex-start',
                                        ...(e.current ? { borderColor: 'rgba(232,83,149,0.35)', background: 'rgba(98,29,122,0.15)' } : {})
                                    }}
                                >
                                    <span style={{
                                        flexShrink: 0,
                                        color: e.current ? '#C8AF62' : 'rgba(255,255,255,0.3)',
                                        fontSize: '.63rem', fontFamily: 'Lato, sans-serif',
                                        fontWeight: 700, letterSpacing: '.03em',
                                        marginTop: '2px', minWidth: '38px'
                                    }}>{e.year}</span>
                                    <div>
                                        <p style={{ color: 'white', fontSize: '.81rem', fontFamily: 'Lato, sans-serif', fontWeight: 600, margin: 0, lineHeight: 1.35 }}>{e.school}</p>
                                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '.7rem', fontFamily: 'Lato, sans-serif', margin: '2px 0 0' }}>{e.level} · {e.loc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Facts */}
                    <div>
                        <p className="am-section-label">FACTS ABOUT KRISTAR PORTFOLIO</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                            <div className="am-fact-card">
                                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '.8rem', fontFamily: 'Lato, sans-serif', lineHeight: 1.75, margin: 0 }}>
                                    <span style={{ color: '#C8AF62', fontWeight: 700 }}>"Kristar"</span> is Dhenize's artist name created during senior high school. Derived from her second name <span style={{ color: '#C8AF62' }}>Krista</span> and her favorite shape — the <span style={{ color: '#C8AF62' }}>star</span> — born from her fascination with celestial bodies and phenomena.
                                </p>
                            </div>
                            <div className="am-fact-card">
                                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '.8rem', fontFamily: 'Lato, sans-serif', lineHeight: 1.75, margin: 0 }}>
                                    Built with <span style={{ color: '#C8AF62' }}>React JS (Vite)</span>, <span style={{ color: '#C8AF62' }}>Tailwind CSS</span>, and <span style={{ color: '#C8AF62' }}>JavaScript</span>. Deployed on <span style={{ color: '#C8AF62' }}>Vercel</span> via GitHub.
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