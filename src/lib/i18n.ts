export type Lang = 'fr' | 'en' | 'es' | 'de' | 'ru';

export const langLabels: Record<Lang, string> = {
  fr: 'FR',
  en: 'EN',
  es: 'ES',
  de: 'DE',
  ru: 'RU',
};

const translations = {
  fr: {
    nav: { home: 'Accueil', philosophy: 'Philosophie', collection: 'Collection', contact: 'Contact' },
    hero: {
      title: "L'art de la diffusion olfactive",
      subtitle: 'La French Riviera dans votre espace',
      cta: 'Notre Collection',
    },
    philosophy: {
      sectionTitle: 'Notre Philosophie',
      p1: "À Grasse, nous n'avons pas appris à fabriquer des parfums — nous avons appris à écouter ce que la terre veut devenir.",
      p2: "Chaque essence est une mémoire végétale qui attendait de renaître. Notre travail n'est pas de créer, mais de libérer ce qui, dans la fleur, désire déjà s'envoler.",
      p3: "Nous ne mélangeons pas des molécules — nous tissons des instants suspendus, où le temps d'un hôtel devient le temps d'une âme qui se souvient d'elle-même.",
      p4: "L'engagement d'Ambrosiaque est celui-ci\u00a0: ne jamais trahir le secret que la rose nous a confié au matin.",
      p5: "Offrir un parfum, c'est dire à l'autre\u00a0: «\u00a0Restez ici. Ce lieu vous a reconnu avant même que vous n'entriez.\u00a0»",
    },
    collection: {
      sectionTitle: 'Collection Privée',
      viewDetail: 'Découvrir',
      products: [
        { name: 'Aurore de Grasse', desc: 'Rose centifolia · Néroli · Ambre blanc' },
        { name: 'Nuit Méditerranée', desc: 'Oud noir · Encens · Vétiver fumé' },
        { name: 'Jardin Suspendu', desc: 'Jasmin sambac · Fleur de tilleul · Musc' },
        { name: 'Soleil d\'Ambre', desc: 'Ambre doré · Bergamote · Bois de santal' },
      ],
    },
    contact: {
      sectionTitle: 'Contact',
      intro: 'Pour une collaboration ou une demande de devis',
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      send: 'Envoyer',
    },
    footer: {
      founder: 'Fondateur',
      rights: 'Tous droits réservés',
    },
  },
  en: {
    nav: { home: 'Home', philosophy: 'Philosophy', collection: 'Collection', contact: 'Contact' },
    hero: {
      title: 'The art of olfactory diffusion',
      subtitle: 'The French Riviera in your space',
      cta: 'Our Collection',
    },
    philosophy: {
      sectionTitle: 'Our Philosophy',
      p1: 'In Grasse, we did not learn to make perfumes — we learned to listen to what the earth wants to become.',
      p2: 'Each essence is a botanical memory waiting to be reborn. Our work is not to create, but to release what, in the flower, already desires to take flight.',
      p3: 'We do not blend molecules — we weave suspended moments, where the time of a hotel becomes the time of a soul remembering itself.',
      p4: "Ambrosiaque's commitment is this: never betray the secret the rose confided to us at dawn.",
      p5: 'To offer a fragrance is to tell the other: "Stay here. This place recognized you before you even entered."',
    },
    collection: {
      sectionTitle: 'Private Collection',
      viewDetail: 'Discover',
      products: [
        { name: 'Aurore de Grasse', desc: 'Centifolia rose · Neroli · White amber' },
        { name: 'Nuit Méditerranée', desc: 'Black oud · Incense · Smoky vetiver' },
        { name: 'Jardin Suspendu', desc: 'Sambac jasmine · Linden blossom · Musk' },
        { name: "Soleil d'Ambre", desc: 'Golden amber · Bergamot · Sandalwood' },
      ],
    },
    contact: {
      sectionTitle: 'Contact',
      intro: 'For a collaboration or a quote request',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
    },
    footer: {
      founder: 'Founder',
      rights: 'All rights reserved',
    },
  },
  es: {
    nav: { home: 'Inicio', philosophy: 'Filosofía', collection: 'Colección', contact: 'Contacto' },
    hero: {
      title: 'El arte de la difusión olfativa',
      subtitle: 'La Riviera Francesa en su espacio',
      cta: 'Nuestra Colección',
    },
    philosophy: {
      sectionTitle: 'Nuestra Filosofía',
      p1: 'En Grasse, no aprendimos a fabricar perfumes — aprendimos a escuchar lo que la tierra quiere llegar a ser.',
      p2: 'Cada esencia es una memoria vegetal que esperaba renacer. Nuestro trabajo no es crear, sino liberar lo que, en la flor, ya desea volar.',
      p3: 'No mezclamos moléculas — tejemos instantes suspendidos, donde el tiempo de un hotel se convierte en el tiempo de un alma que se recuerda a sí misma.',
      p4: 'El compromiso de Ambrosiaque es este: nunca traicionar el secreto que la rosa nos confió al amanecer.',
      p5: 'Ofrecer un perfume es decirle al otro: "Quédese aquí. Este lugar le reconoció antes de que usted entrara."',
    },
    collection: {
      sectionTitle: 'Colección Privada',
      viewDetail: 'Descubrir',
      products: [
        { name: 'Aurore de Grasse', desc: 'Rosa centifolia · Neroli · Ámbar blanco' },
        { name: 'Nuit Méditerranée', desc: 'Oud negro · Incienso · Vetiver ahumado' },
        { name: 'Jardin Suspendu', desc: 'Jazmín sambac · Flor de tilo · Almizcle' },
        { name: "Soleil d'Ambre", desc: 'Ámbar dorado · Bergamota · Sándalo' },
      ],
    },
    contact: {
      sectionTitle: 'Contacto',
      intro: 'Para una colaboración o una solicitud de presupuesto',
      name: 'Nombre',
      email: 'Correo electrónico',
      message: 'Mensaje',
      send: 'Enviar',
    },
    footer: {
      founder: 'Fundador',
      rights: 'Todos los derechos reservados',
    },
  },
  de: {
    nav: { home: 'Startseite', philosophy: 'Philosophie', collection: 'Kollektion', contact: 'Kontakt' },
    hero: {
      title: 'Die Kunst der olfaktorischen Diffusion',
      subtitle: 'Die Französische Riviera in Ihrem Raum',
      cta: 'Unsere Kollektion',
    },
    philosophy: {
      sectionTitle: 'Unsere Philosophie',
      p1: 'In Grasse haben wir nicht gelernt, Parfums herzustellen — wir haben gelernt, zuzuhören, was die Erde werden möchte.',
      p2: 'Jede Essenz ist eine pflanzliche Erinnerung, die darauf wartete, wiedergeboren zu werden. Unsere Arbeit ist nicht zu erschaffen, sondern das freizusetzen, was in der Blume bereits davonfliegen möchte.',
      p3: 'Wir mischen keine Moleküle — wir weben schwebende Augenblicke, in denen die Zeit eines Hotels zur Zeit einer Seele wird, die sich an sich selbst erinnert.',
      p4: 'Die Verpflichtung von Ambrosiaque ist diese: niemals das Geheimnis zu verraten, das die Rose uns am Morgen anvertraut hat.',
      p5: 'Einen Duft anzubieten bedeutet, dem anderen zu sagen: „Bleiben Sie hier. Dieser Ort hat Sie erkannt, noch bevor Sie eingetreten sind."',
    },
    collection: {
      sectionTitle: 'Private Kollektion',
      viewDetail: 'Entdecken',
      products: [
        { name: 'Aurore de Grasse', desc: 'Zentifolia-Rose · Neroli · Weißer Amber' },
        { name: 'Nuit Méditerranée', desc: 'Schwarzes Oud · Weihrauch · Rauchiger Vetiver' },
        { name: 'Jardin Suspendu', desc: 'Sambac-Jasmin · Lindenblüte · Moschus' },
        { name: "Soleil d'Ambre", desc: 'Goldener Amber · Bergamotte · Sandelholz' },
      ],
    },
    contact: {
      sectionTitle: 'Kontakt',
      intro: 'Für eine Zusammenarbeit oder eine Angebotsanfrage',
      name: 'Name',
      email: 'E-Mail',
      message: 'Nachricht',
      send: 'Senden',
    },
    footer: {
      founder: 'Gründer',
      rights: 'Alle Rechte vorbehalten',
    },
  },
  ru: {
    nav: { home: 'Главная', philosophy: 'Философия', collection: 'Коллекция', contact: 'Контакт' },
    hero: {
      title: 'Искусство ольфакторной диффузии',
      subtitle: 'Французская Ривьера в вашем пространстве',
      cta: 'Наша Коллекция',
    },
    philosophy: {
      sectionTitle: 'Наша Философия',
      p1: 'В Грассе мы не учились создавать духи — мы учились слушать, чем земля хочет стать.',
      p2: 'Каждая эссенция — это растительная память, ожидавшая возрождения. Наша работа — не создавать, а освобождать то, что в цветке уже стремится взлететь.',
      p3: 'Мы не смешиваем молекулы — мы ткём остановленные мгновения, где время отеля становится временем души, вспоминающей себя.',
      p4: 'Обязательство Ambrosiaque таково: никогда не предать тайну, которую роза доверила нам на рассвете.',
      p5: 'Подарить аромат — значит сказать другому: «Останьтесь здесь. Это место узнало вас ещё до того, как вы вошли.»',
    },
    collection: {
      sectionTitle: 'Частная Коллекция',
      viewDetail: 'Открыть',
      products: [
        { name: 'Aurore de Grasse', desc: 'Центифолия роза · Нероли · Белый амбр' },
        { name: 'Nuit Méditerranée', desc: 'Чёрный уд · Ладан · Дымный ветивер' },
        { name: 'Jardin Suspendu', desc: 'Жасмин самбак · Цвет липы · Мускус' },
        { name: "Soleil d'Ambre", desc: 'Золотой амбр · Бергамот · Сандал' },
      ],
    },
    contact: {
      sectionTitle: 'Контакт',
      intro: 'Для сотрудничества или запроса цен',
      name: 'Имя',
      email: 'Эл. почта',
      message: 'Сообщение',
      send: 'Отправить',
    },
    footer: {
      founder: 'Основатель',
      rights: 'Все права защищены',
    },
  },
};

export type Translations = typeof translations.fr;

export function t(lang: Lang): Translations {
  return translations[lang];
}
