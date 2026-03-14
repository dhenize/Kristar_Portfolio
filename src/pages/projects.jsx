import React, { useEffect, useMemo, useRef, useState } from 'react'

//COMPONENT
import ProjectInfo from '../components/projects/project_info'

//IMPORTED FILES
import starline from '../assets/icons/starline.png'
import star from '../assets/icons/star.png'
import whitestar from '../assets/icons/star_white.png'


/*=====IMPORTED PROJECT PICS=====*/
/* Web Application */
//COMWARE
import comw1 from '../assets/pics/project_pics/web_dev/comware/1.png'
import comw2 from '../assets/pics/project_pics/web_dev/comware/2.png'

//EDUQUEUE
import eduq1 from '../assets/pics/project_pics/web_dev/eduqueue/1.png'
import eduq2 from '../assets/pics/project_pics/web_dev/eduqueue/2.png'
import eduq3 from '../assets/pics/project_pics/web_dev/eduqueue/3.png'
import eduq4 from '../assets/pics/project_pics/web_dev/eduqueue/4.png'
import eduq5 from '../assets/pics/project_pics/web_dev/eduqueue/5.png'

//FIT4SCHOOL WEB
import fit4s1 from '../assets/pics/project_pics/web_dev/fit4web/acc1.png'
import fit4s2 from '../assets/pics/project_pics/web_dev/fit4web/adm1.png'
import fit4s3 from '../assets/pics/project_pics/web_dev/fit4web/adm3.png'
import fit4s4 from '../assets/pics/project_pics/web_dev/fit4web/sadm1.png'
import fit4s5 from '../assets/pics/project_pics/web_dev/fit4web/sadm2.png'

//JELIZEN
import jel1 from '../assets/pics/project_pics/web_dev/jelizen/1.png'
import jel2 from '../assets/pics/project_pics/web_dev/jelizen/2.png'
import jel3 from '../assets/pics/project_pics/web_dev/jelizen/3.png'
import jel4 from '../assets/pics/project_pics/web_dev/jelizen/4.png'
import jel5 from '../assets/pics/project_pics/web_dev/jelizen/5.png'


/* Mobile Application */
//FIT4SCHOOL MOBILE
import fit4m1 from '../assets/pics/project_pics/mob_dev/fit4mob_ss/1.jpg'
import fit4m2 from '../assets/pics/project_pics/mob_dev/fit4mob_ss/3.jpg'
import fit4m3 from '../assets/pics/project_pics/mob_dev/fit4mob_ss/5.jpg'
import fit4m4 from '../assets/pics/project_pics/mob_dev/fit4mob_ss/7.jpg'
import fit4m5 from '../assets/pics/project_pics/mob_dev/fit4mob_ss/10.jpg'


/* Desktop Application */
//POTATO DONUT CAFE POS
import pdc1 from '../assets/pics/project_pics/desktop/1st_pos/1_pos.png'
import pdc2 from '../assets/pics/project_pics/desktop/1st_pos/2_pos.png'

//ALVIAR DENTAL MANAGEMENT SYSTEM
import alv1 from '../assets/pics/project_pics/desktop/alviar/1.png'
import alv2 from '../assets/pics/project_pics/desktop/alviar/2.png'

//FRED FRIES POS
import ff1 from '../assets/pics/project_pics/desktop/fred_fries/1_2.png'
import ff2 from '../assets/pics/project_pics/desktop/fred_fries/2.png'
import ff3 from '../assets/pics/project_pics/desktop/fred_fries/3.png'

//LA CAMELLE POS
import lcs1 from '../assets/pics/project_pics/desktop/la_camelle/1.png'
import lcs2 from '../assets/pics/project_pics/desktop/la_camelle/2.png'

//TOOLS R US POS
import trus1 from '../assets/pics/project_pics/desktop/toolsrus/1.jpg'
import trus2 from '../assets/pics/project_pics/desktop/toolsrus/2.jpg'
import trus3 from '../assets/pics/project_pics/desktop/toolsrus/4.jpg'

