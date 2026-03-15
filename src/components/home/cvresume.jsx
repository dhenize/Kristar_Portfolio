import React, { useState, useRef, useEffect } from 'react'

// ── Replace this with your actual resume PDF path ──
// import resumePdf from '../../assets/kristar/resume.pdf'

const CvResume = ({ onBack }) => {
    const [zoom, setZoom] = useState(1)
    const [isDragging, setIsDragging] = useState(false)
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
    const [offset, setOffset] = useState({ x: 0, y: 0 })
    const [animateIn, setAnimateIn] = useState(false)
    const containerRef = useRef(null)

    // Replace with your actual PDF path/import
    const RESUME_PDF = '/resume.pdf' // e.g. resumePdf if you use the import above

    useEffect(() => {
        setTimeout(() => setAnimateIn(true), 30)
    }, [])

    const zoomIn  = () => setZoom(z => Math.min(z + 0.2, 3))
    const zoomOut = () => { setZoom(z => { const next = Math.max(z - 0.2, 0.5); if (next <= 1) setOffset({ x: 0, y: 0 }); return next; }) }
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
                    background: rgba(151,78,195,0.3);
                    border-color: rgba(151,78,195,0.5);
                }

                .cv-download-btn {
                    display: inline-flex; align-items: center; gap: 7px;
                    background: linear-gradient(135deg, #483AA0, #974EC3);
                    border: none; border-radius: 999px;
                    padding: 8px 18px;
                    color: white; font-size: .78rem;
                    font-family: 'Lato', sans-serif; font-weight: 700;
                    cursor: pointer; letter-spacing: .04em;
                    transition: opacity .2s, transform .2s, box-shadow .2s;
                    box-shadow: 0 4px 14px rgba(151,78,195,0.4);
                    text-decoration: none;
                }
                .cv-download-btn:hover {
                    opacity: .9; transform: translateY(-1px);
                    box-shadow: 0 6px 20px rgba(151,78,195,0.55);
                }

                .cv-back-btn {
                    display: flex; align-items: center; gap: 6px;
                    background: rgba(255,255,255,0.07);
                    border: 1px solid rgba(255,255,255,0.15);
                    border-radius: 999px;
                    padding: 7px 14px;
                    color: rgba(255,255,255,0.8);
                    font-size: .78rem; font-family: 'Lato', sans-serif;
                    cursor: pointer;
                    transition: background .2s, border-color .2s, color .2s;
                }
                .cv-back-btn:hover {
                    background: rgba(151,78,195,0.2);
                    border-color: rgba(151,78,195,0.45);
                    color: white;
                }

                .cv-pdf-frame {
                    width: 100%; height: 100%;
                    border: none; border-radius: 8px;
                    display: block;
                    transform-origin: center top;
                }
            `}</style>

            <div
                className="cv-container flex flex-col"
                style={{ height: '100%', minHeight: '560px', padding: '1.5rem 1.6rem' }}
            >
                {/* ── Top bar ── */}
                <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    marginBottom: '1rem', flexWrap: 'wrap', gap: '10px'
                }}>
                    {/* Back + title */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <button className="cv-back-btn" onClick={onBack}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6"/>
                            </svg>
                            Back
                        </button>
                        <div>
                            <p style={{ color: '#E3D095', fontSize: '.62rem', fontFamily: 'Lato, sans-serif', letterSpacing: '.12em', margin: 0 }}>CURRICULUM VITAE</p>
                            <h2 style={{ color: 'white', fontSize: '1.5rem', fontFamily: '"Just Another Hand", cursive', lineHeight: 1, margin: 0 }}>
                                My Resume
                            </h2>
                        </div>
                    </div>

                    {/* Controls */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {/* Zoom controls */}
                        <button className="cv-zoom-btn" onClick={zoomOut} title="Zoom out">−</button>
                        <button
                            onClick={resetZoom}
                            style={{
                                background: 'rgba(255,255,255,0.07)',
                                border: '1px solid rgba(255,255,255,0.15)',
                                borderRadius: '999px',
                                padding: '5px 12px',
                                color: 'rgba(255,255,255,0.7)',
                                fontSize: '.72rem', fontFamily: 'Lato, sans-serif',
                                cursor: 'pointer', minWidth: '52px', textAlign: 'center',
                                transition: 'background .2s'
                            }}
                            title="Reset zoom"
                        >
                            {Math.round(zoom * 100)}%
                        </button>
                        <button className="cv-zoom-btn" onClick={zoomIn} title="Zoom in">+</button>

                        <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.12)' }} />

                        {/* Download */}
                        <a
                            href={RESUME_PDF}
                            download="Dhenize_Lopez_Resume.pdf"
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
                        minHeight: '380px'
                    }}
                >
                    {/* Zoomed / draggable iframe wrapper */}
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

                    {/* Zoom hint badge */}
                    <div style={{
                        position: 'absolute', bottom: '12px', right: '12px',
                        background: 'rgba(0,0,0,0.55)',
                        color: 'rgba(255,255,255,0.6)',
                        fontSize: '.62rem', padding: '3px 9px',
                        borderRadius: '999px', pointerEvents: 'none',
                        fontFamily: 'Lato, sans-serif'
                    }}>
                        scroll to zoom · drag to pan
                    </div>
                </div>

                {/* Bottom note */}
                <p style={{
                    color: 'rgba(255,255,255,0.3)', fontSize: '.65rem',
                    fontFamily: 'Lato, sans-serif', textAlign: 'center',
                    marginTop: '10px', margin: '10px 0 0'
                }}>
                    Can't see the PDF? <a href={RESUME_PDF} target="_blank" rel="noreferrer" style={{ color: '#E3D095', textDecoration: 'underline' }}>Open in new tab</a>
                </p>
            </div>
        </>
    )
}

export default CvResume