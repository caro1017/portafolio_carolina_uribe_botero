import IconButtonCustom from "../Buttons/IconButtonCustom/IconButtonCustom";

const SocialMedia = () => {
  return (
    <div className="absolute bg-white dark:bg-black w-10 pl-1 shadow-md mt-48 md:mt-0 rounded-r-lg">
      <IconButtonCustom
        size="small"
        ariaLabel="Whatsapp"
        icon={
          <i className="bx bxl-whatsapp text-xl text-grey hover:text-blue" />
        }
        href="https://api.whatsapp.com/send?phone=0573146816250&text=Hola Carolina !"
      />
      <IconButtonCustom
        size="small"
        ariaLabel="GitHub"
        icon={<i className="bx bxl-github text-xl text-grey hover:text-blue" />}
        href="https://github.com/caro1017"
      />
      <IconButtonCustom
        size="small"
        ariaLabel="Linkedin"
        icon={
          <i className="bx bxl-linkedin text-xl text-grey hover:text-blue" />
        }
        href="https://www.linkedin.com/in/carolina-uribe-botero-7b0839195/"
      />
      <IconButtonCustom
        size="small"
        ariaLabel="Behance"
        icon={
          <i className="bx bxl-behance text-xl text-grey hover:text-blue" />
        }
      />
    </div>
  );
};

export default SocialMedia;
