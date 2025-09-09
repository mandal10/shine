import Image from "next/image";

const TopperCard = ({ image, percentage, title, grade }) => {
  return (
    <div className="relative h-[300px] rounded-2xl mt-4   shadow group">
      {/* Background Image */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-2xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>


      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t rounded-2xl from-black via-black/10 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10 text-white rounded-2xl">
        <p className="text-[50px] font-black text-white/70  leading-[132%] tracking-[0px]">
          {percentage}
        </p>

        <h3 className=" font-medium leading-[132%] text-[25px] tracking-[0px]">{title}</h3>
        <span className="font-medium leading-[132%] text-[20px] tracking-[0px]">{grade}</span>
      </div>
    </div>
  );
};

export default TopperCard;
