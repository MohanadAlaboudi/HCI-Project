// Comprehensive Disability Data - 12 Detailed Disabilities
const disabilities = [
    {
        id: 1,
        title: "Autism Spectrum Disorder",
        description: "A developmental disorder characterized by difficulties with social interaction and communication.",
        color: "#4a6fa5",
        icon: "🧩",
        overview: "Autism Spectrum Disorder (ASD) is a complex developmental condition that involves persistent challenges in social interaction, speech and nonverbal communication, and restricted/repetitive behaviors. The effects of ASD and the severity of symptoms are different in each person. ASD begins in early childhood and eventually causes problems functioning in society — socially, in school and at work, for example.",
        detailedOverview: "Children with autism spectrum disorder often show signs of delayed development before age 2 years. Some children with autism spectrum disorder have difficulty learning, and some have signs of lower than normal intelligence. Other children with the disorder have normal to high intelligence — they learn quickly, yet have trouble communicating and applying what they know in everyday life and adjusting to social situations.",
        interactionTips: [
            "Be patient and give them time to process information and respond",
            "Use clear, concrete language and avoid idioms, sarcasm, or abstract concepts",
            "Respect their personal space and sensory needs - ask before touching",
            "Establish predictable routines and provide advance notice of changes",
            "Use visual supports like pictures, schedules, and social stories",
            "Speak in a calm, even tone of voice",
            "Give choices rather than open-ended questions",
            "Use their special interests to engage them in conversation"
        ],
        calmingTechniques: [
            "Provide a quiet, low-stimulation environment or 'calm down' space",
            "Offer sensory tools like fidget toys, stress balls, or weighted blankets",
            "Use deep pressure techniques if consented to (hugging, weighted vests)",
            "Practice deep breathing exercises together - 'smell the flower, blow out the candle'",
            "Create a visual schedule to reduce anxiety about transitions",
            "Use noise-canceling headphones in loud environments",
            "Provide chewy toys or gum for oral sensory needs",
            "Use calming visual stimuli like lava lamps or bubble tubes"
        ],
        gamesActivities: [
            "Structured board games with clear rules and predictable turns",
            "Puzzle solving activities and pattern recognition games",
            "Building with LEGO, blocks, or similar construction toys",
            "Visual pattern recognition games and matching activities",
            "Activities with predictable outcomes and clear completion points",
            "Computer games that align with special interests",
            "Sorting and organizing activities",
            "Repetitive physical activities like swinging or jumping"
        ],
        helpfulTips: [
            "Focus on their strengths and abilities rather than deficits",
            "Be consistent in your interactions and expectations",
            "Learn about their specific sensory sensitivities (sounds, lights, textures)",
            "Use their special interests to motivate and engage them",
            "Provide clear expectations and immediate positive reinforcement",
            "Break down complex tasks into smaller, manageable steps",
            "Use social stories to explain social situations and expectations",
            "Be aware that behavior is communication - try to understand the underlying need"
        ],
        needs: [
            "Structured environment with predictable routines and minimal surprises",
            "Clear, literal communication without ambiguity or abstract concepts",
            "Advance notice for transitions or changes in routine",
            "Respect for sensory sensitivities and personal space",
            "Opportunities to pursue and discuss special interests",
            "Visual supports for communication and scheduling",
            "Quiet spaces for retreat when overwhelmed",
            "Understanding and acceptance of stimming behaviors (unless harmful)"
        ],
        communication: "Be direct, literal, and patient. Allow extra processing time (5-10 seconds). Use visual aids, social stories, and concrete examples. Avoid sarcasm, idioms, and rhetorical questions.",
        dos: [
            "Do speak clearly and literally using concrete language",
            "Do respect their routines and need for predictability",
            "Do give them physical space when they seem overwhelmed",
            "Do recognize and build upon their unique strengths and talents",
            "Do be patient with responses - allow thinking time",
            "Do use visual supports to enhance understanding",
            "Do acknowledge their feelings and perspectives",
            "Do provide warnings before transitions"
        ],
        donts: [
            "Don't use sarcasm, idioms, or figurative language",
            "Don't touch without permission or invade personal space",
            "Don't force eye contact - this can be uncomfortable",
            "Don't interrupt repetitive behaviors unless they're harmful",
            "Don't make sudden changes without warning",
            "Don't take blunt comments personally",
            "Don't overwhelm with too much verbal information",
            "Don't assume lack of understanding based on communication style"
        ],
        emergencyInfo: "If experiencing meltdown: Remain calm, reduce sensory input, ensure safety, don't restrain unless absolutely necessary for safety, speak softly and minimally, wait it out.",
        resources: [
            "Autism Society - www.autism-society.org",
            "Autism Speaks - www.autismspeaks.org",
            "National Autism Association - nationalautismassociation.org"
        ]
    },
    {
        id: 2,
        title: "Alzheimer's Disease",
        description: "A progressive disease that destroys memory and other important mental functions.",
        color: "#6b8cbc",
        icon: "🧠",
        overview: "Alzheimer's disease is a progressive neurologic disorder that causes the brain to shrink (atrophy) and brain cells to die. Alzheimer's disease is the most common cause of dementia — a continuous decline in thinking, behavioral and social skills that affects a person's ability to function independently. The disease affects memory, thinking, and behavior, and symptoms eventually grow severe enough to interfere with daily tasks.",
        detailedOverview: "Alzheimer's disease typically progresses slowly in three general stages: mild (early stage), moderate (middle stage), and severe (late stage). Since Alzheimer's affects people in different ways, each person may experience symptoms — or progress through the stages — differently. The disease is characterized by the buildup of amyloid plaques and tau tangles in the brain, which disrupt communication between nerve cells and eventually cause cell death.",
        interactionTips: [
            "Speak slowly and clearly using simple words and short sentences",
            "Maintain eye contact and use their name frequently to maintain connection",
            "Ask one question at a time and be patient for responses - allow 30+ seconds",
            "Use visual cues, gestures, and pointing to support verbal communication",
            "Avoid correcting or arguing about confused memories - redirect instead",
            "Approach from the front to avoid startling them",
            "Use familiar phrases and references from their past",
            "Break tasks into single-step instructions"
        ],
        calmingTechniques: [
            "Maintain a consistent daily routine with familiar activities",
            "Play familiar, soothing music from their youth or young adulthood",
            "Provide comforting tactile objects like soft blankets or worry beads",
            "Use reminiscence therapy with old photos and memory books",
            "Ensure the environment is quiet and not overstimulating",
            "Use gentle touch if appropriate and welcomed",
            "Provide simple, repetitive activities like folding laundry",
            "Use aromatherapy with familiar scents like lavender"
        ],
        gamesActivities: [
            "Simple card games like Go Fish or Old Maid with large-print cards",
            "Looking through photo albums and reminiscing about pictures",
            "Listening to familiar music from their era and singing along",
            "Simple sorting or matching activities with household items",
            "Gentle physical activities like walking, stretching, or chair exercises",
            "Simple puzzles with large pieces and familiar images",
            "Sorting coins or buttons by color or size",
            "Folding towels or matching socks"
        ],
        helpfulTips: [
            "Be patient and don't take behaviors personally - it's the disease, not the person",
            "Focus on emotional connection rather than factual accuracy",
            "Break tasks into simple, step-by-step instructions",
            "Use labels and signs with pictures to help with orientation",
            "Ensure safety by removing hazards and installing safety devices",
            "Maintain a calm, predictable environment",
            "Use validation therapy - acknowledge their feelings and reality",
            "Keep important items in consistent, visible locations"
        ],
        needs: [
            "Structured routine with minimal changes and surprises",
            "Clear, simple communication with visual supports",
            "Safe and familiar environment with clear pathways",
            "Patience, emotional support, and reassurance",
            "Assistance with daily activities as needed without rushing",
            "Respect for dignity and autonomy whenever possible",
            "Regular medical care and medication management",
            "Support for caregivers who also need breaks and resources"
        ],
        communication: "Use simple sentences, maintain a calm and reassuring tone, focus on emotional connection rather than factual accuracy, use nonverbal cues, and be patient with responses.",
        dos: [
            "Do introduce yourself by name and relation if needed",
            "Do use short, simple sentences with one idea at a time",
            "Do be patient and give ample time for responses",
            "Do use visual cues and gestures to support understanding",
            "Do focus on feelings and emotional connection",
            "Do maintain routines and familiar environments",
            "Do speak to them as an adult with respect",
            "Do validate their feelings and experiences"
        ],
        donts: [
            "Don't argue or correct confused statements - redirect instead",
            "Don't use complex language, abstract concepts, or logic",
            "Don't ask multiple questions at once or test their memory",
            "Don't rush or pressure them - this increases anxiety",
            "Don't take agitation or resistance personally",
            "Don't talk about them as if they're not present",
            "Don't overwhelm with too many choices",
            "Don't confront or reason with paranoid thoughts"
        ],
        emergencyInfo: "If agitated: Stay calm, speak softly, validate feelings, redirect to pleasant activity, ensure safety, call doctor if behavior is dangerous or sudden change occurs.",
        resources: [
            "Alzheimer's Association - www.alz.org",
            "Alzheimer's Foundation of America - www.alzfdn.org",
            "National Institute on Aging - www.nia.nih.gov"
        ]
    },

    // Continuing with the remaining 10 disabilities...

{
    id: 3,
    title: "Hearing Impairment",
    description: "Partial or total inability to hear sounds in one or both ears.",
    color: "#ff7e5f",
    icon: "👂",
    overview: "Hearing impairment refers to partial or total inability to hear. It can range from mild to profound and may affect one or both ears. Hearing loss can be present at birth (congenital) or acquired later in life. It can significantly impact communication, social interaction, and quality of life. Hearing impairments are categorized as conductive (outer/middle ear), sensorineural (inner ear), or mixed.",
    detailedOverview: "Hearing loss exists on a spectrum from mild to profound. People with hearing impairments may use various communication methods including sign language, lip reading, hearing aids, cochlear implants, or written communication. The experience of hearing loss varies greatly depending on whether it's pre-lingual (before language development) or post-lingual, and the degree of loss. Many people with hearing impairments identify with Deaf culture and consider their condition a cultural identity rather than a disability.",
    interactionTips: [
        "Face the person directly and maintain eye contact at their level",
        "Speak clearly at a normal pace without shouting or over-articulating",
        "Use natural gestures and facial expressions to support communication",
        "Reduce background noise when possible or move to quieter areas",
        "Rephrase rather than repeat if you're not understood",
        "Get their attention before speaking by waving or gentle touch",
        "Ensure good lighting on your face for lip reading",
        "Be patient and willing to use different communication methods"
    ],
    calmingTechniques: [
        "Ensure good lighting for lip reading and visual communication",
        "Use written communication or text-to-speech apps when helpful",
        "Provide vibration alerts for important notifications or doorbells",
        "Use visual relaxation techniques like guided imagery with captions",
        "Create communication-friendly environments with minimal echo",
        "Use visual schedules and picture boards for routines",
        "Provide access to sign language interpreters when needed",
        "Use flashing light alerts for phones and alarms"
    ],
    gamesActivities: [
        "Visual games like puzzles, board games, or card games",
        "Activities that don't rely on hearing like arts and crafts",
        "Sports with visual signals and clear rule demonstrations",
        "Reading, storytelling with visual support, or captioning",
        "Dance with visual rhythm cues and vibration through floors",
        "Computer games with visual feedback and captioning",
        "Building and construction activities",
        "Visual scavenger hunts or treasure hunts"
    ],
    helpfulTips: [
        "Learn basic sign language if you regularly interact with Deaf individuals",
        "Get their attention visually before starting to communicate",
        "Be patient and willing to use different communication methods",
        "Ensure hearing aids or cochlear implants are working if used",
        "Use technology like speech-to-text apps or video relay services",
        "Face the light source so your face is well-lit for lip reading",
        "Keep your mouth visible - don't cover it while speaking",
        "Understand that hearing fatigue is real - communication requires extra effort"
    ],
    needs: [
        "Clear visual communication and attention to lighting",
        "Reduced background noise in communication environments",
        "Patience in communication and willingness to adapt methods",
        "Access to assistive listening devices and technology",
        "Inclusion in social activities with communication access",
        "Visual alerts for safety signals and important information",
        "Respect for their preferred communication method",
        "Understanding of Deaf culture and community"
    ],
    communication: "Face the person, speak clearly without shouting, use visual cues, be open to written communication or technology aids, maintain eye contact, and be patient.",
    dos: [
        "Do face the person directly when speaking",
        "Do speak clearly at normal volume without shouting",
        "Do use gestures and facial expressions naturally",
        "Do be patient with communication attempts",
        "Do reduce background noise when possible",
        "Do learn basic sign language greetings",
        "Do ensure good lighting on your face",
        "Do ask their preferred communication method"
    ],
    donts: [
        "Don't shout or over-articulate - it distorts lip patterns",
        "Don't cover your mouth or look away while speaking",
        "Don't turn away while talking or speak from another room",
        "Don't give up if not understood immediately - try rephrasing",
        "Don't assume they can read lips perfectly (only 30-40% is readable)",
        "Don't talk to their interpreter instead of them",
        "Don't make assumptions about their hearing ability",
        "Don't exclude them from conversations"
    ],
    emergencyInfo: "In emergency: Get visual attention, use clear gestures, write messages, ensure they see emergency alerts, know their preferred emergency communication method.",
    resources: [
        "National Association of the Deaf - www.nad.org",
        "Hearing Loss Association of America - www.hearingloss.org",
        "American Speech-Language-Hearing Association - www.asha.org"
    ]
},
{
    id: 4,
    title: "Visual Impairment",
    description: "A decreased ability to see to a degree that causes problems not fixable by usual means.",
    color: "#4a9fa5",
    icon: "👁️",
    overview: "Visual impairment refers to significant reduction in vision that cannot be corrected with standard glasses or contact lenses. It ranges from partial sight (low vision) to complete blindness. Visual impairment can affect people of all ages and has various causes including genetic conditions, injuries, or diseases like glaucoma, cataracts, or macular degeneration. Only about 10-15% of people with visual impairments are completely blind; most have some usable vision.",
    detailedOverview: "Visual impairments exist on a spectrum and can affect different aspects of vision: central vision, peripheral vision, color perception, depth perception, or light sensitivity. Some people may see blurry images, others see only parts of images, and some see nothing at all. Visual impairments can be stable or progressive. People with visual impairments develop enhanced skills in their other senses and often use assistive technology, orientation and mobility training, and adaptive techniques to navigate the world independently.",
    interactionTips: [
        "Identify yourself when approaching and announce when you're leaving",
        "Use verbal descriptions of surroundings, people, and activities",
        "Offer your arm for guidance rather than grabbing theirs or pushing",
        "Be specific with directions (left/right rather than 'over there')",
        "Speak directly to the person, not to their companion or guide",
        "Use descriptive language and provide context for conversations",
        "Ask if they need assistance rather than assuming",
        "Describe obstacles and changes in terrain as you walk together"
    ],
    calmingTechniques: [
        "Provide clear verbal explanations of surroundings and changes",
        "Use tactile objects and markers for orientation and comfort",
        "Maintain consistent room layouts and notify of changes",
        "Use auditory cues and landmarks for navigation",
        "Ensure pathways are clear of obstacles and hazards",
        "Provide verbal reassurance during unfamiliar situations",
        "Use consistent sound markers for locations",
        "Create predictable routines and environments"
    ],
    gamesActivities: [
        "Audio books, podcasts, and descriptive media",
        "Games with tactile components like braille chess or textured cards",
        "Music and rhythm activities, singing, and instrument playing",
        "Verbal games like 20 questions, word games, or storytelling",
        "Guided physical activities with clear verbal instructions",
        "Tactile arts like clay modeling or textured painting",
        "Adapted sports like goalball or beep baseball",
        "Memory games and audio-based puzzles"
    ],
    helpfulTips: [
        "Don't avoid words like 'see' or 'look' in conversation - it's natural",
        "Provide detailed verbal descriptions of visual information",
        "Keep walking paths clear of obstacles and chairs pushed in",
        "Announce when you're entering or leaving a space",
        "Ask if assistance is needed rather than assuming or forcing help",
        "Guide their hand to objects rather than placing objects in their hand",
        "Be descriptive about people, places, and events",
        "Respect their independence and capabilities"
    ],
    needs: [
        "Clear verbal communication and descriptions",
        "Consistent environment layouts with notification of changes",
        "Assistance with navigation when requested, not assumed",
        "Access to audio materials and descriptive media",
        "Respect for independence and capabilities",
        "Clear pathways and organized spaces",
        "Access to assistive technology and tools",
        "Understanding that blindness doesn't mean helplessness"
    ],
    communication: "Identify yourself, use descriptive language, speak directly to the person, offer assistance without assuming it's needed, be specific with directions, and don't avoid visual language.",
    dos: [
        "Do identify yourself when approaching",
        "Do offer assistance but wait for acceptance",
        "Do use descriptive language and context",
        "Do be specific with directions and locations",
        "Do speak directly to the person",
        "Do describe visual information verbally",
        "Do guide their hand to objects if helping",
        "Do respect their independence and skills"
    ],
    donts: [
        "Don't grab or push without asking and explaining",
        "Don't pet or distract guide dogs without permission",
        "Don't leave doors partially open or obstacles in pathways",
        "Don't rearrange furniture without informing them",
        "Don't speak loudly as if hearing is impaired",
        "Don't move their belongings without telling them",
        "Don't assume they need help with everything",
        "Don't talk down to them or use childish language"
    ],
    emergencyInfo: "In emergency: Verbally describe situation, offer arm for guidance, provide clear instructions, ensure they know evacuation routes, have emergency info in accessible format.",
    resources: [
        "American Foundation for the Blind - www.afb.org",
        "National Federation of the Blind - www.nfb.org",
        "Lighthouse for the Blind - www.lighthouse-sf.org"
    ]
},
{
    id: 5,
    title: "Physical Disability",
    description: "A limitation on a person's physical functioning, mobility, dexterity or stamina.",
    color: "#9f4aa5",
    icon: "♿",
    overview: "Physical disabilities refer to conditions that limit a person's physical functioning, mobility, dexterity, or stamina. These can include conditions affecting the musculoskeletal system, nervous system, or other body systems. Physical disabilities can be present from birth or acquired later in life through injury, illness, or aging. They can be static (unchanging) or progressive, and may affect one or multiple areas of the body.",
    detailedOverview: "Physical disabilities encompass a wide range of conditions including cerebral palsy, spinal cord injuries, muscular dystrophy, multiple sclerosis, arthritis, amputations, and many others. The impact varies greatly - some people use wheelchairs or other mobility aids, some have difficulty with fine motor skills, while others experience chronic pain or fatigue. Many people with physical disabilities develop remarkable problem-solving skills and find creative ways to adapt activities and environments to meet their needs.",
    interactionTips: [
        "Speak directly to the person, not to their companion or assistant",
        "Respect personal space and equipment - don't lean on wheelchairs",
        "Ask before offering assistance and wait for instructions",
        "Be patient with communication or movement - don't rush",
        "Sit at eye level if the person uses a wheelchair",
        "Shake hands if offered, even if the grip is different",
        "Focus on the person, not the disability",
        "Be aware of accessibility and plan activities accordingly"
    ],
    calmingTechniques: [
        "Ensure comfortable positioning and proper body alignment",
        "Provide adequate physical support and adaptive equipment",
        "Use relaxation techniques adapted to physical abilities",
        "Create an accessible and barrier-free environment",
        "Allow extra time for tasks and transitions",
        "Use heat/cold therapy if appropriate and desired",
        "Provide supportive seating and positioning aids",
        "Use gentle stretching or range-of-motion exercises"
    ],
    gamesActivities: [
        "Adaptive sports like wheelchair basketball or boccia",
        "Board games and card games with adapted handles or card holders",
        "Creative arts adapted to abilities - modified brushes, tools",
        "Video games with accessible controllers or switch access",
        "Social activities in accessible locations with proper seating",
        "Music activities with adapted instruments",
        "Gardening with raised beds and adaptive tools",
        "Reading or audio books with page turners"
    ],
    helpfulTips: [
        "Focus on abilities rather than limitations",
        "Ensure environments are physically accessible",
        "Be patient with pace of movement or communication",
        "Ask about preferences for assistance rather than assuming",
        "Treat adults as adults regardless of physical ability",
        "Learn about specific accessibility needs",
        "Respect their knowledge about their own needs",
        "Include them in planning activities and outings"
    ],
    needs: [
        "Accessible environments and facilities",
        "Respect for independence and capabilities",
        "Appropriate assistive devices and equipment",
        "Patience with mobility and communication pace",
        "Inclusion in social and physical activities",
        "Understanding of varying energy levels and pain",
        "Access to transportation and community resources",
        "Respect for personal space and equipment"
    ],
    communication: "Speak directly to the person, be patient, ask before assisting, respect their capabilities and independence, maintain eye contact, and focus on the conversation not the disability.",
    dos: [
        "Do speak directly to the person",
        "Do ask before offering help",
        "Do be patient with movement and communication",
        "Do respect their capabilities and independence",
        "Do ensure accessibility in environments",
        "Do maintain eye contact at their level",
        "Do include them in conversations and decisions",
        "Do learn about their specific accessibility needs"
    ],
    donts: [
        "Don't lean on wheelchairs or mobility devices",
        "Don't make assumptions about capabilities or intelligence",
        "Don't pat people on the head or talk down to them",
        "Don't move mobility aids without permission",
        "Don't use infantilizing language or tone",
        "Don't ask personal medical questions out of curiosity",
        "Don't complete tasks for them without asking",
        "Don't exclude them from activities without checking accessibility"
    ],
    emergencyInfo: "In emergency: Ask how to assist, follow their instructions for mobility aids, know evacuation procedures for their specific needs, have emergency contacts accessible.",
    resources: [
        "United Spinal Association - www.unitedspinal.org",
        "Muscular Dystrophy Association - www.mda.org",
        "National Organization on Disability - www.nod.org"
    ]
},
{
    id: 6,
    title: "Down Syndrome",
    description: "A genetic disorder caused by the presence of an extra chromosome 21.",
    color: "#a54a6f",
    icon: "🧬",
    overview: "Down syndrome is a genetic disorder caused when abnormal cell division results in an extra full or partial copy of chromosome 21. This extra genetic material causes the developmental changes and physical features of Down syndrome. It varies in severity among individuals, causing lifelong intellectual disability and developmental delays. It's the most common chromosomal condition in the United States.",
    detailedOverview: "Down syndrome affects cognitive ability, physical growth, and facial characteristics. People with Down syndrome often have mild to moderate intellectual disability and may have associated medical conditions including heart defects, hearing and vision problems, thyroid conditions, and early-onset Alzheimer's disease. However, with proper support and education, people with Down syndrome can lead fulfilling lives, work, form relationships, and contribute to their communities. Life expectancy has increased dramatically and now averages about 60 years.",
    interactionTips: [
        "Use clear, simple language and short sentences",
        "Be patient and allow extra time for processing and responses",
        "Use visual aids, demonstrations, and concrete examples",
        "Maintain eye contact and use their name to maintain engagement",
        "Break tasks into small, manageable steps with clear instructions",
        "Use positive reinforcement and celebrate small achievements",
        "Be consistent in your communication and expectations",
        "Use hands-on learning and practical demonstrations"
    ],
    calmingTechniques: [
        "Maintain consistent routines and predictable environments",
        "Use visual schedules with pictures or symbols",
        "Provide quiet spaces for breaks when overwhelmed",
        "Use music, rhythmic activities, or movement breaks",
        "Offer choices to provide sense of control and autonomy",
        "Use deep pressure if appropriate and comforting",
        "Provide familiar objects or activities for comfort",
        "Use simple relaxation techniques like deep breathing"
    ],
    gamesActivities: [
        "Simple board games with clear rules and turn-taking",
        "Music and movement activities with simple instructions",
        "Arts and crafts projects with adapted tools if needed",
        "Interactive reading sessions with picture books",
        "Structured physical activities and adaptive sports",
        "Matching games and simple puzzles",
        "Cooking activities with supervision and adapted tasks",
        "Social games that practice interaction skills"
    ],
    helpfulTips: [
        "Focus on strengths and celebrate all achievements",
        "Provide clear, consistent expectations and boundaries",
        "Use positive reinforcement and encouragement",
        "Be patient and allow time for learning and processing",
        "Adapt activities to individual ability levels",
        "Encourage independence in daily living skills",
        "Provide opportunities for social interaction and friendship",
        "Respect their growing autonomy and choices"
    ],
    needs: [
        "Clear, simple communication with visual supports",
        "Structured routines and predictable environments",
        "Positive reinforcement and encouragement",
        "Opportunities for social interaction and friendship",
        "Appropriate educational and therapeutic support",
        "Medical monitoring for associated health conditions",
        "Respect for individuality and growing independence",
        "Inclusion in community activities and decisions"
    ],
    communication: "Use simple, concrete language, be patient, use visual supports, focus on understanding rather than perfection, allow processing time, and use positive reinforcement.",
    dos: [
        "Do use simple, concrete language",
        "Do be patient with responses and processing",
        "Do use visual supports and demonstrations",
        "Do celebrate small achievements and efforts",
        "Do provide clear expectations and routines",
        "Do encourage independence appropriately",
        "Do include them in conversations and activities",
        "Do respect their feelings and opinions"
    ],
    donts: [
        "Don't use abstract or complex language",
        "Don't rush or pressure responses",
        "Don't underestimate their abilities or potential",
        "Don't ignore their attempts to communicate",
        "Don't compare them to others",
        "Don't talk down to them or use baby talk",
        "Don't make assumptions based on appearance",
        "Don't exclude them from age-appropriate activities"
    ],
    emergencyInfo: "In emergency: Use simple clear instructions, stay calm, know their specific medical needs, have emergency information accessible, contact caregivers if needed.",
    resources: [
        "National Down Syndrome Society - www.ndss.org",
        "Global Down Syndrome Foundation - www.globaldownsyndrome.org",
        "Down Syndrome Education International - www.dseinternational.org"
    ]
},
{
    id: 7,
    title: "Cerebral Palsy",
    description: "A group of disorders that affect movement, muscle tone, and posture.",
    color: "#a56f4a",
    icon: "🦽",
    overview: "Cerebral palsy is a group of disorders that affect movement, muscle tone, and posture. It's caused by damage that occurs to the immature, developing brain, most often before birth. Symptoms appear during infancy or preschool years and generally include impaired movement associated with abnormal reflexes, floppiness or rigidity of the limbs and trunk, abnormal posture, involuntary movements, unsteady walking, or some combination of these.",
    detailedOverview: "Cerebral palsy is the most common motor disability in childhood. The brain damage that causes CP doesn't worsen over time, but the symptoms can change as the child develops. CP affects body movement, muscle control, coordination, reflexes, posture, and balance. Many people with CP have related conditions such as intellectual disability, seizures, vision/hearing impairments, or speech disorders. However, many people with CP have average or above-average intelligence. There are several types of CP including spastic, dyskinetic, ataxic, and mixed.",
    interactionTips: [
        "Be patient with speech and movement - allow extra time",
        "Speak directly to the person, not their caregiver or assistant",
        "Allow extra time for responses and physical actions",
        "Ask before providing physical assistance and follow their guidance",
        "Focus on what they can do rather than limitations",
        "Maintain eye contact and speak clearly",
        "Be understanding of communication challenges",
        "Respect their autonomy and decision-making"
    ],
    calmingTechniques: [
        "Provide proper physical support and positioning",
        "Use gentle stretching exercises and range of motion",
        "Create a comfortable, accessible environment",
        "Use relaxation techniques adapted to physical abilities",
        "Maintain consistent routines and predictable environments",
        "Use music therapy or rhythmic activities",
        "Provide appropriate seating and positioning equipment",
        "Use heat therapy or massage if beneficial"
    ],
    gamesActivities: [
        "Adaptive sports and recreational activities",
        "Computer games with accessible controls or switch access",
        "Music therapy and rhythm activities",
        "Arts and crafts adapted for physical abilities",
        "Social games that accommodate mobility needs",
        "Water activities and swimming",
        "Therapeutic horseback riding",
        "Modified board games with adapted pieces"
    ],
    helpfulTips: [
        "Learn about their specific mobility and communication needs",
        "Ensure environments are physically accessible",
        "Be patient with communication attempts and methods",
        "Respect their independence and capabilities",
        "Focus on abilities and strengths",
        "Include them in activities with appropriate adaptations",
        "Understand that intelligence is often unaffected",
        "Respect their communication methods whether verbal or AAC"
    ],
    needs: [
        "Accessible physical environments and transportation",
        "Appropriate mobility aids and equipment",
        "Patience with communication and movement",
        "Respect for independence and autonomy",
        "Inclusion in physical and social activities",
        "Understanding of varying abilities day-to-day",
        "Access to therapy and medical care",
        "Respect for their communication methods"
    ],
    communication: "Be patient, speak directly to the person, allow time for responses, don't make assumptions about cognitive abilities based on physical capabilities, respect their communication methods.",
    dos: [
        "Do speak directly to the person",
        "Do be patient with communication attempts",
        "Do ask before helping with physical tasks",
        "Do ensure accessibility in environments",
        "Do focus on abilities and strengths",
        "Do respect their communication methods",
        "Do include them in conversations",
        "Do learn about their specific needs"
    ],
    donts: [
        "Don't assume cognitive impairment from physical symptoms",
        "Don't interrupt or finish sentences for them",
        "Don't move mobility aids without permission",
        "Don't make assumptions about capabilities",
        "Don't use infantilizing language or tone",
        "Don't exclude them from conversations",
        "Don't rush them or show impatience",
        "Don't touch without asking first"
    ],
    emergencyInfo: "In emergency: Know their specific mobility needs, have seizure action plan if applicable, know communication methods, have emergency contacts, ensure accessible evacuation.",
    resources: [
        "United Cerebral Palsy - www.ucp.org",
        "Cerebral Palsy Foundation - www.yourcpf.org",
        "CP Research Network - cpresearch.org"
    ]
},
{
    id: 8,
    title: "ADHD",
    description: "Attention deficit hyperactivity disorder characterized by inattention and/or hyperactivity.",
    color: "#a5a54a",
    icon: "⚡",
    overview: "Attention-deficit/hyperactivity disorder (ADHD) is a chronic condition that affects millions of children and often continues into adulthood. ADHD includes a combination of persistent problems, such as difficulty sustaining attention, hyperactivity, and impulsive behavior. It can lead to unstable relationships, poor work or school performance, and low self-esteem. ADHD is one of the most common neurodevelopmental disorders of childhood.",
    detailedOverview: "ADHD is characterized by a persistent pattern of inattention and/or hyperactivity-impulsivity that interferes with functioning or development. There are three presentations: Predominantly Inattentive, Predominantly Hyperactive-Impulsive, and Combined. Symptoms include difficulty paying attention, excessive activity, acting without regard to consequences, and difficulty with executive functions like organization and time management. ADHD is highly genetic and brain imaging studies show differences in brain development. With proper treatment and strategies, people with ADHD can be highly successful.",
    interactionTips: [
        "Provide clear, concise instructions one at a time",
        "Break tasks into small, manageable steps with clear deadlines",
        "Use visual reminders, checklists, and schedules",
        "Allow for movement breaks and fidgeting during tasks",
        "Provide immediate, specific feedback and reinforcement",
        "Use timers and alarms for task management",
        "Minimize distractions in the environment",
        "Give warnings before transitions between activities"
    ],
    calmingTechniques: [
        "Create structured routines with clear expectations",
        "Provide fidget tools for focus during sedentary activities",
        "Use timers and visual schedules for task management",
        "Create quiet, organized workspaces with minimal clutter",
        "Practice mindfulness exercises and deep breathing",
        "Incorporate physical activity breaks throughout the day",
        "Use white noise or calming music to reduce distractions",
        "Provide stress balls or tactile objects for grounding"
    ],
    gamesActivities: [
        "Active games that allow movement and physical engagement",
        "Puzzles, strategy games, and problem-solving activities",
        "Creative arts, building projects, and hands-on activities",
        "Sports and physical activities with clear rules",
        "Games with clear rules, immediate feedback, and short rounds",
        "Interactive learning games with rewards",
        "Outdoor exploration and nature activities",
        "Music and rhythm-based activities"
    ],
    helpfulTips: [
        "Provide positive reinforcement for effort and progress",
        "Be patient with impulsivity and understand it's not intentional",
        "Create organized environments with clear systems",
        "Use checklists, visual aids, and reminders",
        "Allow for physical movement and standing options",
        "Break long tasks into shorter segments with breaks",
        "Provide clear consequences and immediate feedback",
        "Focus on strengths like creativity and energy"
    ],
    needs: [
        "Structured environments and predictable routines",
        "Clear expectations and immediate feedback",
        "Opportunities for physical movement and activity",
        "Visual supports, reminders, and organizational tools",
        "Patience, understanding, and positive reinforcement",
        "Minimized distractions in work/learning environments",
        "Understanding of neurological differences",
        "Appropriate accommodations in school/work settings"
    ],
    communication: "Be clear and concise, use visual supports, provide immediate feedback, be patient with impulsivity in conversations, allow movement during discussions, use positive language.",
    dos: [
        "Do provide clear, concise instructions",
        "Do use visual supports and reminders",
        "Do allow movement breaks during activities",
        "Do give immediate, specific feedback",
        "Do be patient with impulsivity",
        "Do break tasks into smaller steps",
        "Do use positive reinforcement",
        "Do minimize distractions when possible"
    ],
    donts: [
        "Don't give multiple instructions at once",
        "Don't expect prolonged stillness or quiet",
        "Don't take impulsivity or interruptions personally",
        "Don't create overstimulating environments",
        "Don't use vague or abstract language",
        "Don't punish symptoms of the condition",
        "Don't assume lack of effort or caring",
        "Don't ignore their strengths and talents"
    ],
    emergencyInfo: "If overwhelmed: Reduce stimuli, provide quiet space, use calm voice, allow physical outlet, maintain routine, contact supports if needed, ensure safety.",
    resources: [
        "CHADD - www.chadd.org",
        "ADDA - www.add.org",
        "Understood - www.understood.org"
    ]
},
{
    id: 9,
    title: "Dyslexia",
    description: "A learning disorder characterized by difficulty reading due to problems identifying speech sounds.",
    color: "#4a8fa5",
    icon: "📖",
    overview: "Dyslexia is a learning disorder that involves difficulty reading due to problems identifying speech sounds and learning how they relate to letters and words (decoding). Also called reading disability, dyslexia affects areas of the brain that process language. People with dyslexia have normal intelligence and usually have normal vision. It's a common condition that affects the way the brain processes written and spoken language.",
    detailedOverview: "Dyslexia is a specific learning disability that is neurological in origin. It is characterized by difficulties with accurate and/or fluent word recognition and by poor spelling and decoding abilities. These difficulties typically result from a deficit in the phonological component of language that is often unexpected in relation to other cognitive abilities. Dyslexia can manifest differently in different people but commonly includes trouble with reading fluency, decoding, spelling, writing, and sometimes speaking. Many people with dyslexia have strengths in areas like problem-solving, creativity, and spatial reasoning.",
    interactionTips: [
        "Provide information in multiple formats (visual, auditory, hands-on)",
        "Use audio supports, visual aids, and hands-on demonstrations",
        "Allow extra time for reading and processing written information",
        "Offer to read written material aloud or provide audio versions",
        "Use clear, simple fonts and adequate spacing in written materials",
        "Provide key information verbally and visually",
        "Use color coding and organizational tools",
        "Give instructions in small, manageable chunks"
    ],
    calmingTechniques: [
        "Provide quiet, distraction-free reading environments",
        "Use text-to-speech technology and audiobooks",
        "Break reading tasks into small, manageable segments",
        "Use bookmarks, reading guides, and line trackers",
        "Provide positive reinforcement and celebrate progress",
        "Use multi-sensory learning approaches",
        "Provide templates and structured formats for writing",
        "Use graphic organizers and visual planning tools"
    ],
    gamesActivities: [
        "Audiobooks, podcasts, and verbal storytelling",
        "Oral discussions, debates, and verbal games",
        "Visual puzzles, pattern games, and spatial activities",
        "Hands-on learning activities and experiments",
        "Games that don't rely heavily on reading skills",
        "Creative arts, building, and design activities",
        "Music, rhythm, and auditory processing games",
        "Physical activities and sports with verbal instructions"
    ],
    helpfulTips: [
        "Focus on strengths in other areas like creativity or problem-solving",
        "Provide alternative ways to demonstrate knowledge and skills",
        "Be patient with reading and writing tasks",
        "Use technology supports like speech-to-text software",
        "Provide positive feedback and encouragement",
        "Understand that effort doesn't always match output",
        "Provide clear examples and models",
        "Focus on content rather than spelling or formatting"
    ],
    needs: [
        "Alternative learning materials and assessment methods",
        "Extra time for reading and processing tasks",
        "Access to assistive technology and tools",
        "Understanding and patience from educators and peers",
        "Opportunities to demonstrate knowledge verbally or creatively",
        "Multi-sensory learning approaches",
        "Clear, structured instructions and expectations",
        "Focus on strengths and accommodations for challenges"
    ],
    communication: "Be patient with reading and writing tasks, offer to read materials aloud, focus on verbal communication when possible, provide clear examples, use multi-sensory approaches.",
    dos: [
        "Do provide information in multiple formats",
        "Do allow extra time for reading tasks",
        "Do use clear, simple fonts and formatting",
        "Do focus on verbal strengths and comprehension",
        "Do provide positive reinforcement",
        "Do use multi-sensory teaching methods",
        "Do offer reading assistance when needed",
        "Do focus on ideas and content"
    ],
    donts: [
        "Don't force timed reading or testing",
        "Don't criticize spelling errors or messy handwriting",
        "Don't assume lack of intelligence or effort",
        "Don't rely solely on written materials",
        "Don't make them read aloud in public unnecessarily",
        "Don't use small, crowded text or fancy fonts",
        "Don't ignore their ideas because of writing challenges",
        "Don't compare them to other students or siblings"
    ],
    emergencyInfo: "If overwhelmed: Reduce reading demands, provide verbal alternatives, allow breaks, use technology aids, maintain positive attitude, focus on strengths.",
    resources: [
        "International Dyslexia Association - www.dyslexiaida.org",
        "Yale Center for Dyslexia & Creativity - www.dyslexia.yale.edu",
        "Learning Disabilities Association - www.ldaamerica.org"
    ]
},
{
    id: 10,
    title: "Epilepsy",
    description: "A neurological disorder marked by sudden recurrent episodes of sensory disturbance.",
    color: "#a58f4a",
    icon: "⚡",
    overview: "Epilepsy is a central nervous system (neurological) disorder in which brain activity becomes abnormal, causing seizures or periods of unusual behavior, sensations, and sometimes loss of awareness. Anyone can develop epilepsy, and it affects both males and females of all races, ethnic backgrounds, and ages. Seizure symptoms can vary widely from staring spells to convulsions and loss of consciousness.",
    detailedOverview: "Epilepsy is characterized by recurrent, unprovoked seizures. A seizure occurs when there's a sudden burst of electrical activity in the brain causing temporary disruption to the way the brain normally works. There are many types of seizures ranging from brief lapses of attention or muscle jerks to severe and prolonged convulsions. Epilepsy may be due to a genetic disorder or an acquired brain injury, such as a trauma or stroke. About 70% of people with epilepsy can become seizure-free with appropriate medication and treatment.",
    interactionTips: [
        "Learn basic seizure first aid specific to their seizure type",
        "Stay calm during seizures - most stop on their own within minutes",
        "Time the seizure duration accurately",
        "Clear the area of dangerous objects and protect from injury",
        "Stay with the person until they are fully alert and oriented",
        "Know their specific seizure triggers and warning signs",
        "Understand their recovery needs after a seizure",
        "Treat them normally between seizures"
    ],
    calmingTechniques: [
        "Maintain regular sleep patterns and adequate rest",
        "Manage stress through relaxation techniques and routine",
        "Avoid known seizure triggers when possible",
        "Create a safe environment with padded corners if needed",
        "Establish consistent daily routines",
        "Use meditation, deep breathing, or yoga if beneficial",
        "Ensure proper medication management and timing",
        "Maintain a seizure diary to identify patterns"
    ],
    gamesActivities: [
        "Low-stress board games and card games",
        "Creative arts, crafts, and gentle hobbies",
        "Gentle physical activities like walking or swimming",
        "Music listening and audio-based activities",
        "Social activities in safe, familiar environments",
        "Reading, puzzles, and quiet games",
        "Gardening and nature activities with supervision",
        "Computer games with appropriate screen precautions"
    ],
    helpfulTips: [
        "Learn seizure first aid for their specific seizure type",
        "Be aware of potential triggers like flashing lights or stress",
        "Create safe environments free of sharp edges and hazards",
        "Be patient during post-seizure recovery (post-ictal state)",
        "Treat the person normally between seizures",
        "Know emergency procedures and when to call for help",
        "Understand that epilepsy doesn't define the person",
        "Support medication adherence and medical appointments"
    ],
    needs: [
        "Understanding of seizure first aid and emergency procedures",
        "Safe environments free of hazards and sharp edges",
        "Patience during and after seizures",
        "Respect for independence and capabilities",
        "Avoidance of known seizure triggers when possible",
        "Support for medication management",
        "Understanding that intelligence is unaffected",
        "Inclusion in activities with appropriate safety measures"
    ],
    communication: "Be calm and reassuring, speak normally after seizures, don't make assumptions about cognitive abilities based on the condition, be patient with post-seizure confusion, treat normally between episodes.",
    dos: [
        "Do learn seizure first aid for their specific needs",
        "Do stay calm during seizures",
        "Do time seizure duration accurately",
        "Do protect from injury during seizures",
        "Do stay until fully recovered and oriented",
        "Do treat normally between seizures",
        "Do know their specific triggers",
        "Do support their independence"
    ],
    donts: [
        "Don't restrain during seizures",
        "Don't put anything in their mouth",
        "Don't offer food/drink until fully alert",
        "Don't make assumptions about cognitive abilities",
        "Don't panic or crowd the person",
        "Don't ignore seizure activity",
        "Don't exclude from activities unnecessarily",
        "Don't share misinformation about epilepsy"
    ],
    emergencyInfo: "Call ambulance if: seizure lasts >5 minutes, repeated seizures, difficulty breathing, injury occurs, water-related seizure, first-time seizure, pregnancy, or if requested in seizure action plan.",
    resources: [
        "Epilepsy Foundation - www.epilepsy.com",
        "International League Against Epilepsy - www.ilae.org",
        "CURE Epilepsy - www.cureepilepsy.org"
    ]
},

{
    id: 11,
    title: "Speech Disorder",
    description: "A communication disorder where normal speech is disrupted.",
    color: "#4aa56f",
    icon: "🗣️",
    overview: "Speech disorders affect a person's ability to produce sounds that create words, and can range from mild to severe. They can include articulation disorders, fluency disorders (like stuttering), voice disorders, and other conditions that affect speech production. These disorders can be present from childhood or acquired later in life due to injury, illness, or neurological conditions.",
    detailedOverview: "Speech disorders encompass a wide range of conditions that affect the physical production of speech sounds. This includes articulation disorders (difficulty forming specific sounds), fluency disorders like stuttering or cluttering, voice disorders affecting pitch, volume or quality, and dysarthria (muscle weakness affecting speech). Some speech disorders are developmental while others are acquired. Many people with speech disorders use alternative communication methods including sign language, communication boards, or speech-generating devices.",
    interactionTips: [
        "Be patient and allow time to speak without interruption",
        "Maintain natural eye contact and show you're listening",
        "Don't interrupt or finish sentences for them",
        "Focus on what is being said, not how it's being said",
        "Ask for clarification if needed in a respectful way",
        "Use yes/no questions if communication is difficult",
        "Offer alternative communication methods if helpful",
        "Create a relaxed, unhurried communication environment"
    ],
    calmingTechniques: [
        "Create low-pressure communication environments",
        "Use alternative communication methods when helpful",
        "Practice slow, relaxed speaking patterns together",
        "Use visual supports for communication",
        "Provide positive reinforcement for communication attempts",
        "Use relaxation techniques before difficult conversations",
        "Provide communication aids and tools",
        "Create predictable communication routines"
    ],
    gamesActivities: [
        "Non-verbal games and activities",
        "Music, rhythm, and singing activities",
        "Arts, creative expression, and visual projects",
        "Board games that don't require rapid verbal responses",
        "Writing, drawing, and visual communication activities",
        "Physical activities and sports",
        "Computer games with minimal verbal requirements",
        "Building and construction activities"
    ],
    helpfulTips: [
        "Be patient and don't rush conversations",
        "Focus on content rather than delivery",
        "Use alternative communication methods when helpful",
        "Provide positive reinforcement for communication efforts",
        "Treat the person with respect and dignity",
        "Don't make assumptions about intelligence",
        "Learn about their specific communication needs",
        "Include them in conversations and social activities"
    ],
    needs: [
        "Patience in communication interactions",
        "Respectful listening and attention",
        "Alternative communication options when needed",
        "Time to express thoughts and ideas",
        "Understanding and acceptance",
        "Access to speech therapy and supports",
        "Inclusion in social and communication activities",
        "Respect for their communication methods"
    ],
    communication: "Be patient, maintain eye contact, don't interrupt, focus on the message rather than delivery, offer alternative communication methods if needed, show you're listening.",
    dos: [
        "Do be patient and allow thinking time",
        "Do maintain natural eye contact",
        "Do focus on the message content",
        "Do ask for clarification if needed",
        "Do offer writing tools if helpful",
        "Do include them in conversations",
        "Do respect their communication methods",
        "Do create relaxed communication environments"
    ],
    donts: [
        "Don't interrupt or finish sentences",
        "Don't pretend to understand if you don't",
        "Don't look away or show impatience",
        "Don't mimic speech patterns",
        "Don't make assumptions about intelligence",
        "Don't rush conversations",
        "Don't exclude from social conversations",
        "Don't focus on speech errors"
    ],
    emergencyInfo: "Have emergency communication plan, know their preferred communication method, have important information in accessible format, know emergency contacts.",
    resources: [
        "American Speech-Language-Hearing Association - www.asha.org",
        "National Stuttering Association - www.westutter.org",
        "The Stuttering Foundation - www.stutteringhelp.org"
    ]
},
{
    id: 12,
    title: "Intellectual Disability",
    description: "Characterized by significant limitations in both intellectual functioning and adaptive behavior.",
    color: "#6f4aa5",
    icon: "🧠",
    overview: "Intellectual disability involves limitations in intellectual functioning and adaptive behavior that originate before age 18. It affects reasoning, problem-solving, planning, abstract thinking, judgment, academic learning, and learning from experience. The severity can range from mild to profound and affects each person differently. Intellectual disability is about 1% of the population, and of those affected, 85% have mild intellectual disability.",
    detailedOverview: "Intellectual disability is characterized by significant limitations both in intellectual functioning (reasoning, learning, problem-solving) and in adaptive behavior, which covers a range of everyday social and practical skills. This disability originates before the age of 18. The causes can be genetic, complications during pregnancy or birth, health problems like whooping cough or measles, and environmental factors like lead poisoning. With proper support and training, people with intellectual disabilities can learn practical life skills and lead fulfilling lives in their communities.",
    interactionTips: [
        "Use simple, clear language with concrete examples",
        "Break information into small, manageable steps",
        "Use visual aids, demonstrations, and hands-on learning",
        "Be patient and allow extra time for processing",
        "Provide positive reinforcement and encouragement",
        "Use consistent language and approaches",
        "Give one instruction at a time",
        "Use real-life examples and practical applications"
    ],
    calmingTechniques: [
        "Maintain consistent routines and predictable environments",
        "Use visual schedules with pictures or symbols",
        "Provide quiet spaces for breaks when overwhelmed",
        "Use simple relaxation techniques like deep breathing",
        "Offer choices to provide sense of control",
        "Use familiar objects and activities for comfort",
        "Provide clear boundaries and expectations",
        "Use music or rhythmic activities for calming"
    ],
    gamesActivities: [
        "Simple board games with clear rules",
        "Matching, sorting, and categorization activities",
        "Arts, crafts, and hands-on creative projects",
        "Physical activities with clear instructions",
        "Music, rhythm, and movement activities",
        "Practical life skills activities",
        "Social games that practice interaction",
        "Sensory activities and exploration"
    ],
    helpfulTips: [
        "Focus on strengths and abilities",
        "Provide clear expectations and consistent routines",
        "Use consistent approaches and reinforcement",
        "Be patient and encouraging",
        "Adapt activities to individual ability levels",
        "Teach practical life skills systematically",
        "Provide opportunities for social interaction",
        "Respect their dignity and growing independence"
    ],
    needs: [
        "Clear, simple communication with visual supports",
        "Structured routines and predictable environments",
        "Positive reinforcement and encouragement",
        "Opportunities for success and achievement",
        "Respect for individual pace and learning style",
        "Practical life skills training",
        "Social interaction opportunities",
        "Appropriate educational and vocational support"
    ],
    communication: "Use simple language, be concrete and specific, use visual supports, allow processing time, focus on understanding, use positive reinforcement, be patient and respectful.",
    dos: [
        "Do use simple, concrete language",
        "Do break tasks into small steps",
        "Do use visual supports and demonstrations",
        "Do be patient and encouraging",
        "Do focus on abilities and strengths",
        "Do provide clear expectations",
        "Do respect their pace and style",
        "Do include them in decisions"
    ],
    donts: [
        "Don't use abstract concepts or complex language",
        "Don't rush or pressure responses",
        "Don't use complex instructions or multiple steps",
        "Don't talk down to them or use baby talk",
        "Don't make assumptions about capabilities",
        "Don't ignore their attempts to communicate",
        "Don't exclude from age-appropriate activities",
        "Don't focus only on limitations"
    ],
    emergencyInfo: "Have simple emergency instructions, know their understanding level, have visual emergency plans, know their specific needs, have emergency contacts accessible.",
    resources: [
        "The Arc - www.thearc.org",
        "American Association on Intellectual Disabilities - www.aaidd.org",
        "Special Olympics - www.specialolympics.org"
    ]
}
];