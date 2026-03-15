import React, { useState, useEffect } from 'react'

const Skills = ({ onClose }) => {
    const [selectedGalaxy, setSelectedGalaxy] = useState(null);
    const [isZooming, setIsZooming] = useState(false);
    const [hoveredGalaxy, setHoveredGalaxy] = useState(null);
    const [zoomingGalaxy, setZoomingGalaxy] = useState(null);
    const [starPositions, setStarPositions] = useState({});

    const skillsData = {
        technical: {
            name: 'Technical Galaxy',
            color: '#483AA0',
            accentColor: '#6B5BD0',
            glowColor: '#8B7BF0',
            galaxyType: 'spiral',
            skills: [
                'HTML', 'CSS', 'JavaScript', 'ReactJS', 'Tailwind CSS',
                'React Native', 'Expo', 'MySQL', 'Firebase',
                'Figma', 'Canva', 'MediBang Paint Pro',
                'Java', 'C++', 'Python', 'Visual Basic',
                'Microsoft Office', 'Capcut'
            ]
        },
        organizational: {
            name: 'Organizational Galaxy',
            color: '#E85395',
            accentColor: '#FF6BB5',
            glowColor: '#FF8BC5',
            galaxyType: 'elliptical',
            skills: [
                'Team coordination',
                'Planning and organization',
                'Attention to detail',
                'Transparency and collaboration'
            ]
        },
        personal: {
            name: 'Personal Galaxy',
            color: '#FF9071',
            accentColor: '#FFB091',
            glowColor: '#FFC0A1',
            galaxyType: 'irregular',
            skills: [
                'Effective Communication',
                'Critical thinking',
                'Leadership',
                'Openness to criticism and feedback',
                'Organized and efficient',
                'Problem-solving skills'
            ]
        }
    };

    const generateTechnicalConstellationPositions = (count) => {
        const centerX = 200;
        const centerY = 200;

        const outerRing = [
            { x: centerX, y: centerY - 145 },
            { x: centerX + 95, y: centerY - 105 },
            { x: centerX + 145, y: centerY },
            { x: centerX + 95, y: centerY + 105 },
            { x: centerX, y: centerY + 145 },
            { x: centerX - 95, y: centerY + 105 },
            { x: centerX - 145, y: centerY },
            { x: centerX - 95, y: centerY - 105 }
        ];

        const middleRing = [
            { x: centerX, y: centerY - 88 },
            { x: centerX + 76, y: centerY - 44 },
            { x: centerX + 76, y: centerY + 44 },
            { x: centerX, y: centerY + 88 },
            { x: centerX - 76, y: centerY + 44 },
            { x: centerX - 76, y: centerY - 44 }
        ];

        const innerCore = [
            { x: centerX, y: centerY - 30 },
            { x: centerX + 30, y: centerY },
            { x: centerX, y: centerY + 30 },
            { x: centerX - 30, y: centerY }
        ];

        const allPositions = [...outerRing, ...middleRing, ...innerCore];

        if (count <= allPositions.length) {
            return allPositions.slice(0, count);
        }

        const extra = [];
        const remaining = count - allPositions.length;

        for (let i = 0; i < remaining; i++) {
            const angle = (i / remaining) * Math.PI * 2;
            const radius = 55;
            extra.push({
                x: centerX + Math.cos(angle) * radius,
                y: centerY + Math.sin(angle) * radius
            });
        }

        return [...allPositions, ...extra];
    };

    const getConstellationConnections = (positions) => {
        if (!positions || !positions.length) return [];

        return [
            [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0],
            [8, 9], [9, 10], [10, 11], [11, 12], [12, 13], [13, 8],
            [14, 15], [15, 16], [16, 17], [17, 14],
            [0, 8], [1, 9], [2, 10], [3, 10], [4, 11], [5, 12], [6, 13], [7, 13],
            [8, 14], [9, 15], [10, 15], [10, 16], [11, 16], [12, 17], [13, 17], [13, 14],
            [8, 11], [9, 12], [10, 13]
        ].filter(([a, b]) => positions[a] && positions[b]);
    };

    const getDiamondPoints = (x, y, size) => {
        return `${x},${y - size} ${x + size},${y} ${x},${y + size} ${x - size},${y}`;
    };

    useEffect(() => {
        const positions = {};
        Object.keys(skillsData).forEach(category => {
            positions[category] = generateTechnicalConstellationPositions(skillsData[category].skills.length);
        });
        setStarPositions(positions);
    }, []);

    const handleGalaxyClick = (galaxy) => {
        setZoomingGalaxy(galaxy);
        setIsZooming(true);
        setTimeout(() => {
            setSelectedGalaxy(galaxy);
            setIsZooming(false);
            setZoomingGalaxy(null);
        }, 1200);
    };

    const handleBack = () => {
        setSelectedGalaxy(null);
    };

    const renderSpiralGalaxy = (data) => (
        <svg width="200" height="200" viewBox="0 0 200 200">
            <defs>
                <radialGradient id={`spiralGradient-${data.name}`}>
                    <stop offset="0%" style={{ stopColor: data.glowColor, stopOpacity: 0.8 }} />
                    <stop offset="50%" style={{ stopColor: data.accentColor, stopOpacity: 0.6 }} />
                    <stop offset="100%" style={{ stopColor: data.color, stopOpacity: 0 }} />
                </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="15" fill={data.glowColor} opacity="0.9" />
            {[0, 1, 2].map((arm) => (
                <g key={arm}>
                    <path
                        d={`M 100,100 Q ${100 + 30 * Math.cos(arm * 2.1)},${100 + 30 * Math.sin(arm * 2.1)} ${100 + 60 * Math.cos(arm * 2.1 + 0.5)},${100 + 60 * Math.sin(arm * 2.1 + 0.5)} T ${100 + 90 * Math.cos(arm * 2.1 + 1.2)},${100 + 90 * Math.sin(arm * 2.1 + 1.2)}`}
                        stroke={data.accentColor}
                        strokeWidth="8"
                        fill="none"
                        opacity="0.6"
                    />
                    {[...Array(8)].map((_, i) => {
                        const t = i / 8;
                        const angle = arm * 2.1 + t * 1.5;
                        const dist = 30 + t * 60;
                        return (
                            <circle
                                key={i}
                                cx={100 + dist * Math.cos(angle)}
                                cy={100 + dist * Math.sin(angle)}
                                r="1.5"
                                fill="white"
                                opacity="0.8"
                            />
                        );
                    })}
                </g>
            ))}
            <circle cx="100" cy="100" r="80" fill={`url(#spiralGradient-${data.name})`} opacity="0.4" />
        </svg>
    );

    const renderEllipticalGalaxy = (data) => (
        <svg width="200" height="200" viewBox="0 0 200 200">
            <defs>
                <radialGradient id={`ellipticalGradient-${data.name}`}>
                    <stop offset="0%" style={{ stopColor: data.glowColor, stopOpacity: 1 }} />
                    <stop offset="40%" style={{ stopColor: data.accentColor, stopOpacity: 0.7 }} />
                    <stop offset="100%" style={{ stopColor: data.color, stopOpacity: 0 }} />
                </radialGradient>
            </defs>
            <ellipse cx="100" cy="100" rx="70" ry="50" fill={`url(#ellipticalGradient-${data.name})`} opacity="0.7" />
            <ellipse cx="100" cy="100" rx="25" ry="18" fill={data.glowColor} opacity="0.9" />
            {[...Array(40)].map((_, i) => {
                const angle = (i / 40) * Math.PI * 2;
                const dist = 20 + (i % 3) * 20;
                const rx = dist * 0.7;
                const ry = dist * 0.5;
                return (
                    <circle
                        key={i}
                        cx={100 + rx * Math.cos(angle)}
                        cy={100 + ry * Math.sin(angle)}
                        r={0.5 + (i % 3) * 0.5}
                        fill="white"
                        opacity={0.3 + (i % 5) * 0.1}
                    />
                );
            })}
        </svg>
    );

    const renderIrregularGalaxy = (data) => {
        const getConsistentRandom = (seed) => {
            const x = Math.sin(seed) * 10000;
            return x - Math.floor(x);
        };

        return (
            <svg width="200" height="200" viewBox="0 0 200 200">
                <defs>
                    <radialGradient id={`irregularGradient-${data.name}`}>
                        <stop offset="0%" style={{ stopColor: data.glowColor, stopOpacity: 0.9 }} />
                        <stop offset="60%" style={{ stopColor: data.accentColor, stopOpacity: 0.5 }} />
                        <stop offset="100%" style={{ stopColor: data.color, stopOpacity: 0 }} />
                    </radialGradient>
                </defs>
                {[
                    { cx: 100, cy: 100, r: 30 },
                    { cx: 80, cy: 90, r: 20 },
                    { cx: 120, cy: 95, r: 25 },
                    { cx: 95, cy: 120, r: 18 },
                    { cx: 110, cy: 80, r: 22 }
                ].map((blob, i) => (
                    <circle
                        key={i}
                        cx={blob.cx}
                        cy={blob.cy}
                        r={blob.r}
                        fill={data.accentColor}
                        opacity="0.4"
                    />
                ))}
                {[...Array(50)].map((_, i) => {
                    const clusterX = 100 + (getConsistentRandom(i * 2) - 0.5) * 100;
                    const clusterY = 100 + (getConsistentRandom(i * 3) - 0.5) * 100;
                    const dist = Math.sqrt(Math.pow(clusterX - 100, 2) + Math.pow(clusterY - 100, 2));
                    if (dist < 70) {
                        return (
                            <circle
                                key={i}
                                cx={clusterX}
                                cy={clusterY}
                                r={getConsistentRandom(i * 5) * 1.5 + 0.5}
                                fill="white"
                                opacity={getConsistentRandom(i * 7) * 0.7 + 0.3}
                            />
                        );
                    }
                    return null;
                })}
                <circle cx="100" cy="100" r="10" fill={data.glowColor} opacity="0.9" />
                <circle cx="100" cy="100" r="40" fill={`url(#irregularGradient-${data.name})`} opacity="0.3" />
            </svg>
        );
    };

    const renderGalaxy = (category, data) => {
        switch (data.galaxyType) {
            case 'spiral':
                return renderSpiralGalaxy(data);
            case 'elliptical':
                return renderEllipticalGalaxy(data);
            case 'irregular':
                return renderIrregularGalaxy(data);
            default:
                return null;
        }
    };

    return (
        <div
            className='skills-modal-container skills-modal-border bg-[#231528] backdrop-blur-sm p-8 w-full max-w-6xl flex flex-col items-center rounded-xl relative overflow-hidden'
            style={{ height: '650px' }}
        >
            {!selectedGalaxy && !isZooming && (
                <div className='fixed-stars-background'>
                    {[...Array(80)].map((_, i) => (
                        <div
                            key={i}
                            className='fixed-star'
                            style={{
                                left: `${(i * 17) % 100}%`,
                                top: `${(i * 23) % 100}%`,
                                animationDelay: `${(i * 0.3) % 3}s`,
                                fontSize: `${6 + (i % 4) * 2}px`
                            }}
                        >
                            ✦
                        </div>
                    ))}
                </div>
            )}

            <button
                className='focus-close-btn'
                onClick={onClose}
            >
                ✕
            </button>

            <h2 className='font-["Just_Another_Hand"] text-5xl text-white mb-1 relative z-10'>
                MY SKILLS
            </h2>

            <p className='font-lato text-white text-center text-sm max-w-2xl mb-4 relative z-10 leading-relaxed'>
                Throughout my academic journey and experience, these are the skills that I have developed, and continuously nurturing myself. Choose the galaxy you wish to explore and discover.
            </p>

            <div className='content-area'>
                {!selectedGalaxy && !isZooming && (
                    <div className='galaxy-selection'>
                        <div className='galaxies-container'>
                            {Object.keys(skillsData).map((category, index) => {
                                const data = skillsData[category];
                                return (
                                    <div
                                        key={category}
                                        className={`galaxy-card ${hoveredGalaxy === category ? 'galaxy-hovered' : ''}`}
                                        onClick={() => handleGalaxyClick(category)}
                                        onMouseEnter={() => setHoveredGalaxy(category)}
                                        onMouseLeave={() => setHoveredGalaxy(null)}
                                        style={{
                                            animationDelay: `${index * 0.2}s`,
                                            '--glow-color': data.glowColor
                                        }}
                                    >
                                        <div className='galaxy-visual'>
                                            {renderGalaxy(category, data)}
                                        </div>

                                        {hoveredGalaxy === category && (
                                            <div className='galaxy-name-tag'>
                                                <p className='font-lato text-white font-bold text-lg'>
                                                    {data.name}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {isZooming && zoomingGalaxy && (
                    <div className='zoom-animation'>
                        <div className='zooming-galaxy-wrapper'>
                            {renderGalaxy(zoomingGalaxy, skillsData[zoomingGalaxy])}
                        </div>
                    </div>
                )}

                {selectedGalaxy && !isZooming && starPositions[selectedGalaxy] && (
                    <div className='constellation-view'>
                        <div className='selected-galaxy-layout'>
                            <div
                                className='constellation-panel'
                                style={{ '--accent-color': skillsData[selectedGalaxy].accentColor }}
                            >
                                <div className='constellation-panel-header'>
                                    <button className='back-icon' onClick={handleBack} aria-label='Back to galaxies'>
                                        ‹
                                    </button>

                                    <h3 className='font-["Just_Another_Hand"] text-white constellation-title'>
                                        {skillsData[selectedGalaxy].name}
                                    </h3>
                                </div>

                                <div className='constellation-panel-body'>
                                    <svg
                                        width="290"
                                        height="290"
                                        className='constellation-svg'
                                        viewBox="0 0 400 400"
                                        preserveAspectRatio="xMidYMid meet"
                                    >
                                        {(() => {
                                            const positions = starPositions[selectedGalaxy];
                                            const connections = getConstellationConnections(positions);

                                            return connections.map(([start, end], i) => (
                                                <line
                                                    key={`line-${start}-${end}-${i}`}
                                                    x1={positions[start].x}
                                                    y1={positions[start].y}
                                                    x2={positions[end].x}
                                                    y2={positions[end].y}
                                                    className='constellation-line technical-line'
                                                    style={{
                                                        stroke: skillsData[selectedGalaxy].accentColor,
                                                        animationDelay: `${i * 0.05}s`
                                                    }}
                                                />
                                            ));
                                        })()}

                                        {(() => {
                                            const positions = starPositions[selectedGalaxy];
                                            return skillsData[selectedGalaxy].skills.map((skill, index) => {
                                                const pos = positions[index];

                                                return (
                                                    <g key={index}>
                                                        <polygon
                                                            points={getDiamondPoints(pos.x, pos.y, 10)}
                                                            className='star-glow'
                                                            style={{
                                                                fill: skillsData[selectedGalaxy].accentColor,
                                                                animationDelay: `${index * 0.08}s`,
                                                                opacity: 0.5
                                                            }}
                                                        />
                                                        <polygon
                                                            points={getDiamondPoints(pos.x, pos.y, 5)}
                                                            className='star-core'
                                                            style={{
                                                                animationDelay: `${index * 0.08}s`
                                                            }}
                                                        />
                                                    </g>
                                                );
                                            });
                                        })()}
                                    </svg>
                                </div>
                            </div>

                            <div
                                className='skills-panel'
                                style={{
                                    '--accent-color': skillsData[selectedGalaxy].accentColor,
                                    '--panel-color': skillsData[selectedGalaxy].color
                                }}
                            >
                                <div className='skills-panel-header'>
                                    <span className='skills-panel-dot'>✦</span>
                                    <span>{skillsData[selectedGalaxy].skills.length} Skills</span>
                                </div>

                                <div
                                    className='skills-grid'
                                    style={{
                                        gridTemplateColumns:
                                            skillsData[selectedGalaxy].skills.length > 8
                                                ? 'repeat(3, minmax(0, 1fr))'
                                                : 'repeat(2, minmax(0, 1fr))'
                                    }}
                                >
                                    {skillsData[selectedGalaxy].skills.map((skill, index) => (
                                        <div key={index} className='skill-chip'>
                                            <span className='skill-chip-star'>✦</span>
                                            <span className='skill-chip-text'>{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <style jsx>{`
                .fixed-stars-background {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    z-index: 0;
                }

                .fixed-star {
                    position: absolute;
                    color: white;
                    opacity: 0;
                    animation: twinkleFixed 4s ease-in-out infinite;
                }

                .content-area {
                    position: relative;
                    width: 100%;
                    height: 455px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10;
                    overflow: visible;
                }

                .galaxy-selection {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    animation: fadeIn 0.5s ease-out;
                }

                .galaxies-container {
                    display: flex;
                    gap: 3rem;
                    justify-content: center;
                    align-items: center;
                    flex-wrap: nowrap;
                    width: 100%;
                    padding: 0 1rem 2.75rem;
                }

                .galaxy-card {
                    position: relative;
                    cursor: pointer;
                    opacity: 0;
                    animation: galaxyAppear 1s ease-out forwards;
                    transition: transform 0.3s ease, filter 0.3s ease;
                    flex: 0 0 auto;
                }

                .galaxy-card:hover {
                    transform: scale(1.12);
                }

                .galaxy-hovered {
                    filter: drop-shadow(0 0 25px var(--glow-color));
                }

                .galaxy-visual {
                    width: 180px;
                    height: 180px;
                    border-radius: 50%;
                    overflow: visible;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .galaxy-visual :global(svg) {
                    width: 180px;
                    height: 180px;
                }

                .galaxy-name-tag {
                    position: absolute;
                    bottom: -38px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: rgba(0, 0, 0, 0.9);
                    padding: 8px 16px;
                    border-radius: 10px;
                    white-space: nowrap;
                    animation: slideUp 0.3s ease-out;
                    border: 2px solid var(--glow-color);
                    box-shadow: 0 0 20px var(--glow-color);
                    z-index: 15;
                }

                .zoom-animation {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: radial-gradient(circle, rgba(10, 0, 20, 0.5) 0%, rgba(10, 0, 20, 0.9) 100%);
                    animation: fadeIn 0.3s ease-out;
                }

                .zooming-galaxy-wrapper {
                    animation: smoothZoomIn 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                    transform-origin: center center;
                }

                .constellation-view {
                    position: absolute;
                    inset: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-start;
                    padding-top: 0.15rem;
                    animation: fadeIn 0.6s ease-out;
                    overflow: visible;
                }

                .selected-galaxy-layout {
                    width: 100%;
                    flex: 1;
                    display: grid;
                    grid-template-columns: 0.95fr 1.35fr;
                    gap: 1.2rem;
                    align-items: stretch;
                    padding: 0.25rem 0 0;
                    min-height: 0;
                }

                .constellation-panel {
                    display: flex;
                    flex-direction: column;
                    border-radius: 18px;
                    background: radial-gradient(circle at center, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.015) 45%, rgba(255,255,255,0) 100%);
                    border: 1px solid rgba(255,255,255,0.08);
                    box-shadow: inset 0 0 25px rgba(255,255,255,0.03);
                    overflow: hidden;
                }

                .constellation-panel-header {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 0.9rem 1rem 0.45rem;
                    min-height: 64px;
                    flex-shrink: 0;
                }

                .back-icon {
                    width: 48px;
                    height: 48px;
                    min-width: 48px;
                    min-height: 48px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(255, 255, 255, 0.08);
                    border: 1px solid rgba(255, 255, 255, 0.14);
                    border-radius: 14px;
                    color: rgba(255, 255, 255, 0.9);
                    font-size: 1.9rem;
                    line-height: 1;
                    cursor: pointer;
                    padding: 0;
                    transition: all 0.25s ease;
                    box-shadow: 0 0 14px rgba(0, 0, 0, 0.18);
                    flex-shrink: 0;
                }

                .back-icon:hover {
                    color: white;
                    transform: translateX(-3px);
                    text-shadow: 0 0 12px rgba(255, 255, 255, 0.45);
                    background: rgba(255, 255, 255, 0.12);
                    border-color: rgba(255, 255, 255, 0.24);
                }

                .constellation-title {
                    font-size: 2.35rem;
                    line-height: 1;
                    margin: 0;
                    text-align: left;
                    flex: 1;
                }

                .constellation-panel-body {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0.1rem 0.65rem 0.75rem;
                    min-height: 0;
                }

                .skills-panel {
                    display: flex;
                    flex-direction: column;
                    min-height: 0;
                    padding: 1rem 1rem 0.95rem;
                    border-radius: 18px;
                    background: linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%);
                    border: 1px solid rgba(255,255,255,0.1);
                    box-shadow: 0 0 24px rgba(0,0,0,0.2);
                    overflow: hidden;
                }

                .skills-panel-header {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: white;
                    font-family: 'Lato', sans-serif;
                    font-size: 0.95rem;
                    font-weight: 700;
                    letter-spacing: 0.02em;
                    margin-bottom: 0.9rem;
                    flex-shrink: 0;
                }

                .skills-panel-dot {
                    color: var(--accent-color);
                    text-shadow: 0 0 10px var(--accent-color);
                }

                .skills-grid {
                    display: grid;
                    gap: 0.65rem;
                    align-content: start;
                    overflow: hidden;
                }

                .skill-chip {
                    min-height: 42px;
                    display: flex;
                    align-items: center;
                    gap: 0.55rem;
                    padding: 0.7rem 0.75rem;
                    border-radius: 12px;
                    background: rgba(255, 255, 255, 0.07);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    box-shadow: inset 0 0 10px rgba(255,255,255,0.02);
                }

                .skill-chip-star {
                    color: var(--accent-color);
                    font-size: 0.9rem;
                    flex-shrink: 0;
                    text-shadow: 0 0 10px var(--accent-color);
                }

                .skill-chip-text {
                    color: white;
                    font-family: 'Lato', sans-serif;
                    font-size: 0.86rem;
                    font-weight: 600;
                    line-height: 1.25;
                }

                .constellation-svg {
                    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.2));
                    overflow: visible;
                    max-width: 100%;
                    max-height: 100%;
                }

                .constellation-line {
                    stroke-width: 1.5;
                    opacity: 0;
                    animation: drawLine 1s ease-out forwards;
                }

                .technical-line {
                    stroke-linecap: round;
                    stroke-linejoin: round;
                }

                .star-glow {
                    opacity: 0;
                    animation: starAppear 0.8s ease-out forwards;
                }

                .star-core {
                    fill: white;
                    opacity: 0;
                    animation: starAppear 0.8s ease-out forwards;
                }

                @keyframes twinkleFixed {
                    0%, 100% { opacity: 0; }
                    50% { opacity: 0.7; }
                }

                @keyframes galaxyAppear {
                    from {
                        opacity: 0;
                        transform: scale(0.5);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                @keyframes smoothZoomIn {
                    0% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    50% {
                        transform: scale(2.5);
                        opacity: 0.7;
                    }
                    100% {
                        transform: scale(8);
                        opacity: 0;
                    }
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes drawLine {
                    from {
                        stroke-dasharray: 1000;
                        stroke-dashoffset: 1000;
                        opacity: 0;
                    }
                    to {
                        stroke-dasharray: 1000;
                        stroke-dashoffset: 0;
                        opacity: 0.5;
                    }
                }

                @keyframes starAppear {
                    from {
                        opacity: 0;
                        transform: scale(0);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateX(-50%) translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(-50%) translateY(0);
                    }
                }
            `}</style>
        </div>
    )
}

export default Skills