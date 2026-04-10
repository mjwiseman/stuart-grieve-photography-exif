/* eslint-disable max-len */

export const LANDING_CONTENT = {
  hero: {
    eyebrow: 'Scottish Landscape Photography',
    title: 'Tikus Photography',
    subtitle: 'Inspired by nature\'s grandeur',
    image: {
      src: '/ai-home/hero-scotland.jpg',
      alt: 'Scottish Highland landscape with dramatic sky over a serene loch',
    },
  },
  about: {
    eyebrow: 'About Tikus Photography',
    title: 'Sharing Scotland\'s beauty with the world',
    paragraphs: [
      'Hi, my name is Stuart and I started Tikus Photography to present my photographs to a wider audience.',
      'I believe that Scotland still has opportunities to explore as well as images from more popular sites.',
      'Based in Scotland, I want to share my experiences and encourage others to visit all areas of this beautiful country.',
    ],
    guidePrefix: [
      'I am a keen photographer who enjoys the thrill of discovering and',
      'sharing his experiences. I am also a tour guide with the',
    ].join(' '),
    guideSuffix: ', which allows me to share my knowledge of our capital.',
    image: {
      src: '/ai-home/scotland-coast.jpg',
      alt: 'Dramatic Scottish coastline with crashing waves',
    },
  },
  services: {
    eyebrow: 'What we offer',
    title: 'Our Photographic Journeys',
    description: [
      'At Tikus Photography, we offer a range of services designed to bring',
      'the beauty of Scotland into your life or project. Discover how our',
      'expertise can provide you with stunning visual content or a unique',
      'personal experience.',
    ].join(' '),
    items: [{
      type: 'camera',
      title: 'Private Commissions',
      description: [
        'Looking for a unique perspective? Commission us to capture a',
        'specific Scottish scene or a personal landscape photography',
        'project just for you.',
      ].join(' '),
    }, {
      type: 'map',
      title: 'Guided Tours',
      description: [
        'Experience Edinburgh through expert eyes. Stuart is a tour guide',
        'with the Edinburgh Festival Voluntary Guides Association, sharing',
        'his deep knowledge of Scotland\'s capital.',
      ].join(' '),
      link: {
        label: 'Edinburgh Festival Voluntary Guides Association',
        url: 'https://www.efvga.org.uk/',
      },
    }],
  },
  gallery: {
    eyebrow: 'Portfolio',
    title: 'Where every vista tells a tale',
    description: [
      'A photograph is more than just an image — it\'s a moment frozen in',
      'time, a narrative whispered by the wind and light.',
    ].join(' '),
    images: [{
      src: '/ai-home/scotland-winter.jpg',
      alt: 'Snow-covered Highland mountains reflected in a still loch',
      title: 'Winter Stillness',
    }, {
      src: '/ai-home/scotland-castle.jpg',
      alt: 'Scottish castle ruins on an island in a loch',
      title: 'Ancient Guardians',
    }, {
      src: '/ai-home/scotland-coast.jpg',
      alt: 'Wild Scottish coastline with dramatic waves',
      title: 'Coastal Drama',
    }],
  },
  testimonial: {
    text: [
      'We had an amazing experience on this guided tour! Stuart was',
      'incredibly knowledgeable, sharing so many interesting facts and',
      'stories that kept us all engaged. What made it even better was that',
      'my teenagers loved it too.',
    ].join(' '),
    credit: '— Trip Advisor Review',
  },
  contact: {
    eyebrow: 'Get in touch',
    title: 'Connect with us',
    description: [
      'Interested in a commission or collaboration? Drop us a message.',
    ].join(' '),
  },
  footer: {
    address: '22 Shiel Hall Square, Rosewell, EH24 9DA, Scotland',
  },
} as const;
