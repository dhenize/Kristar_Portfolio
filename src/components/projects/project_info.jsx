import React from 'react'

const ProjectInfo = ({ project, onClose }) => {
    if (!project) return null

    const isVideoFile = (file = '') => {
        return typeof file === 'string' && /\.(mp4|webm|ogg)(\?|$)/i.test(file)
    }

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

        return (
            <img
                src={src}
                alt={alt}
                className={className}
            />
        )
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
            <div
                className="w-full max-w-5xl rounded-2xl p-0.5 relative"
                style={{
                    background: 'linear-gradient(180deg, #0E2148 0%, #483AA0 35%, #974EC3 70%, #E3D095 100%)'
                }}
            >
                <div className="relative bg-[#231528] rounded-2xl w-full h-162.5 overflow-hidden px-8 py-7 flex flex-col">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-5 right-5 text-white text-xl hover:opacity-80 transition"
                    >
                        ✕
                    </button>

                    {/* Header */}
                    <div className="mb-5 pr-10">
                        <p className="text-[#E3D095] text-sm font-lato mb-1">
                            {project.category}
                        </p>

                        <h2 className='text-white text-4xl font-["Just_Another_Hand"] leading-none'>
                            {project.title}
                        </h2>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-6 flex-1 min-h-0">
                        {/* Left Side */}
                        <div className="flex flex-col min-h-0">
                            <div className="rounded-xl overflow-hidden border border-white/10 bg-black/20 mb-4">
                                {renderMedia(
                                    project.coverImage,
                                    project.title,
                                    'w-full h-[220px] object-cover',
                                    isVideoFile(project.coverImage)
                                        ? { controls: true, muted: true }
                                        : {}
                                )}
                            </div>

                            <div className="mb-4">
                                <h3 className="text-[#E3D095] font-lato font-bold text-sm mb-2">
                                    DESCRIPTION
                                </h3>
                                <p className="text-white/90 font-lato text-sm leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-[#E3D095] font-lato font-bold text-sm mb-3">
                                    TECH STACK
                                </h3>

                                <div className="flex flex-wrap gap-3">
                                    {project.techStack?.map((tech, index) => (
                                        <div
                                            key={index}
                                            className="w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center"
                                        >
                                            <img
                                                src={tech}
                                                alt={`tech-${index}`}
                                                className="w-7 h-7 object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="flex flex-col min-h-0">
                            <div className="mb-4">
                                <h3 className="text-[#E3D095] font-lato font-bold text-sm mb-3">
                                    CONTRIBUTIONS
                                </h3>

                                {project.contributions?.length > 0 ? (
                                    <div className="space-y-3 max-h-55 overflow-y-auto pr-1">
                                        {project.contributions.map((item, index) => (
                                            <div
                                                key={index}
                                                className="bg-white/6 border border-white/10 rounded-xl px-4 py-3"
                                            >
                                                <p className="text-white/90 text-sm font-lato leading-relaxed">
                                                    {item}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="bg-white/6 border border-white/10 rounded-xl px-4 py-3">
                                        <p className="text-white/70 text-sm font-lato">
                                            No contributions added yet.
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div className="flex-1 min-h-0">
                                <h3 className="text-[#E3D095] font-lato font-bold text-sm mb-3">
                                    ADDITIONAL PREVIEWS
                                </h3>

                                {project.additionalPics?.length > 0 ? (
                                    <div className="grid grid-cols-2 gap-3 max-h-62.5 overflow-y-auto pr-1">
                                        {project.additionalPics.map((img, index) => (
                                            <div
                                                key={index}
                                                className="rounded-xl overflow-hidden border border-white/10 bg-black/20"
                                            >
                                                {renderMedia(
                                                    img,
                                                    `preview-${index}`,
                                                    'w-full h-[120px] object-cover',
                                                    isVideoFile(img)
                                                        ? { controls: true, muted: true }
                                                        : {}
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="rounded-xl overflow-hidden border border-white/10 bg-black/20 px-4 py-6">
                                        <p className="text-white/70 text-sm font-lato text-center">
                                            No additional previews added yet.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectInfo