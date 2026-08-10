/**
 * Single source of truth for values that change over time:
 * metrics, pricing, capacity, links. Update here, not in components.
 */

export const site = {
  name: 'FounderVoice',
  founder: 'Hari Prasad',
  tagline: 'People decide to trust you before they buy. I build that trust on LinkedIn, so you don’t have to write it yourself.',
  location: 'London, UK',
  email: 'hari@foundervoice.online',
  url: 'https://foundervoice.online',
};

/**
 * Real LinkedIn metrics for Hari Prasad. Update these as they change. Do not invent numbers.
 * `value` + `suffix` drive the count-up animation; `display` is used wherever
 * animation isn't wanted (e.g. plain text contexts).
 */
export const metrics = {
  impressions: { value: 10.3, suffix: 'M', decimals: 1, display: '10.3M', label: 'Impressions' },
  followers: { value: 59.6, suffix: 'K', decimals: 1, display: '59.6K', label: 'Followers' },
};

export const capacity = {
  ongoingClients: 3,
  clientsLabel: 'Limited to 3 ongoing clients.',
};

export const pricing = {
  startingPrice: '£2,500',
  cadence: '/month',
  model: 'Monthly engagement. Cancel anytime.',
  postsPerWeek: '~3 posts/week',
  features: [
    'Strategy & positioning',
    'Regular idea extraction',
    'Approximately 3 posts a week',
    'Writing and editing',
    'Publishing & workflow management',
    'Performance review',
    'Direct access to Hari',
  ],
};

export const booking = {
  namespace: 'foundervoice',
  calLink: 'hari-prasad/foundervoice',
  config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true' } as Record<string, string>,
};

export const links = {
  linkedin: 'https://www.linkedin.com/in/hariprasad20/',
  email: `mailto:${site.email}`,
};

/**
 * Real LinkedIn post embeds (Hari's own viral posts), screenshotted from
 * LinkedIn's official embed view, with real analytics pulled straight from
 * LinkedIn's post metrics. `image` is the local screenshot (used in the
 * hero and anywhere else a static, always-renders version is needed);
 * `urn` is kept for the live embed, e.g. a future fuller showcase section.
 */
export interface LinkedInEmbed {
  urn: string;
  image: string;
  impressions: string;
  followersGained: string;
  membersReached?: string;
}

export const linkedinEmbeds: LinkedInEmbed[] = [
  {
    urn: 'urn:li:share:7283500014172008448',
    image: '/images/posts/raw-post1.jpg',
    impressions: '200,479',
    followersGained: '273',
  },
  {
    urn: 'urn:li:share:7365009117242994689',
    image: '/images/posts/raw-post2.jpg',
    impressions: '273,789',
    followersGained: '349',
    membersReached: '154,541',
  },
  {
    urn: 'urn:li:share:7376970299151421440',
    image: '/images/posts/raw-post3.jpg',
    impressions: '276,278',
    followersGained: '277',
    membersReached: '145,257',
  },
  {
    urn: 'urn:li:share:7376246363027632128',
    image: '/images/posts/raw-post4.jpg',
    impressions: '248,158',
    followersGained: '319',
    membersReached: '143,320',
  },
];

export const embedUrl = (urn: string) => `https://www.linkedin.com/embed/feed/update/${urn}?collapsed=1`;
/** The actual, clickable, public LinkedIn permalink for a post (not the embed). */
export const postUrl = (urn: string) => `https://www.linkedin.com/feed/update/${urn}/`;

/**
 * Credibility references (press, talks, features). Only list things that are
 * real and confirmed. This site does not fabricate "as seen in" logos.
 * Add entries here as they become available, e.g. { label: 'BBC' }.
 */
export const credibilityMentions: { label: string; href?: string }[] = [
  { label: "MyRealProduct (Antler '26)" },
  { label: 'Jotterwolf (Columbia Startup Finalist)' },
];

/**
 * The "raw idea → post → result" example shown in the Product section.
 * This is a real published post from Hari's LinkedIn, with real analytics
 * pulled from LinkedIn's own post metrics. Update here when swapping in a
 * newer example. Never invent numbers.
 */
export const productExample = {
  rawIdea: 'Took $88k in debt for my Masters. Almost didn’t make it. Should probably write about that.',
  postPreview: [
    'I took on $88,000 in debt to do my Master’s in the US 🇺🇸',
    'My parents put everything on the line. Even their entire net worth couldn’t cover my fees.',
    'They didn’t hesitate and supported me to take a non-collateral loan. All my relatives were against us and told us this was a flop plan.',
    'My parents didn’t hesitate. They told me one thing: “This is our ALL IN game, kiddo. Make sure you do it right.”',
  ],
  result: {
    impressions: '276,278',
    impressionsLabel: 'Impressions',
    reached: '145,257',
    reachedLabel: 'Members reached',
    followersGained: '277',
    followersGainedLabel: 'Followers gained',
  },
};
