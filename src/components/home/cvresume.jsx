import React, { useState, useRef, useEffect } from 'react'

import resumePdf from '../../assets/kristar/LopezDhenizeKristaFaith_Resume.pdf'

const CvResume = ({ onBack }) => {
    const [zoom, setZoom] = useState(1)
    const [isDragging, setIsDragging] = useState(false)
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
    const [offset, setOffset] = useState({ x: 0, y: 0 })
    const containerRef = useRef(null)

    const RESUME_PDF = resumePdf

    const zoomIn  = () => setZoom(z => Math.min(z + 0.2, 3))
    const zoomOut = () => {
        setZoom(z => {
            const next = Math.max(z - 0.2, 0.5)
            if (next <= 1) setOffset({ x: 0, y: 0 })
            return next
        })
    }
    const resetZoom = () => { setZoom(1); setOffset({ x: 0, y: 0 }) }

    const handleWheel = (e) => {
        e.preventDefault()
        const delta = e.deltaY > 0 ? -0.1 : 0.1
        setZoom(z => Math.min(3, Math.max(0.5, z + delta)))
    }

    const handleMouseDown = (e) => {
        if (zoom > 1) {
            setIsDragging(true)
            setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y })
        }
    }
    const handleMouseMove = (e) => {
        if (!isDragging) return
        setOffset({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y })
    }
    const handleMouseUp = () => setIsDragging(false)

    return (
        <>
            <style>{`
                @keyframes cv-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .cv-container { animation: cv-in .3s cubic-bezier(.22,1,.36,1) both; }

                .cv-zoom-btn {
                    width: 34px; height: 34px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.08);
                    border: 1px solid rgba(255,255,255,0.15);
                    color: white; font-size: 1rem;
                    display: flex; align-items: center; justify-content: center;
                    cursor: pointer;
                    transition: background .2s, border-color .2s;
                    flex-shrink: 0;
                }
                .cv-zoom-btn:hover {
                    background: rgba(232,83,149,0.3);
                    border-color: rgba(232,83,149,0.5);
                }

                .cv-download-btn {
                    display: inline-flex; align-items: center; gap: 7px;
                    background: linear-gradient(135deg, #621D7A, #E85395);
                    border: none; border-radius: 999px;
                    padding: 9px 20px;
                    color: white; font-size: .82rem;
                    font-family: 'Lato', sans-serif; font-weight: 700;
                    cursor: pointer; letter-spacing: .04em;
                    transition: opacity .2s, transform .2s, box-shadow .2s;
                    box-shadow: 0 4px 14px rgba(98,29,122,0.4);
                    text-decoration: none;
                }
                .cv-download-btn:hover {
                    opacity: .9; transform: translateY(-1px);
                    box-shadow: 0 6px 20px rgba(232,83,149,0.5);
                }

                .cv-back-btn {
                    display: flex; align-items: center; gap: 6px;
                    background: rgba(255,255,255,0.07);
                    border: 1px solid rgba(255,255,255,0.15);
                    border-radius: 999px;
                    padding: 8px 16px;
                    color: rgba(255,255,255,0.85);
                    font-size: .82rem; font-family: 'Lato', sans-serif;
                    cursor: pointer;
                    transition: background .2s, border-color .2s, color .2s;
                }
                .cv-back-btn:hover {
                    background: rgba(98,29,122,0.25);
                    border-color: rgba(232,83,149,0.4);
                    color: white;
                }

                .cv-zoom-reset-btn {
                    background: rgba(255,255,255,0.07);
                    border: 1px solid rgba(255,255,255,0.15);
                    border-radius: 999px;
                    padding: 6px 14px;
                    color: rgba(255,255,255,0.75);
                    font-size: .78rem; font-family: 'Lato', sans-serif;
                    cursor: pointer; min-width: '54px'; text-align: center;
                    transition: background .2s;
                }
                .cv-zoom-reset-btn:hover {
                    background: rgba(255,255,255,0.12);
                }

                .cv-pdf-frame {
                    width: 100%; height: 100%;
                    border: none;
                    display: block;
                }
            `}</style>

            <div
                className="cv-container flex flex-col w-full"
                style={{ height: '100%', padding: '1.6rem 1.7rem 1.2rem' }}
            >
                {/* ── Top bar ── */}
                <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    marginBottom: '1rem', flexWrap: 'wrap', gap: '10px', flexShrink: 0
                }}>
                    {/* Back + title */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <button className="cv-back-btn" onClick={onBack}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6"/>
                            </svg>
                            Back
                        </button>
                        <div>
                            <h2 style={{ color: 'white', fontSize: '1.7rem', fontFamily: '"Just Another Hand", cursive', lineHeight: 1, margin: 0 }}>
                                MY CURRICULUM VITAE
                            </h2>
                        </div>
                    </div>

                    {/* Controls */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <button className="cv-zoom-btn" onClick={zoomOut} title="Zoom out">−</button>
                        <button className="cv-zoom-reset-btn" onClick={resetZoom} title="Reset zoom">
                            {Math.round(zoom * 100)}%
                        </button>
                        <button className="cv-zoom-btn" onClick={zoomIn} title="Zoom in">+</button>

                        <div style={{ width: '1px', height: '26px', background: 'rgba(255,255,255,0.12)', flexShrink: 0 }} />

                        <a
                            href={RESUME_PDF}
                            download="LopezDhenizeKristaFaith_Resume.pdf"
                            className="cv-download-btn"
                        >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                <polyline points="7 10 12 15 17 10"/>
                                <line x1="12" y1="15" x2="12" y2="3"/>
                            </svg>
                            Download
                        </a>
                    </div>
                </div>

                {/* ── PDF viewer ── */}
                <div
                    ref={containerRef}
                    onWheel={handleWheel}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    style={{
                        flex: 1,
                        borderRadius: '12px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        background: '#1a1025',
                        overflow: 'hidden',
                        position: 'relative',
                        cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
                    }}
                >
                    <div style={{
                        width: '100%', height: '100%',
                        transform: `scale(${zoom}) translate(${offset.x / zoom}px, ${offset.y / zoom}px)`,
                        transformOrigin: 'center top',
                        transition: isDragging ? 'none' : 'transform .15s ease'
                    }}>
                        <iframe
                            src={`${RESUME_PDF}#toolbar=0&navpanes=0&scrollbar=0`}
                            className="cv-pdf-frame"
                            title="Resume PDF"
                        />
                    </div>

                    {/* Zoom hint */}
                    <div style={{
                        position: 'absolute', bottom: '10px', right: '10px',
                        background: 'rgba(0,0,0,0.6)',
                        color: 'rgba(255,255,255,0.55)',
                        fontSize: '.65rem', padding: '3px 10px',
                        borderRadius: '999px', pointerEvents: 'none',
                        fontFamily: 'Lato, sans-serif'
                    }}>
                        scroll to zoom · drag to pan
                    </div>
                </div>

                {/* Bottom fallback */}
                <p style={{
                    color: 'rgba(255,255,255)', fontSize: '.7rem',
                    fontFamily: 'Lato, sans-serif', textAlign: 'center',
                    margin: '10px 0 0', flexShrink: 0
                }}>
                    Can't see the PDF?
                    <a href={RESUME_PDF} target="_blank" rel="noreferrer"
                        style={{ color: '#C8AF62', textDecoration: 'underline' }}
                        onMouseEnter={e => (e.target.style.color = '#E85395')}
                        onMouseLeave={e => (e.target.style.color = '#C8AF62')}
                    >
                        Open in new tab
                    </a>
                </p>
            </div>
        </>
    )
}

export default CvResume