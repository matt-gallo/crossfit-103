// Central content for CrossFit 103 — edit copy/links here.
// Mirrors the live crossfit103.com site (migrated off GoHighLevel).

export const SITE = {
  name: "CrossFit 103",
  phone: "(315) 968-5136",
  phoneHref: "tel:+13159685136",
  email: "info@crossfit103.com",
  address: "47 Trioka Wy, Staten Island, NY 10309",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=47+Trioka+Wy+Staten+Island+NY+10309",
  mapEmbed:
    "https://www.google.com/maps?q=47+Trioka+Wy,+Staten+Island,+NY+10309&output=embed",
  instagram: "https://www.instagram.com/crossfit_103/",
  // "Get Started" opens the real GoHighLevel "General Interest Form" in a modal,
  // so submissions flow straight into the GHL pipeline.
  ghlFormId: "hErjkS6v47Q0IA55lB3p",
  ghlFormName: "General Interest Form",
  // "Drop In" opens this Wodify Online Sales Page in a new tab.
  wodifyDropInUrl:
    "https://thrive.wodify.com/OnlineSalesPage/Main?q=Classes%7COnlineMembershipId%3D68608%26LocationId%3D5260",
  // Hero background video — hosted on the filesafe CDN. While empty, the hero
  // falls back to the still image.
  heroVideoUrl:
    "https://assets.cdn.filesafe.space/QUo5YksQ3m4Cj0up4KFt/media/68e0452034c87c41bd37be2a.mp4",
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Coaches", href: "/coaches" },
  { label: "FAQ", href: "/faq" },
];

export const PROBLEMS = [
  {
    icon: "/images/icon-alone.png",
    title: "Doing boring workouts alone?",
    body: "Imagine training in an environment where every workout is fresh, exciting, and you're never on your own.",
  },
  {
    icon: "/images/icon-lost.png",
    title: "Feeling lost in the gym?",
    body: "What if you had expert coaches and a proven program guiding you step-by-step?",
  },
  {
    icon: "/images/icon-time.png",
    title: "Feeling like you don't have time?",
    body: "Picture workouts designed to fit your schedule—efficient, effective, and done in under an hour.",
  },
  {
    icon: "/images/icon-plan.png",
    title: "Not having a solid game plan?",
    body: "Think about following a roadmap that shows you exactly how to reach your goals, without the guesswork.",
  },
];

export const TRUST = [
  { value: "4.9/5", label: "Google Reviews" },
  { value: "200+", label: "Members Strong" },
  { value: "Since 2016", label: "CrossFit Affiliate" },
  { value: "12", label: "Certified Coaches" },
  { value: "HYROX", label: "Official Affiliate Partner" },
  { value: "1000+", label: "Workouts Completed Weekly" },
];

export const PROGRAMS = [
  {
    slug: "crossfit",
    name: "CrossFit",
    image: "/images/gym-1.jpeg",
    short:
      "Become your best self in our fun core program with 60 minutes of community-based group classes where you are supported by an expert coach while surrounded by a community of like-minded Staten Island locals.",
    pricing: [
      { label: "Unlimited Membership", value: "$205/mo" },
      { label: "Active & Fit Partnership", value: "$130/mo" },
      { label: "Drop-In Pass", value: "$25/visit" },
    ],
  },
  {
    slug: "hyrox",
    name: "Hyrox Training",
    image: "/images/gym-9.jpeg",
    short:
      "Race-ready conditioning built around HYROX movements—runs, sleds, carries, rows—coached with precision and paced for your level, alongside driven Staten Island athletes.",
    pricing: [{ label: "Included for members", value: "Free" }],
  },
  {
    slug: "personal-coaching",
    name: "Personal Coaching",
    image: "/images/gym-3.jpeg",
    short:
      "One-to-one coaching that meets you where you are, builds a clear plan, and guides every rep—so you train with purpose and leave with total clarity.",
    pricing: [{ label: "Custom plans", value: "Inquire" }],
  },
  {
    slug: "real-results",
    name: "Real Results",
    image: "/images/gym-4.jpeg",
    short:
      "Clear benchmarks, consistent wins, and visible progress—tracked in the gym and felt in daily life—supported by coaches and a Staten Island community that shows up.",
    pricing: [{ label: "With every membership", value: "Included" }],
  },
];