//VISUAL BASIC MINI SYSTEMS
import vb1 from '../assets/pics/project_pics/desktop/vb_activities/act1.png'
import vb2 from '../assets/pics/project_pics/desktop/vb_activities/act2_1.png'
import vb3 from '../assets/pics/project_pics/desktop/vb_activities/act2_1.png'
import vb4 from '../assets/pics/project_pics/desktop/vb_activities/act3.png'
import vb5 from '../assets/pics/project_pics/desktop/vb_activities/act4.png'


/* Illustration */
//DIGITAL DRAWINGS
import draw1 from '../assets/pics/project_pics/illustrations/digiarts/hirono_mikey.png'
import draw2 from '../assets/pics/project_pics/illustrations/digiarts/oc_fanart.png'
import draw3 from '../assets/pics/project_pics/illustrations/digiarts/persona.png'

//PIXEL ARTS
import pixel1 from '../assets/pics/project_pics/illustrations/pixel_arts/kuromi.png'
import pixel2 from '../assets/pics/project_pics/illustrations/pixel_arts/palette.png'
import pixel3 from '../assets/pics/project_pics/illustrations/pixel_arts/pearl.jpg'

//POTFOLIO DRAWING
import kstar1 from '../assets/pics/project_pics/illustrations/portfolio_drawing/sketch.png'
import kstar2 from '../assets/pics/project_pics/illustrations/portfolio_drawing/lineart.png'
import kstar3 from '../assets/pics/project_pics/illustrations/portfolio_drawing/rendered.png'

//SCHOOL ARTS
import sch1 from '../assets/pics/project_pics/illustrations/school_arts/gen_soc.jpg'


/* Publication Materials */
//COMWARE MATS POSTERS
import cwm1 from '../assets/pics/project_pics/posters_edits/comware_mats/1.png'
import cwm2 from '../assets/pics/project_pics/posters_edits/comware_mats/2.png'
import cwm3 from '../assets/pics/project_pics/posters_edits/comware_mats/4.png'

//KASAYSAYAN POSTERS
import kas1 from '../assets/pics/project_pics/posters_edits/kasaysayan/cover.jpg'
import kas2 from '../assets/pics/project_pics/posters_edits/kasaysayan/acknowledge.jpg'
import kas3 from '../assets/pics/project_pics/posters_edits/kasaysayan/back.jpg'

//OTHER POSTERS
import oth1 from '../assets/pics/project_pics/posters_edits/other_acts/collage.png'
import oth2 from '../assets/pics/project_pics/posters_edits/other_acts/lopez_act1.jpg'
import oth3 from '../assets/pics/project_pics/posters_edits/other_acts/rizal_famtree.jpg'
import oth4 from '../assets/pics/project_pics/posters_edits/other_acts/food_endorse.jpg'
import oth5 from '../assets/pics/project_pics/posters_edits/other_acts/mock_id.jpg'


/* Video Edits */
//SCHOOL PROJECTS
import svid1 from '../assets/pics/project_pics/videos/GoldenAnniv_Intro.mp4'

//PERSONAL PROJECTS
const pvids = [
    "https://www.dropbox.com/scl/fi/6sb55whywshwfpwtlk3mu/IGStory1.mp4?rlkey=ze5st63nd5nclkw5k3azur94f&raw=1",
    "https://www.dropbox.com/scl/fi/nxzgapkfo58omrr86wuka/IGStory2.mp4?rlkey=n49bm257pnh0bj6rdfchkenk0&raw=1",
    "https://www.dropbox.com/scl/fi/r6ep80etocz12b4v7uehi/IGStory3.mp4?rlkey=nnlu7k5xq7jhj4wzsconoegm3&raw=1"
];

//TIKTOK CONTENTS
const tiktok = [
    "https://www.dropbox.com/scl/fi/381rkankb4p703tq1edm5/KristaleEp3.mp4?rlkey=8xbmyuecimdpoclwmlgbmbved&raw=1",
    "https://www.dropbox.com/scl/fi/lwfjuocwtskkudnwnen2f/KristaleEp5.mp4?rlkey=b6usnx3jx0mr9mxgyfqdyovk0&raw=1",
];



