/**
 * Sample JSON
 */

export const Brands = [
  {
    id: "hyundai",
    name: "Hyundai",
    logo:
      "https://cdn.freebiesupply.com/logos/large/2x/hyundai-motor-company-2-logo-png-transparent.png",
  },
  {
    id: "honda",
    name: "Honda",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Honda.svg/1200px-Honda.svg.png",
  },
  {
    id: "kia",
    name: "Kia",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/KIA_logo2.svg/1280px-KIA_logo2.svg.png",
  },
  {
    id: "maruti",
    name: "Maruti",
    logo: "https://cdn.worldvectorlogo.com/logos/maruti-suzuki-logo.svg",
  },
];

export const Car = {
  hyundai: [
    {
      id: "creta",
      modelname: "Creta",
      fuelvariant: [
        {
          name: "Petrol",
          id: "petrol",
        },
        {
          name: "Diesel",
          id: "diesel",
        },
      ],
      variant: {
        petrol: ["S", "SX", "EX"],
        diesel: ["S", "SX"],
      },
      colorvariant: [
        // {
        //   name: "Blue",
        //   id: "blue",
        // },
        {
          name: "White",
          id: "white",
          url:
            "https://c7.uihere.com/files/140/866/471/hyundai-creta-car-mini-sport-utility-vehicle-hyundai.jpg",
        },
        {
          name: "Black",
          id: "black",
          url:
            "https://c7.uihere.com/files/825/85/184/hyundai-accent-car-hyundai-creta-s-2014-hyundai-sonata-hyundai.jpg",
        },
      ],
      baseColorVariant: "white",
    },
  ],
  maruti: [
    {
      id: "ertiga",
      modelname: "Ertiga",
      fuelvariant: [
        {
          name: "Diesel",
          id: "diesel",
        },
        {
          name: "CNG",
          id: "cng",
        },
      ],
      variant: {
        diesel: ["LXi", "VXi", "ZXi", "ZXi+"],
        cng: ["LXi", "VXi"],
      },
      colorvariant: [
        {
          name: "Blue",
          id: "blue",
          url:
            "https://c7.uihere.com/files/136/1005/307/compact-van-minivan-car-suzuki-maruti-suzuki-ertiga.jpg",
        },
        {
          name: "White",
          id: "white",
          url:
            "https://i7.pngguru.com/preview/756/361/283/suzuki-ertiga-car-maruti-suzuki-swift-suzuki-ertiga.jpg",
        },
        {
          name: "Black",
          id: "black",
          url:
            "https://www.nicepng.com/png/full/932-9321668_all-new-ertiga-black-2019-chevrolet-equinox-lt.png",
        },
      ],
      baseColorVariant: "black",
    },
    {
      id: "baleno",
      modelname: "Baleno",
      fuelvariant: [
        {
          name: "Diesel",
          id: "diesel",
        },
        {
          name: "Petrol",
          id: "petrol",
        },
      ],
      variant: {
        petrol: ["LXi", "VXi", "ZXi", "ZXi+"],
        diesel: ["LXi", "VXi"],
      },
      colorvariant: [
        {
          name: "Blue",
          id: "blue",
          url:
            "https://p7.hiclipart.com/preview/270/809/162/suzuki-swift-baleno-maruti-car-car.jpg",
        },
        {
          name: "Gray",
          id: "gray",
          url:
            "https://img.favpng.com/16/16/6/baleno-maruti-suzuki-swift-car-png-favpng-jveAqduUsMvbkZhX1HqCMhWB4.jpgs",
        },
      ],
      baseColorVariant: "gray",
    },
  ],
  honda: [
    {
      id: "city",
      modelname: "City",
      fuelvariant: [
        {
          name: "Petrol",
          id: "petrol",
        },
      ],
      variant: {
        petrol: ["V", "SV", "VX"],
      },
      colorvariant: [
        {
          name: "Blue",
          id: "blue",
          url:
            "https://img.favpng.com/2/3/14/honda-city-city-car-honda-fit-png-favpng-W0ZtNsJE5PPmia6Av8SKp20VH.jpg",
        },
        // {
        //   name: "White",
        //   id: "white",
        // },
      ],
      baseColorVariant: "blue",
    },
  ],
  kia: [
    {
      id: "seltos",
      modelname: "Seltos",
      fuelvariant: [
        {
          name: "Petrol",
          id: "petrol",
        },
        {
          name: "Diesel",
          id: "diesel",
        },
      ],
      variant: {
        petrol: ["HTE", "HTK", "HTK+", "GTK", "GTK+"],
        diesel: ["HTK+", "GTK+"],
      },
      colorvariant: [
        {
          name: "Blue",
          id: "blue",
          url:
            "https://image3.mouthshut.com/images/Restaurant/Photo/-19347_295380.png",
        },
        {
          name: "Off-White",
          id: "#ffffe4",
          url: "https://www.pngarts.com/files/6/Kia-Seltos-PNG-Photo.png",
        },
        {
          name: "Black",
          id: "black",
          url:
            "https://www.pngarts.com/files/6/Kia-Seltos-Transparent-Background-PNG.png",
        },
      ],
      baseColorVariant: "black",
    },
  ],
};
