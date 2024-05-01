import Image from "next/image";

const Banners = () => {
  return (
    <>
      <Image
        src="/promo_1.png"
        alt="Até 30% de desconto em pizzas"
        width={0}
        height={0}
        className="w-full h-auto object-contain"
        sizes="100vw"
        quality={100}
      />
    </>
  );
};

export default Banners;
