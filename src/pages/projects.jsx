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
import vb3 from '../assets/pics/project_pics/desktop/vb_activities/act2_2.png'
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
import Vbnet from '../assets/logos/vbnet.png'
import Lark from '../assets/logos/lark_circle.png'


//ICONS PER CATEGORY
import webapp from '../assets/icons/webapp.png'
import mobapp from '../assets/icons/mobapp.png'
import deskapp from '../assets/icons/deskapp.png'
import illus from '../assets/icons/drawlogo.png'
import pubmat from '../assets/icons/postr.png'
import videos from '../assets/icons/media.png'

const PROJECTS_PER_PAGE = 6

// ── helper: wrap a logo path into the { icon, name } shape project_info expects ──
const tech = (icon, name) => ({ icon, name })

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('All Projects');
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Animation state: key changes on every page/category switch → re-triggers CSS animation
    const [gridKey, setGridKey] = useState(0);

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
            title: 'COMWARE: Computer Hardware E-Commerce Website',
            category: 'Web Application',
            coverImage: comw1,
            additionalPics: [comw2],
            description: 'A comprehensive e-Commerce platform for selling computer hardware. Features include product catalog, shopping cart, and item checkout.',
            techStack: [tech(Html,'HTML'), tech(Css,'CSS'), tech(Canva,'Canva')],
            contributions: [
                'Designed the carousel and product listing in home page',
                'Designed the posters/banners used for the website',
            ]
        },
        {
            id: 2,
            title: 'EduQueue: Registrar Ticketing System',
            category: 'Web Application',
            coverImage: eduq1,
            additionalPics: [eduq2, eduq3, eduq4, eduq5],
            description: 'A ticketing system for school registrar offices to manage student queues and appointments especially for scholarly services.',
            techStack: [tech(Html,'HTML'), tech(Css,'CSS'), tech(Js,'JavaScript'), tech(Mysql,'MySQL')],
            contributions: [
                'One of the designers of the user interface of the system in Figma',
                'Became the project manager of the team',
                'One of the developers of the front end interface, and main menu page',
            ]
        },
        {
            id: 3,
            title: 'Fit4school: Mobile Uniform Pre-ordering System With Virtual Size Assistance For Children’s School Of Tomorrow',
            category: 'Web Application',
            coverImage: fit4s1,
            additionalPics: [fit4s2, fit4s3, fit4s4, fit4s5],
            description: 'The web application of our capstone system, which allows administrators and accountants to manage the uniform inventory, orders, and payments. It also provides a dashboard for sales and inventory analytics.',
            techStack: [tech(Figma,'Figma'), tech(Js,'JavaScript'), tech(Reactjs,'ReactJS'), tech(Tailwind,'TailwindCSS'), tech(Firebase,'Firebase')],
            contributions: [
                'One of the front end developers',
                'Developed the back end of the system',
                'Tested and debugged the system, ensuring its quality',
                'Managed the database of the system'
            ]
        },
        {
            id: 4,
            title: 'Jelizen Portfolio',
            category: 'Web Application',
            coverImage: jel1,
            additionalPics: [jel2, jel3, jel4, jel5],
            description: 'A group portfolio created and designed along with Jeannen Basay and Julia Fajardo.',
            techStack: [tech(Figma,'Figma'), tech(Js,'JavaScript'), tech(Reactjs,'React'), tech(Tailwind,'Tailwind')],
            contributions: [
                'Lead developer of the team',
                'One of the designers the user interface, especially the interactivity of the website',
                'System files manager of the project'
            ]
        },
        {
            id: 5,
            title: 'Fit4school: Mobile Uniform Pre-ordering System With Virtual Size Assistance For Children’s School Of Tomorrow ',
            category: 'Mobile Application',
            coverImage: fit4m1,
            additionalPics: [fit4m2, fit4m3, fit4m4, fit4m5],
            description: 'The mobile application of the capstone project, designed for student and parents as a platform where they can virtually fit and pre-order the uniform.',
            techStack: [tech(Js,'JavaScript'), tech(Reactjs,'React Native'), tech(Expo,'Expo'), tech(Firebase,'Firebase')],
            contributions: [
                'Lead developer of the team',
                'Developed the front end and back end of the system',
                'Implemented the virtual size assistance module, QR ticketing and scanning',
                'Developed the end-to-end process of the project',
                'Tested and debugged the system, ensuring its quality',
                'Managed the database of the system'
            ]
        },
        {
            id: 6,
            title: 'Potato Donut Cafe (PDC) Point of Sales System',
            category: 'Desktop Application',
            coverImage: pdc1,
            additionalPics: [pdc2],
            description: 'My very first Java point of sales system for an individual school project.',
            techStack: [tech(Java,'Java')],
            contributions: [
                'Fullstack developer of the system',
                'Designed the logo and user interface',
                'Utilized its functionality and features'
            ]
        },
        {
            id: 7,
            title: 'Alviar Dental Clinic Management System',
            category: 'Desktop Application',
            coverImage: alv1,
            additionalPics: [alv2],
            description: 'A group project designed in Visual Basic with Microsoft Access for managing dental appointments, inventory, and transaction.',
            techStack: [tech(Vbnet,'Visual Basic'), tech(Canva, 'Canva')],
            contributions: [
                'One of the developers of the team',
                'Developed the front end of the system',
                'Contributed at the back end process'
            ]
        },
        {
            id: 8,
            title: 'Fred Fries Point of Sales System',
            category: 'Desktop Application',
            coverImage: ff1,
            additionalPics: [ff2, ff3],
            description: 'A Java desktop application for a fast food stall to streamline the manual ordering process.',
            techStack: [tech(Java,'Java'), tech(Mysql,'MySQL'), tech(Canva,'Canva')],
            contributions: [
                'Lead developer of the team',
                'Designed the user interface of the system, including the customized buttons and items',
                'Utilized its functionality and features',
                'Tested and debugged the system, ensuring its quality'
            ]
        },
        {
            id: 9,
            title: 'La Camelle Point of Sales School Supplies',
            category: 'Desktop Application',
            coverImage: lcs1,
            additionalPics: [lcs2],
            description: 'A group project designed in Visual Basic with Microsoft Access to digitalize the process of distributing and organizing school supplies.',
            techStack: [tech(Vbnet,'Visual Basic')],
            contributions: [
                'One of the developers, and project manager of the team',
                'Designed the user interface of the system, including the customized buttons and items',
                'Developed the process of the main POS page',
                'Tested and debugged the system, ensuring its quality'
            ]
        },
        {
            id: 10,
            title: 'Tools R Us: Hardware Store Point of Sales and Inventory Management System',
            category: 'Desktop Application',
            coverImage: trus1,
            additionalPics: [trus2, trus3],
            description: 'A Java desktop application for managing inventory and customer orders for a hypothetical hardware shop.',
            techStack: [tech(Java,'Java'), tech(Mysql,'MySQL')],
            contributions: [
                'One of the developers of the team',
                'Designed the front end of the system',
                'Utilized its functionality and features',
                'Tested and debugged the system, ensuring its quality'
            ]
        },
        {
            id: 11,
            title: 'Visual Basic School Activities',
            category: 'Desktop Application',
            coverImage: vb1,
            additionalPics: [vb2, vb3, vb4, vb5],
            description: 'A compilation of mini systems for our individual activities using Visual Basic.',
            techStack: [tech(Vbnet,'Visual Basic')],
            contributions: [
                'Fullstack developer of the systems',
                '1st Image: Tokyo Revengers Inspired Wikipedia',
                '2nd & 3rd Image: Noto-machi: Notes Desktop Application Inspired by Otomachi Una',
                '4th Image: Hatsune Miku Three-Operand Calculator with Background Music',
                '5th Image: Domestic Flight Timetable'
            ]
        },
        {
            id: 12,
            title: 'Digital Art Collection',
            category: 'Illustration',
            coverImage: draw1,
            additionalPics: [draw2, draw3],
            description: 'Some of my collection of digital illustrations.',
            techStack: [tech(Medi,'MediBang')],
            contributions: [
                '1st Image: Hirono Version of Manjiro Sano from Tokyo Revengers',
                '2nd Image: A fanart of Chroma’s Original Character (OC)',
                '3rd Image: My Art Persona'
            ]
        },
        {
            id: 13,
            title: 'Pixel Art Collection',
            category: 'Illustration',
            coverImage: pixel1,
            additionalPics: [pixel2, pixel3],
            description: 'A compilation of pixel artworks created in LibreSprite.',
            techStack: [],
            contributions: [
                '1st Image: Kuromi',
                '2nd Image: Palette Challenge with Original Character (OC)',
                '3rd Image: Pearl from Steven Universe'
            ]
        },
        {
            id: 14,
            title: 'Portfolio Character in Homepage',
            category: 'Illustration',
            coverImage: kstar1,
            additionalPics: [kstar2, kstar3],
            description: 'Step-by-step process of creating my portfolio character from sketch to final render using IbisPaint.',
            techStack: [],
            contributions: [
                '1st Image: Traditional Sketch',
                '2nd Image: Lineart',
                '3rd Image: Rendered'
            ]
        },
        {
            id: 15,
            title: 'School Art Projects',
            category: 'Illustration',
            coverImage: sch1,
            additionalPics: [],
            description: 'Art projects created for school requirements and academic presentations.',
            techStack: [],
            contributions: [
                'One of the representative of our section',
                'An art that represents gender equality, and hand-drawn in IbisPaint.'
            ]
        },
        {
            id: 16,
            title: 'COMWARE Marketing Materials, Posters, and Banners',
            category: 'Posters',
            coverImage: cwm1,
            additionalPics: [cwm2, cwm3],
            description: 'Marketing posters and promotional materials for the COMWARE e-commerce website.',
            techStack: [tech(Canva,'Canva')],
            contributions: [
                'Marketing materials designer'
            ]
        },
        {
            id: 17,
            title: 'Kasaysayan: Visual Sources in the Philippines',
            category: 'Posters',
            coverImage: kas1,
            additionalPics: [kas2, kas3],
            description: 'Publication design for a group project featuring Filipino history, culture and landmarks',
            techStack: [tech(Canva,'Canva')],
            contributions: [
                'One of the designers of the team',
                'Responsible for designing the cover, acknowledgement, and back page of the magazine'
            ]
        },
        {
            id: 18,
            title: 'School Poster Activities',
            category: 'Posters',
            coverImage: oth1,
            additionalPics: [oth2, oth3, oth4, oth5],
            description: 'Compilation of individual school activities relating to publication materials.',
            techStack: [tech(Canva,'Canva')],
            contributions: [
                '1st Image: Poster about Equality',
                '2nd Image: Poster activity using Photoshop',
                '3rd Image: Family Tree of Dr. Jose Rizal',
                '4th Image: Hypothetical Fast Food Promotion Poster',
                '5th Image: Identification Card of a Hypothetical Company'
            ]
        },
        {
        
            id: 19,
            title: 'Golden Anniversary Vlog',
            category: 'Media',
            coverImage: svid1,
            additionalPics: [],
            description: 'Introduction clip of my 3-minute vlog for a school project.',
            techStack: [tech(Capcut,'CapCut')],
            contributions: [
                'Videographer, Photographer and Editor of the video',
                'Video Link: https://drive.google.com/file/d/1fLXHG-x9-tt5XvSTxBUOXDMKa_snaKfk/view?usp=sharing',
            ]
        },
        {
            id: 20,
            title: 'Instagram Story Templates',
            category: 'Media',
            coverImage: pvids[0],
            additionalPics: [pvids[1], pvids[2]],
            description: 'Templates made in Instagram, Capcut, and Canva.',
            techStack: [tech(Capcut,'CapCut'), tech(Canva,'Canva')],
            contributions: [
                'Photographer and Editor of the templates'
            ]
        },
        {
            id: 21,
            title: 'Kristale: My Tiktok Content Series',
            category: 'Media',
            coverImage: tiktok[0],
            additionalPics: [tiktok[1]],
            description: 'My series as Kristal containing vlogs and videos made in Capcut.',
            techStack: [tech(Capcut,'CapCut')],
            contributions: [
                'Content Creator and Visual Storyteller',
                'Videographer and Editor of the videos'
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
        setGridKey(k => k + 1);
    }, [selectedCategory]);

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
        setGridKey(k => k + 1);
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

            <style>{`
                @keyframes proj-card-in {
                    from { opacity: 0; transform: translateY(32px) scale(0.96); }
                    to   { opacity: 1; transform: translateY(0) scale(1); }
                }
                @keyframes proj-shimmer {
                    0%   { background-position: -200% center; }
                    100% { background-position:  200% center; }
                }
                @keyframes proj-star-spin {
                    from { transform: rotate(0deg) scale(1); }
                    50%  { transform: rotate(180deg) scale(1.25); }
                    to   { transform: rotate(360deg) scale(1); }
                }
                @keyframes proj-title-glow-in {
                    from { opacity: 0; transform: translateY(-18px); }
                    to   { opacity: 1; transform: translateY(0); }
                }

                /* Fixed height so all cards match — no more uneven boxes */
                .proj-card {
                    opacity: 0;
                    animation: proj-card-in 0.55s cubic-bezier(.22,1,.36,1) forwards;
                    height: 340px;
                }

                /* Lift + purple glow shadow on hover */
                .proj-card:hover {
                    transform: translateY(-7px) scale(1.018) !important;
                    box-shadow: 0 18px 44px rgba(151,78,195,0.38), 0 4px 14px rgba(0,0,0,0.45) !important;
                    transition: transform .3s ease, box-shadow .3s ease !important;
                }

                /* Inner card: full height, flex column, yellow border stays always */
                .proj-inner-card {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    /* NOTE: no border-color transition here — stays #FFD21F */
                }

                /* Body: fills remaining height; subtle background shift on hover */
                .proj-inner-body {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    padding: 1.25rem;
                    background: linear-gradient(to bottom, #31255A, #3D2E67, #735D74);
                    transition: background 0.35s ease;
                }
                /* Hover brightens the body slightly — no jarring colour jump */
                .proj-card:hover .proj-inner-body {
                    background: linear-gradient(to bottom, #38306a, #483d7a, #826b84);
                }

                /* Shimmer sweep over cover image on hover */
                .proj-img-wrap {
                    position: relative;
                    overflow: hidden;
                    flex-shrink: 0;
                }
                .proj-img-wrap::after {
                    content: '';
                    position: absolute; inset: 0;
                    background: linear-gradient(
                        110deg,
                        transparent 35%,
                        rgba(227,208,149,0.14) 50%,
                        transparent 65%
                    );
                    background-size: 200% 100%;
                    opacity: 0;
                    transition: opacity .3s;
                    pointer-events: none;
                }
                .proj-card:hover .proj-img-wrap::after {
                    opacity: 1;
                    animation: proj-shimmer 1.1s linear infinite;
                }

                /* Deco star spins on hover */
                .proj-deco-star { transition: transform .5s ease; }
                .proj-card:hover .proj-deco-star {
                    animation: proj-star-spin .7s ease forwards;
                }

                /* Category badge gold glow */
                .proj-badge { transition: text-shadow .25s; }
                .proj-card:hover .proj-badge {
                    text-shadow: 0 0 10px rgba(255,210,31,0.7);
                }

                /* Title warm glow */
                .proj-title { transition: text-shadow .3s; }
                .proj-card:hover .proj-title {
                    text-shadow: 0 0 14px rgba(227,208,149,0.5);
                }

                /* Page title entrance */
                .proj-page-title {
                    animation: proj-title-glow-in .7s cubic-bezier(.22,1,.36,1) both;
                }
            `}</style>

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
            <div className='justify-center items-center flex-col flex w-full py-15 my-5 proj-page-title'>
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
                    <h2 className='text-[#FFD21F] text-2xl md:text-3xl font-lato font-black uppercase'>
                        {selectedCategory === 'All Projects' ? 'ALL PROJECTS' : selectedCategory.toUpperCase()}
                    </h2>

                    <div className='relative' ref={dropdownRef}>
                        <button
                            type='button'
                            onClick={() => setIsDropdownOpen((prev) => !prev)}
                            className='flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-5 py-2.5 border border-white/20 hover:bg-white/15 transition-all'
                        >
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
            <div
                key={gridKey}
                className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-7 mb-12'
            >
                {paginatedProjects.map((project, index) => (
                    <div
                        key={project.id}
                        onClick={() => setSelectedProject(project)}
                        className='proj-card relative cursor-pointer'
                        style={{ animationDelay: `${index * 0.09}s` }}
                    >
                        {/* Star decoration */}
                        <img
                            src={star}
                            alt="card star"
                            className='proj-deco-star absolute -top-3 -left-2.5 w-7 h-7 z-10 object-contain'
                        />

                        {/* border-[#FFD21F] — yellow, no transition, stays yellow always */}
                        <div className='proj-inner-card rounded-lg border-t-4 border-[#FFD21F] overflow-hidden shadow-lg'>
                            <div className='proj-inner-body'>
                                {/* Cover Image */}
                                <div className='proj-img-wrap w-full h-44 mb-3 bg-black/20 rounded'>
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
                                <div className='flex items-center gap-2 mb-2'>
                                    <img
                                        src={categoryIcons[project.category]}
                                        alt={project.category}
                                        className='w-4 h-4 object-contain shrink-0'
                                    />
                                    <p className='proj-badge text-[#FFD21F] text-sm font-lato font-bold leading-none'>
                                        {categoryDisplay[project.category] || project.category}
                                    </p>
                                </div>

                                {/* Title */}
                                <h3 className='proj-title text-white font-lato font-bold text-base md:text-lg leading-tight'>
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
                    <button
                        type='button'
                        onClick={goToPreviousPage}
                        disabled={currentPage === 1}
                        className='text-[#ffffff] text-5xl leading-none transition-all duration-200 hover:text-white hover:scale-110 active:scale-95'
                        aria-label='Previous page'
                    >
                        ‹
                    </button>

                    <div className='flex items-center justify-center gap-2'>
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
                                            className='w-13 h-13 object-contain'
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
                                    className='w-3 h-3 rounded-full bg-[#fff2e4] transition-all duration-200 hover:bg-white hover:scale-125 active:scale-90'
                                    aria-label={`Go to page ${page}`}
                                />
                            );
                        })}
                    </div>

                    <button
                        type='button'
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages}
                        className='text-[#ffffff] text-5xl leading-none transition-all duration-200 hover:text-white hover:scale-110 active:scale-95'
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