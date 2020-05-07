export const displayBrand = (carObj, Brands) => {
  const brand = carObj.brand;
  const brand_url = Brands.find((brandObj) => brandObj.id === brand).logo;
  return brand_url;
};
export const displayCar = (carObj, Car, color) => {
  const brand = carObj.brand;
  const car = carObj.car;
  const car_obj = Car[brand].find((carObject) => carObject.id === car);
  const color_variant_with_img = car_obj.colorvariant.filter((c) =>
    c.url ? true : false
  );
  const base_color = color
    ? color
    : car_obj.baseColorVariant ||
      (color_variant_with_img.length > 0 ? color_variant_with_img[0].id : "");
  const car_url = color_variant_with_img.find(
    (car_variant) => car_variant.id === base_color
  ).url;
  return car_url;
};

export const getCarObject = (carObj, Car) => {
  return Car[carObj.brand] && carObj.car !== "0"
    ? Car[carObj.brand].find((carObject) => carObject.id === carObj.car)
    : {};
};