//TECH STACK LOGOS
import Canva from '../assets/logos/canva.png'
import Capcut from '../assets/logos/capcut.png'
import Cplus2 from '../assets/logos/cplus2.png'
import Css from '../assets/logos/css.png'
import Expo from '../assets/logos/expo_circle.png'
import Figma from '../assets/logos/figma.png'
import Firebase from '../assets/logos/firebase_circle.png'
import Html from '../assets/logos/html.png'
import Java from '../assets/logos/java.png'
import Js from '../assets/logos/javascript.png'
import Medi from '../assets/logos/medibang.png'
import Mysql from '../assets/logos/mysql_circle.png'
import Python from '../assets/logos/python.png'
import Reactjs from '../assets/logos/react.png'
import Tailwind from '../assets/logos/tailwind_circle.png'


//ICONS PER CATEGORY
import webapp from '../assets/icons/webapp.png'
import mobapp from '../assets/icons/mobapp.png'
import deskapp from '../assets/icons/deskapp.png'
import illus from '../assets/icons/drawlogo.png'
import pubmat from '../assets/icons/postr.png'
import videos from '../assets/icons/media.png'

const PROJECTS_PER_PAGE = 6

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('All Projects');
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const dropdownRef = useRef(null);

    const meteorStyles = useMemo(
        () =>
            [...Array(20)].map((_, i) => ({
                id: i,
                top: `${Math.random() * 50}%`,
                right: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 4}s`
            })),
        []
    );

    const projects = useMemo(() => [
        {
            id: 1,
            title: 'COMWARE: Inventory Management System',
            category: 'Web Application',
            coverImage: comw1,
            additionalPics: [comw2],
            description: 'A comprehensive inventory management system designed for warehouse operations. Features include real-time stock tracking, supplier management, and automated reordering.',
            techStack: [Html, Css, Js, Reactjs, Tailwind, Firebase],
            contributions: [
                'Designed and implemented the entire user interface',
                'Developed real-time inventory tracking functionality',
                'Created supplier management module',
                'Implemented automated reporting system'
            ]
        },
        {
            id: 2,
            title: 'EduQueue: Student Queueing System',
            category: 'Web Application',
            coverImage: eduq1,
            additionalPics: [eduq2, eduq3, eduq4, eduq5],
            description: 'A digital queueing system for educational institutions to manage student services efficiently. Reduces waiting time and improves service delivery.',
            techStack: [Html, Css, Js, Reactjs, Tailwind, Firebase],
            contributions: [
                'Built the queue management algorithm',
                'Designed real-time notification system',
                'Developed admin dashboard for monitoring',
                'Implemented student authentication'
            ]
        },
        {
            id: 3,
            title: 'Fit4School: School Uniform Management (Web)',
            category: 'Web Application',
            coverImage: fit4s1,
            additionalPics: [fit4s2, fit4s3, fit4s4, fit4s5],
            description: 'Web-based platform for managing school uniform orders, inventory, and distribution. Streamlines the entire uniform procurement process.',
            techStack: [Html, Css, Js, Reactjs, Tailwind, Firebase],
            contributions: [
                'Developed order management system',
                'Created inventory tracking module',
                'Built payment integration',
                'Designed responsive user interface'
            ]
        },
        {
            id: 4,
            title: 'Jelizen: E-Commerce Platform',
            category: 'Web Application',
            coverImage: jel1,
            additionalPics: [jel2, jel3, jel4, jel5],
            description: 'A modern e-commerce platform featuring product catalog, shopping cart, and secure checkout. Built with focus on user experience and performance.',
            techStack: [Html, Css, Js, Reactjs, Tailwind, Firebase],
            contributions: [
                'Implemented product catalog system',
                'Developed shopping cart functionality',
                'Created user authentication and profiles',
                'Built order tracking system'
            ]
        },
        {
            id: 5,
            title: 'Fit4School: Mobile Application',
            category: 'Mobile Application',
            coverImage: fit4m1,
            additionalPics: [fit4m2, fit4m3, fit4m4, fit4m5],
            description: 'Mobile companion app for the Fit4School uniform management system. Allows students and parents to order and track uniforms on-the-go.',
            techStack: [Js, Reactjs, Expo, Firebase],
            contributions: [
                'Developed cross-platform mobile interface',
                'Implemented push notifications',
                'Created order tracking features',
                'Optimized for mobile performance'
            ]
        },
        {
            id: 6,
            title: 'Potato Donut Cafe Point of Sales System',
            category: 'Desktop Application',
            coverImage: pdc1,
            additionalPics: [pdc2],
            description: 'A comprehensive POS system for a cafe, handling orders, inventory, and sales reporting. Features include table management and receipt printing.',
            techStack: [Java, Mysql],
            contributions: [
                'Built complete POS interface',
                'Developed inventory management',
                'Created sales reporting module',
                'Implemented receipt generation'
            ]
        },
        {
            id: 7,
            title: 'Alviar Dental Clinic Management System',
            category: 'Desktop Application',
            coverImage: alv1,
            additionalPics: [alv2],
            description: 'Desktop application for managing dental clinic operations including patient records, appointments, and billing.',
            techStack: [Java, Mysql],
            contributions: [
                'Designed patient management system',
                'Developed appointment scheduling',
                'Created billing and invoicing module',
                'Implemented treatment history tracking'
            ]
        },
        {
            id: 8,
            title: 'Fred Fries Point of Sales',
            category: 'Desktop Application',
            coverImage: ff1,
            additionalPics: [ff2, ff3],
            description: 'Fast food POS system with quick order processing and inventory management capabilities.',
            techStack: [Java, Mysql],
            contributions: [
                'Developed fast order entry system',
                'Created combo meal management',
                'Built daily sales reporting',
                'Implemented user access controls'
            ]
        },
        {
            id: 9,
            title: 'La Camelle Point of Sales School Supplies',
            category: 'Desktop Application',
            coverImage: lcs1,
            additionalPics: [lcs2],
            description: 'POS system specialized for school supplies retail, featuring seasonal product management and student discounts.',
            techStack: [Java, Mysql],
            contributions: [
                'Built product categorization system',
                'Developed discount management',
                'Created inventory alerts',
                'Implemented sales analytics'
            ]
        },
        {
            id: 10,
            title: 'Tools R Us Hardware Store POS',
            category: 'Desktop Application',
            coverImage: trus1,
            additionalPics: [trus2, trus3],
            description: 'Hardware store point of sale system with support for bulk purchases and contractor accounts.',
            techStack: [Java, Mysql],
            contributions: [
                'Developed bulk order processing',
                'Created customer account management',
                'Built inventory tracking by location',
                'Implemented purchase order system'
            ]
        },
        {
            id: 11,
            title: 'Visual Basic Mini Systems Collection',
            category: 'Desktop Application',
            coverImage: vb1,
            additionalPics: [vb2, vb3, vb4, vb5],
            description: 'Collection of mini desktop applications built as programming exercises and demonstrations.',
            techStack: [],
            contributions: [
                'Developed various calculators',
                'Created form validation examples',
                'Built data entry systems',
                'Implemented basic CRUD operations'
            ]
        },
        {
            id: 12,
            title: 'Digital Art Portfolio',
            category: 'Illustration',
            coverImage: draw1,
            additionalPics: [draw2, draw3],
            description: 'Collection of digital illustrations featuring character art and original designs.',
            techStack: [Medi],
            contributions: [
                'Created original character designs',
                'Developed unique art style',
                'Produced fan art illustrations',
                'Experimented with color palettes'
            ]
        },
        {
            id: 13,
            title: 'Pixel Art Collection',
            category: 'Illustration',
            coverImage: pixel1,
            additionalPics: [pixel2, pixel3],
            description: 'Various pixel art pieces showcasing retro gaming aesthetics and character sprites.',
            techStack: [Medi],
            contributions: [
                'Created pixel character sprites',
                'Designed tile sets',
                'Developed color-limited palettes',
                'Produced animation frames'
            ]
        },
        {
            id: 14,
            title: 'Portfolio Character Design Process',
            category: 'Illustration',
            coverImage: kstar1,
            additionalPics: [kstar2, kstar3],
            description: 'Step-by-step process of creating the portfolio mascot character from sketch to final render.',
            techStack: [Medi],
            contributions: [
                'Developed character concept',
                'Created clean line art',
                'Applied color and shading',
                'Finalized character design'
            ]
        },
        {
            id: 15,
            title: 'Academic Art Projects',
            category: 'Illustration',
            coverImage: sch1,
            additionalPics: [],
            description: 'Art projects created for school requirements and academic presentations.',
            techStack: [Canva, Medi],
            contributions: [
                'Created educational illustrations',
                'Designed presentation graphics',
                'Produced subject-related artwork',
                'Developed visual aids'
            ]
        },
        {
            id: 16,
            title: 'COMWARE Marketing Materials',
            category: 'Posters',
            coverImage: cwm1,
            additionalPics: [cwm2, cwm3],
            description: 'Marketing posters and promotional materials for the COMWARE project.',
            techStack: [Canva, Figma],
            contributions: [
                'Designed promotional posters',
                'Created brand identity materials',
                'Developed marketing campaigns',
                'Produced social media graphics'
            ]
        },
        {
            id: 17,
            title: 'Kasaysayan: Historical Publication',
            category: 'Posters',
            coverImage: kas1,
            additionalPics: [kas2, kas3],
            description: 'Publication design for a historical project featuring Filipino heritage and culture.',
            techStack: [Canva],
            contributions: [
                'Designed publication layout',
                'Created cover and back designs',
                'Developed acknowledgment page',
                'Maintained historical theme consistency'
            ]
        },
        {
            id: 18,
            title: 'Miscellaneous Design Works',
            category: 'Posters',
            coverImage: oth1,
            additionalPics: [oth2, oth3, oth4, oth5],
            description: 'Various design projects including collages, family trees, endorsements, and ID mockups.',
            techStack: [Canva, Figma],
            contributions: [
                'Created photo collages',
                'Designed family tree visualizations',
                'Produced food endorsement materials',
                'Developed ID card mockups'
            ]
        },
        {
            id: 19,
            title: 'School Anniversary Intro Video',
            category: 'Media',
            coverImage: svid1,
            additionalPics: [],
            description: 'Opening video for school golden anniversary celebration featuring motion graphics and transitions.',
            techStack: [Capcut],
            contributions: [
                'Created motion graphics',
                'Developed video transitions',
                'Produced opening sequence',
                'Edited anniversary footage'
            ]
        },
        {
            id: 20,
            title: 'Instagram Story Templates',
            category: 'Media',
            coverImage: pvids[0],
            additionalPics: [pvids[1], pvids[2]],
            description: 'Animated Instagram story templates for personal branding and social media content.',
            techStack: [Capcut, Canva],
            contributions: [
                'Designed story templates',
                'Created animations',
                'Developed transitions',
                'Produced engaging content'
            ]
        },
        {
            id: 21,
            title: 'TikTok Content Series',
            category: 'Media',
            coverImage: tiktok[0],
            additionalPics: [tiktok[1]],
            description: 'Series of TikTok videos featuring creative editing and storytelling.',
            techStack: [Capcut],
            contributions: [
                'Created video concepts',
                'Edited video content',
                'Developed storytelling',
                'Produced engaging shorts'
            ]
        }
    ], []);

    const combobox = [
        { id: 1, label: 'All Projects' },
        { id: 2, label: 'Web Application' },
        { id: 3, label: 'Mobile Application' },
        { id: 4, label: 'Desktop Application' },
        { id: 5, label: 'Illustration' },
        { id: 6, label: 'Posters' },
        { id: 7, label: 'Media' }
    ];

    const categoryIcons = {
        'Web Application': webapp,
        'Mobile Application': mobapp,
        'Desktop Application': deskapp,
        'Illustration': illus,
        'Posters': pubmat,
        'Media': videos
    };

    const categoryDisplay = {
        'Web Application': 'Web Application',
        'Mobile Application': 'Mobile Application',
        'Desktop Application': 'Desktop Application',
        'Illustration': 'Illustration',
        'Posters': 'Posters',
        'Media': 'Media'
    };

    const filteredProjects = useMemo(() => {
        if (selectedCategory === 'All Projects') {
            return projects;
        }
        return projects.filter(project => project.category === selectedCategory);
    }, [selectedCategory, projects]);

    const totalPages = Math.max(1, Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE));

    const paginatedProjects = useMemo(() => {
        const safePage = Math.min(currentPage, totalPages);
        const startIndex = (safePage - 1) * PROJECTS_PER_PAGE;
        return filteredProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);
    }, [filteredProjects, currentPage, totalPages]);

    useEffect(() => {
        setCurrentPage(1);
        setIsDropdownOpen(false);
    }, [selectedCategory]);

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [currentPage, totalPages]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const isVideoFile = (file = '') => {
        return typeof file === 'string' && /\.(mp4|webm|ogg)(\?|$)/i.test(file);
    };

    const goToPreviousPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const goToNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const handlePageClick = (page) => {
        if (page === currentPage) return;
        setCurrentPage(page);
    };

    const handleCategoryClick = (category) => {
        if (category === selectedCategory) {
            setIsDropdownOpen(false);
            return;
        }
        setSelectedCategory(category);
        setCurrentPage(1);
        setIsDropdownOpen(false);
    };

    return (
        <div className='w-full min-h-screen night-bg px-6 sm:px-10 md:px-14 xl:px-16 pt-8 pb-16'>
            {/* Meteor Shower */}
            <div className="meteor-container">
                {meteorStyles.map((meteor) => (
                    <div
                        key={meteor.id}
                        className="meteor"
                        style={{
                            top: meteor.top,
                            right: meteor.right,
                            animationDelay: meteor.animationDelay,
                            animationDuration: meteor.animationDuration
                        }}
                    ></div>
                ))}
            </div>
            
            {/* PAGE TITLE */}
            <div className='justify-center items-center flex-col flex w-full py-15 my-5'>
                <h1 className="text-white text-6xl font-['Just_Another_Hand'] text-center -mb-3">
                    GALLERY
                </h1>

                <img src={starline} alt="starline" className='w-45 h-6 justify-center' />

                <h5 className='font-lato text-white text-center italic ml-4 -mt-3'>
                    creativity starts here
                </h5>
            </div>

            {/* CATEGORY HEADER & FILTER */}
            <div className='w-full mb-8'>
                <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6'>
                    {/* Category Title */}
                    <h2 className='text-[#FFD21F] text-2xl md:text-3xl font-lato font-black uppercase'>
                        {selectedCategory === 'All Projects' ? 'ALL PROJECTS' : selectedCategory.toUpperCase()}
                    </h2>

                    {/* Modern Filter */}
                    <div className='relative' ref={dropdownRef}>
                        <button
                            type='button'
                            onClick={() => setIsDropdownOpen((prev) => !prev)}
                            className='flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-5 py-2.5 border border-white/20 hover:bg-white/15 transition-all'
                        >
                            <img src={starline} alt="filter-line" className='w-16 h-4 object-contain' />

                            <span className='text-[#FFD21F] text-sm font-lato font-medium whitespace-nowrap'>
                                {selectedCategory}
                            </span>

                            <svg
                                className={`w-4 h-4 text-[#FFD21F] transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                            >
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                            </svg>
                        </button>

                        {isDropdownOpen && (
                            <div className='absolute right-0 mt-2 w-56 rounded-2xl overflow-hidden border border-white/15 bg-[#22153A]/95 backdrop-blur-md shadow-2xl z-30'>
                                {combobox.map((option) => {
                                    const isActive = option.label === selectedCategory;

                                    return (
                                        <button
                                            key={option.id}
                                            type='button'
                                            onClick={() => handleCategoryClick(option.label)}
                                            className={`w-full text-left px-4 py-3 font-lato text-sm transition-colors ${
                                                isActive
                                                    ? 'bg-white/10 text-[#FFD21F] font-bold'
                                                    : 'text-[#FFD21F] hover:bg-white/8'
                                            }`}
                                        >
                                            {option.label}
                                        </button>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* PROJECTS GRID */}
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-7 mb-12'>
                {paginatedProjects.map((project) => (
                    <div
                        key={project.id}
                        onClick={() => setSelectedProject(project)}
                        className='relative cursor-pointer transition-transform duration-300 hover:scale-[1.02]'
                    >
                        {/* Star decoration */}
                        <img
                            src={star}
                            alt="card star"
                            className='absolute -top-3 -left-2.5 w-7 h-7 z-10 object-contain'
                        />

                        {/* Card */}
                        <div className='rounded-lg border-t-4 border-[#FFD21F] overflow-hidden shadow-lg'>
                            <div className='min-h-67.5 px-6 pt-6 pb-7 bg-linear-to-b from-[#31255A] via-[#3D2E67] to-[#735D74]'>
                                {/* Cover Image */}
                                <div className='w-full h-44 overflow-hidden mb-4 bg-black/20 rounded'>
                                    {isVideoFile(project.coverImage) ? (
                                        <video
                                            src={project.coverImage}
                                            className='w-full h-full object-cover'
                                            muted
                                            playsInline
                                            preload='metadata'
                                        />
                                    ) : (
                                        <img
                                            src={project.coverImage}
                                            alt={project.title}
                                            className='w-full h-full object-cover'
                                        />
                                    )}
                                </div>

                                {/* Category */}
                                <div className='flex items-center gap-2 mb-2.5'>
                                    <img
                                        src={categoryIcons[project.category]}
                                        alt={project.category}
                                        className='w-4 h-4 object-contain'
                                    />
                                    <p className='text-[#FFD21F] text-sm font-lato font-bold leading-none'>
                                        {categoryDisplay[project.category] || project.category}
                                    </p>
                                </div>

                                {/* Title */}
                                <h3 className='text-white font-lato font-bold text-base md:text-lg leading-tight'>
                                    {project.title}
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* PAGINATION */}
            {totalPages > 1 && (
                <div className='w-full flex justify-center items-center gap-8 mt-10'>
                    {/* Previous Button */}
                    <button
                        type='button'
                        onClick={goToPreviousPage}
                        disabled={currentPage === 1}
                        className='text-[#D8C1A9] text-5xl leading-none disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 hover:text-white hover:scale-110 active:scale-95'
                        aria-label='Previous page'
                    >
                        ‹
                    </button>

                    {/* Page Indicators */}
                    <div className='flex items-center gap-5'>
                        {Array.from({ length: totalPages }, (_, index) => {
                            const page = index + 1;
                            const isActive = page === currentPage;

                            if (isActive) {
                                return (
                                    <button
                                        key={page}
                                        type='button'
                                        onClick={() => handlePageClick(page)}
                                        className='relative w-14 h-14 flex items-center justify-center transition-transform duration-200 hover:scale-105 active:scale-95'
                                        aria-label={`Page ${page}`}
                                        aria-current="page"
                                    >
                                        <img
                                            src={whitestar}
                                            alt={`Current page ${page}`}
                                            className='w-full h-full object-contain'
                                        />
                                        <span className='absolute inset-0 flex items-center justify-center text-[#6D2E8E] font-lato font-black text-xl'>
                                            {page}
                                        </span>
                                    </button>
                                );
                            }

                            return (
                                <button
                                    key={page}
                                    type='button'
                                    onClick={() => handlePageClick(page)}
                                    className='w-4 h-4 rounded-full bg-[#D8C1A9] transition-all duration-200 hover:bg-white hover:scale-125 active:scale-100'
                                    aria-label={`Go to page ${page}`}
                                />
                            );
                        })}
                    </div>

                    {/* Next Button */}
                    <button
                        type='button'
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages}
                        className='text-[#D8C1A9] text-5xl leading-none disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 hover:text-white hover:scale-110 active:scale-95'
                        aria-label='Next page'
                    >
                        ›
                    </button>
                </div>
            )}

            {/* PROJECT INFO MODAL */}
            {selectedProject && (
                <ProjectInfo
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    )
}

export default Projects