export const COACHES = [
  {
    name: "Michael Morgante",
    cert: "CrossFit L2",
    role: "Owner & Head Coach",
    image: "/images/coach-mike.jpeg",
    bio: "Owner and head coach of CrossFit 103, Mike combines a decade of experience, Level 2 certification, and a DJ's energy to create a community-driven training atmosphere.",
  },
  {
    name: "Thomas Malagreca",
    cert: "CrossFit L2",
    role: "Co-Owner & Head Coach",
    image: "/images/coach-thomas.jpeg",
    bio: "Co-owner and head coach, Thomas combines years of experience with a focus on fundamentals, creating a supportive space where members push past limits and grow.",
  },
  {
    name: "Nicolette Esposito",
    cert: "CrossFit L1",
    role: "Coach",
    image: "/images/coach-nicolette.jpeg",
    bio: "Competitive dancer turned CrossFit coach, Nicolette brings discipline, encouragement, and community focus—making every class the best hour of her athletes' day.",
  },
  {
    name: "Maria Boschnack",
    cert: "CrossFit L1",
    role: "Coach",
    image: "/images/coach-maria.jpeg",
    bio: "A former pro dancer and bodybuilding champion, Maria brings 20+ years of teaching and boundless energy to help athletes move with precision, confidence, and joy.",
  },
];

export const GALLERY = [
  "/images/gym-1.jpeg",
  "/images/gym-6.jpeg",
  "/images/gym-7.jpeg",
  "/images/gym-8.jpeg",
  "/images/gym-9.jpeg",
  "/images/gym-5.jpeg",
];

export const FAQS = [
  {
    q: "What can you expect during your No-Sweat Intro?",
    a: "You'll meet 1:1 with a coach for about 20 minutes. We review your goals, movement history, schedule, and tour the space. No workout—just a plan for your first 90 days and next steps.",
  },
  {
    q: "Can you start even if you're new to CrossFit?",
    a: "Over half of our members were completely new to CrossFit when they started. Everyone begins with our LaunchPad On-Ramp program, so you'll learn foundational movements, scaling options, and how classes work before joining the community.",
  },
  {
    q: "How do you book your first class?",
    a: "Members book through the CrossFit 103 app (powered by Wodify). Traveling athletes can use the Drop-In button above, pick a class time, submit payment, and we'll send arrival instructions plus the door code.",
  },
  {
    q: "Can you use your Active & Fit benefits here?",
    a: "Yes! Bring your Active & Fit membership ID to your intro. You'll pay the program fee through Active & Fit and a monthly facility fee directly to us. You still complete LaunchPad before joining classes.",
  },
  {
    q: "How can you train for HYROX competitions?",
    a: "HYROX sessions run Thursday evenings and Sunday mornings. Members can jump in at no extra cost. Non-members can purchase a HYROX Drop-In pass which unlocks the class, prep guide, and event registration tips.",
  },
  {
    q: "Can your kids train here too?",
    a: "Yes. Our Stronger with Sam youth program trains ages 10–17 in 8-week cycles focused on confidence, discipline, and movement fundamentals. Parents book a Youth Consult so Coach Sam can tailor the plan and share waivers.",
  },
  {
    q: "How can you accelerate your results with coaching?",
    a: "Nutrition coaching is led by Coach Sophia with flexible packages. Personal training is available with Coach Mike or the coach that fits your goals. Mention it on your intro form and we'll bundle the right plan.",
  },
  {
    q: "How can you track your body transformation?",
    a: "We run Fit3D scans in-house. Members get exclusive access to discounted scans, and non-members can book individual sessions. Choose a time slot, receive prep instructions, and we'll email the report with next-step recommendations.",
  },
  {
    q: "What if you need to pause your membership?",
    a: "Just email the front desk 14 days before your next billing date. We can freeze memberships for travel, injury, or season conflicts. When you're ready to return, we'll run a quick check-in to catch you up.",
  },
];
