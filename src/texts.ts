interface StringIndex {
  [key: string]: string;
}

const shopItems: StringIndex = {
  all: "all",
  tops: "tops",
  leggings: "leggings",
  dresses: "dresses",
  accessories: "accessories",
}

const helpItems: StringIndex = {
  contact: "contact",
  "shipping + returns": "shipping + returns",
  "size guide": "size guide",
  "privacy policy": "privacy policy",
  "terms of services": "terms of services",
}

export const texts = {
  header: {
    shop: "shop",
    brand: "brand",
    contact: "contact",
    help: "help",
    logo: "M & S",
  },
  menuSidebar: {
    menu: "menu",
    shop: {
      header: "shop",
      links: shopItems,
    },
    brand: "the brand",
    help: {
      header: "help",
      links: helpItems,
    },
  },
  mainPage: {
    smallParagraph: "Handmade basics for people with unique style",
    mainParagraph: "Modern & Edgy",
    button: "start shopping now",
  },
};
