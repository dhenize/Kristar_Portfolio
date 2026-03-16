import React, { useState, useEffect, useRef } from 'react'

const ProjectInfo = ({ project, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [lightboxIndex, setLightboxIndex] = useState(0)
    const [zoom, setZoom] = useState(1)
    const [panOffset, setPanOffset] = useState({ x: 0, y: 0 })
    const [isPanning, setIsPanning] = useState(false)
    const [panStart, setPanStart] = useState({ x: 0, y: 0 })
    const [isVisible, setIsVisible] = useState(false)
    const autoPlayRef = useRef(null)
    const lightboxImgRef = useRef(null)

    if (!project) return null

    const isVideoFile = (file = '') => {
        return typeof file === 'string' && /\.(mp4|webm|ogg)(\?|$)/i.test(file)
    }

    const allMedia = [
        project.coverImage,
        ...(project.additionalPics || [])
    ].filter(Boolean)

    useEffect(() => {
        requestAnimationFrame(() => {
            setTimeout(() => setIsVisible(true), 30)
        })
    }, [])

    useEffect(() => {
        if (lightboxOpen) return
        autoPlayRef.current = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % allMedia.length)
        }, 3500)
        return () => clearInterval(autoPlayRef.current)
    }, [allMedia.length, lightboxOpen])

    const goTo = (index) => {
        clearInterval(autoPlayRef.current)
        setCurrentIndex((index + allMedia.length) % allMedia.length)
    }

    const openLightbox = (index) => {
        setLightboxIndex(index)
        setZoom(1)
        setPanOffset({ x: 0, y: 0 })
        setLightboxOpen(true)
    }

    const closeLightbox = () => {
        setLightboxOpen(false)
        setZoom(1)
        setPanOffset({ x: 0, y: 0 })
    }

    const lightboxNext = () => {
        setLightboxIndex(prev => (prev + 1) % allMedia.length)
        setZoom(1)
        setPanOffset({ x: 0, y: 0 })
    }

    const lightboxPrev = () => {
        setLightboxIndex(prev => (prev - 1 + allMedia.length) % allMedia.length)
        setZoom(1)
        setPanOffset({ x: 0, y: 0 })
    }

    const handleWheel = (e) => {
        e.preventDefault()
        setZoom(prev => Math.min(4, Math.max(1, prev - e.deltaY * 0.001)))
    }

    const handleMouseDown = (e) => {
        if (zoom > 1) {
            setIsPanning(true)
            setPanStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y })
        }
    }

    const handleMouseMove = (e) => {
        if (!isPanning) return
        setPanOffset({ x: e.clientX - panStart.x, y: e.clientY - panStart.y })
    }

    const handleMouseUp = () => setIsPanning(false)

    const renderMedia = (src, alt, className, options = {}) => {
        if (isVideoFile(src)) {
            return (
                <video
                    src={src}
                    className={className}
                    controls={options.controls || false}
                    autoPlay={options.autoPlay || false}
                    loop={options.loop || false}
                    muted={options.muted ?? true}
                    playsInline
                    preload="metadata"
                />
            )
        }
        return <img src={src} alt={alt} className={className} />
    }

    const handleClose = () => {
        setIsVisible(false)
        setTimeout(onClose, 350)
    }

    return (
        <>
            <style>{`
                @keyframes pi-fadeIn {
                    from { opacity: 0; transform: scale(0.94) translateY(18px); }
                    to   { opacity: 1; transform: scale(1) translateY(0); }
                }
                @keyframes pi-fadeOut {
                    from { opacity: 1; transform: scale(1) translateY(0); }
                    to   { opacity: 0; transform: scale(0.94) translateY(18px); }
                }
                @keyframes pi-slideLeft {
                    from { transform: translateX(40px); opacity: 0; }
                    to   { transform: translateX(0); opacity: 1; }
                }
                @keyframes pi-dot-pulse {
                    0%, 100% { transform: scale(1);   opacity: .6; }
                    50%      { transform: scale(1.35); opacity: 1;  }
                }
                .pi-modal-enter { animation: pi-fadeIn  .35s cubic-bezier(.22,1,.36,1) forwards; }
                .pi-modal-leave { animation: pi-fadeOut .3s  cubic-bezier(.22,1,.36,1) forwards; }
                .pi-slide-in    { animation: pi-slideLeft .4s cubic-bezier(.22,1,.36,1) forwards; }

                .pi-close-btn {
                    position: absolute;
                    top: 15px; right: 15px;
                    width: 40px; height: 40px;
                    border-radius: 50%;
                    background: #0E2148;
                    color: white;
                    border: 2px solid white;
                    font-size: 20px; font-weight: bold;
                    display: flex; align-items: center; justify-content: center;
                    cursor: pointer; z-index: 100;
                    transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                }
                .pi-close-btn:hover {
                    background: #974EC3;
                    transform: rotate(90deg) scale(1.1);
                    box-shadow: 0 6px 20px rgba(0,0,0,0.4);
                }

                .pi-carousel-btn {
                    position: absolute;
                    top: 50%; transform: translateY(-50%);
                    width: 2rem; height: 2rem;
                    border-radius: 50%;
                    background: rgba(14,33,72,0.75);
                    border: 1px solid rgba(255,255,255,0.15);
                    color: white; font-size: .85rem;
                    display: flex; align-items: center; justify-content: center;
                    cursor: pointer;
                    transition: background .25s, transform .2s;
                    z-index: 3;
                }
                .pi-carousel-btn:hover { background: #974EC3; transform: translateY(-50%) scale(1.1); }

                .pi-dot {
                    width: 6px; height: 6px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.35);
                    transition: background .25s, transform .25s;
                    cursor: pointer;
                }
                .pi-dot.active {
                    background: #E3D095;
                    animation: pi-dot-pulse 1.6s ease-in-out infinite;
                }

                .pi-right-scroll::-webkit-scrollbar { width: 4px; }
                .pi-right-scroll::-webkit-scrollbar-track { background: transparent; }
                .pi-right-scroll::-webkit-scrollbar-thumb { background: rgba(227,208,149,0.3); border-radius: 4px; }
                .pi-right-scroll:hover::-webkit-scrollbar-thumb { background: rgba(227,208,149,0.6); }

                .pi-tech-chip {
                    display: flex; align-items: center; gap: 6px;
                    padding: 5px 10px; border-radius: 999px;
                    background: rgba(255,255,255,0.07);
                    border: 1px solid rgba(255,255,255,0.12);
                    transition: background .2s, border-color .2s;
                }
                .pi-tech-chip:hover { background: rgba(151,78,195,0.25); border-color: rgba(151,78,195,0.5); }

                .pi-contrib-card {
                    background: rgba(255,255,255,0.06);
                    border: 1px solid rgba(255,255,255,0.10);
                    border-radius: 0.75rem;
                    padding: 0.65rem 1rem;
                    transition: background .2s, border-color .2s;
                }
                .pi-contrib-card:hover { background: rgba(151,78,195,0.15); border-color: rgba(151,78,195,0.35); }

                /* Lightbox */
                .pi-lightbox-overlay {
                    position: fixed; inset: 0; z-index: 200;
                    background: rgba(0,0,0,0.92);
                    display: flex; align-items: center; justify-content: center;
                    animation: pi-fadeIn .25s ease forwards;
                }
                .pi-lb-nav {
                    position: absolute;
                    top: 50%; transform: translateY(-50%);
                    width: 2.5rem; height: 2.5rem;
                    border-radius: 50%;
                    background: rgba(14,33,72,0.8);
                    border: 1px solid rgba(255,255,255,0.2);
                    color: white; font-size: 1rem;
                    display: flex; align-items: center; justify-content: center;
                    cursor: pointer; z-index: 10;
                    transition: background .2s;
                }
                .pi-lb-nav:hover { background: #974EC3; }

                .pi-lb-close {
                    position: absolute; top: 15px; right: 15px;
                    width: 40px; height: 40px;
                    border-radius: 50%;
                    background: #0E2148;
                    border: 2px solid white;
                    color: white; font-size: 20px; font-weight: bold;
                    display: flex; align-items: center; justify-content: center;
                    cursor: pointer; z-index: 10;
                    transition: background .3s ease, transform .3s ease, box-shadow .3s ease;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                }
                .pi-lb-close:hover {
                    background: #974EC3;
                    transform: rotate(90deg) scale(1.1);
                    box-shadow: 0 6px 20px rgba(0,0,0,0.4);
                }

                /* ── RESPONSIVE: on mobile stack carousel on top, details below ── */
                .pi-inner {
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    height: 650px;
                    overflow: hidden;
                }

                .pi-left {
                    width: 52%;
                    min-width: 0;
                    display: flex;
                    flex-direction: column;
                    flex-shrink: 0;
                }

                .pi-divider {
                    width: 1px;
                    background: rgba(255,255,255,0.08);
                    flex-shrink: 0;
                }

                @media (max-width: 640px) {
                    .pi-inner {
                        flex-direction: column;
                        height: auto;
                        max-height: 88vh;
                        overflow-y: auto;
                    }
                    .pi-left {
                        width: 100%;
                        flex-shrink: 0;
                        /* fixed height for the carousel on mobile */
                        height: 260px;
                    }
                    .pi-divider {
                        width: 100%;
                        height: 1px;
                    }
                    .pi-right {
                        /* let it grow naturally — inner scroll disabled on mobile since outer scrolls */
                        overflow-y: visible !important;
                        max-height: none !important;
                    }
                    .pi-close-btn {
                        top: 10px;
                        right: 10px;
                        width: 34px;
                        height: 34px;
                        font-size: 16px;
                    }
                }
            `}</style>

            {/* Lightbox */}
            {lightboxOpen && (
                <div className="pi-lightbox-overlay" onClick={closeLightbox}>
                    <button className="pi-lb-close" onClick={closeLightbox}>✕</button>

                    <button className="pi-lb-nav" style={{ left: '1rem' }}
                        onClick={(e) => { e.stopPropagation(); lightboxPrev() }}>‹</button>

                    <div
                        style={{ overflow: 'hidden', maxWidth: '90vw', maxHeight: '85vh', cursor: zoom > 1 ? 'grab' : 'zoom-in' }}
                        onClick={e => e.stopPropagation()}
                        onWheel={handleWheel}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                    >
                        {isVideoFile(allMedia[lightboxIndex]) ? (
                            <video
                                src={allMedia[lightboxIndex]}
                                controls muted playsInline
                                style={{ maxWidth: '88vw', maxHeight: '82vh', borderRadius: '1rem', display: 'block' }}
                            />
                        ) : (
                            <img
                                ref={lightboxImgRef}
                                src={allMedia[lightboxIndex]}
                                alt={`preview-${lightboxIndex}`}
                                style={{
                                    maxWidth: '88vw', maxHeight: '82vh',
                                    borderRadius: '1rem', display: 'block',
                                    transform: `scale(${zoom}) translate(${panOffset.x / zoom}px, ${panOffset.y / zoom}px)`,
                                    transition: isPanning ? 'none' : 'transform .2s ease',
                                    userSelect: 'none'
                                }}
                                draggable={false}
                                onClick={() => setZoom(z => z === 1 ? 2 : 1)}
                            />
                        )}
                    </div>

                    <button className="pi-lb-nav" style={{ right: '1rem' }}
                        onClick={(e) => { e.stopPropagation(); lightboxNext() }}>›</button>

                    <div style={{ position: 'absolute', bottom: '1rem', left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.5)', fontSize: '.8rem' }}>
                        {lightboxIndex + 1} / {allMedia.length}
                    </div>
                </div>
            )}

            {/* Modal Backdrop */}
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-3 sm:px-4 py-4">
                <div
                    className={`w-full max-w-5xl relative ${isVisible ? 'pi-modal-enter' : 'pi-modal-leave'}`}
                    style={{
                        borderRadius: '16px',
                        border: '4px solid transparent',
                        background: 'linear-gradient(#231528, #231528) padding-box, linear-gradient(180deg, #0E2148 0%, #483AA0 35%, #974EC3 70%, #E3D095 100%) border-box',
                    }}
                >
                    <div className="relative bg-[#231528] rounded-xl w-full overflow-hidden">

                        <button className="pi-close-btn" onClick={handleClose}>✕</button>

                        <div className="pi-inner">

                            {/* ── LEFT: Carousel ── */}
                            <div className="pi-left">
                                {/* Slide area */}
                                <div
                                    className="relative flex-1 overflow-hidden cursor-pointer"
                                    style={{ background: '#0d0714' }}
                                    onClick={() => openLightbox(currentIndex)}
                                >
                                    {allMedia.map((src, i) => (
                                        <div
                                            key={i}
                                            style={{
                                                position: 'absolute', inset: 0,
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                opacity: i === currentIndex ? 1 : 0,
                                                transition: 'opacity .6s ease',
                                                pointerEvents: i === currentIndex ? 'auto' : 'none'
                                            }}
                                        >
                                            {isVideoFile(src) ? (
                                                <video
                                                    src={src}
                                                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }}
                                                    autoPlay loop muted playsInline
                                                />
                                            ) : (
                                                <img
                                                    src={src}
                                                    alt={`slide-${i}`}
                                                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }}
                                                />
                                            )}
                                        </div>
                                    ))}

                                    {/* Zoom hint */}
                                    <div style={{
                                        position: 'absolute', bottom: 48, right: 12,
                                        background: 'rgba(0,0,0,0.5)',
                                        color: 'rgba(255,255,255,0.7)',
                                        fontSize: '.65rem', padding: '3px 8px',
                                        borderRadius: '999px', pointerEvents: 'none', zIndex: 4
                                    }}>🔍 click to expand</div>

                                    {/* Prev / Next */}
                                    {allMedia.length > 1 && (
                                        <>
                                            <button className="pi-carousel-btn" style={{ left: '0.6rem' }}
                                                onClick={(e) => { e.stopPropagation(); goTo(currentIndex - 1) }}>‹</button>
                                            <button className="pi-carousel-btn" style={{ right: '0.6rem' }}
                                                onClick={(e) => { e.stopPropagation(); goTo(currentIndex + 1) }}>›</button>
                                        </>
                                    )}
                                </div>

                                {/* Dots */}
                                {allMedia.length > 1 && (
                                    <div style={{
                                        display: 'flex', justifyContent: 'center', alignItems: 'center',
                                        gap: '6px', padding: '8px 0',
                                        background: '#1a0f20'
                                    }}>
                                        {allMedia.map((_, i) => (
                                            <div
                                                key={i}
                                                className={`pi-dot ${i === currentIndex ? 'active' : ''}`}
                                                onClick={() => goTo(i)}
                                            />
                                        ))}
                                    </div>
                                )}

                                {/* Thumbnail strip */}
                                {allMedia.length > 1 && (
                                    <div style={{
                                        display: 'flex', gap: '6px', padding: '6px 10px',
                                        background: '#1a0f20', overflowX: 'auto',
                                        scrollbarWidth: 'none'
                                    }}>
                                        {allMedia.map((src, i) => (
                                            <div
                                                key={i}
                                                onClick={() => goTo(i)}
                                                style={{
                                                    flexShrink: 0, width: '48px', height: '36px',
                                                    borderRadius: '6px', overflow: 'hidden',
                                                    background: '#0d0714',
                                                    border: i === currentIndex ? '2px solid #E3D095' : '2px solid transparent',
                                                    cursor: 'pointer', transition: 'border-color .2s',
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                                }}
                                            >
                                                {isVideoFile(src)
                                                    ? <video src={src} muted playsInline preload="metadata" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                                    : <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                                }
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Divider */}
                            <div className="pi-divider" />

                            {/* ── RIGHT: Details ── */}
                            <div
                                className="pi-right-scroll pi-slide-in pi-right"
                                style={{
                                    flex: 1, minWidth: 0,
                                    overflowY: 'auto',
                                    padding: '1.5rem 1.4rem',
                                    display: 'flex', flexDirection: 'column', gap: '1.25rem'
                                }}
                            >
                                {/* Category + Title */}
                                <div style={{ paddingRight: '2rem' }}>
                                    <p style={{ color: '#E3D095', fontSize: '.78rem', fontFamily: 'Lato, sans-serif', marginBottom: '4px', letterSpacing: '.08em' }}>
                                        {project.category}
                                    </p>
                                    <h2 style={{ color: 'white', fontSize: '2rem', fontFamily: '"Just Another Hand", cursive', lineHeight: 1.1, margin: 0 }}>
                                        {project.title}
                                    </h2>
                                </div>

                                {/* Description */}
                                <div>
                                    <h3 style={{ color: '#E3D095', fontFamily: 'Lato, sans-serif', fontWeight: 700, fontSize: '.75rem', letterSpacing: '.1em', marginBottom: '8px' }}>
                                        DESCRIPTION
                                    </h3>
                                    <p style={{ color: 'rgba(255,255,255,0.88)', fontFamily: 'Lato, sans-serif', fontSize: '.85rem', lineHeight: 1.65, margin: 0 }}>
                                        {project.description}
                                    </p>
                                </div>

                                {/* Contributions */}
                                <div>
                                    <h3 style={{ color: '#E3D095', fontFamily: 'Lato, sans-serif', fontWeight: 700, fontSize: '.75rem', letterSpacing: '.1em', marginBottom: '8px' }}>
                                        CONTRIBUTIONS
                                    </h3>
                                    {project.contributions?.length > 0 ? (
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                            {project.contributions.map((item, i) => (
                                                <div key={i} className="pi-contrib-card">
                                                    <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '.83rem', fontFamily: 'Lato, sans-serif', lineHeight: 1.6, margin: 0 }}>
                                                        {item}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="pi-contrib-card">
                                            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '.83rem', fontFamily: 'Lato, sans-serif', margin: 0 }}>
                                                No contributions added yet.
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Tech Stack */}
                                <div>
                                    <h3 style={{ color: '#E3D095', fontFamily: 'Lato, sans-serif', fontWeight: 700, fontSize: '.75rem', letterSpacing: '.1em', marginBottom: '10px' }}>
                                        TECH STACK
                                    </h3>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                        {project.techStack?.map((tech, i) => (
                                            <div key={i} className="pi-tech-chip">
                                                <img
                                                    src={tech.icon || tech}
                                                    alt={tech.name || `tech-${i}`}
                                                    style={{ width: '20px', height: '20px', objectFit: 'contain', flexShrink: 0 }}
                                                />
                                                {tech.name && (
                                                    <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '.76rem', fontFamily: 'Lato, sans-serif', whiteSpace: 'nowrap' }}>
                                                        {tech.name}
                                                    </span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectInfo