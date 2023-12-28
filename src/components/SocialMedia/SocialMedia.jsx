import IconButtonCustom from "../Buttons/IconButtonCustom/IconButtonCustom";

const SocialMedia = () => {
  return (
    <div className="bg-white dark:bg-black w-10 pl-1 absolute shadow-md mt-48 md:mt-0 rounded-r-lg">
      <IconButtonCustom
        size="small"
        ariaLabel="Whatsapp"
        icon={
          <i className="bx bxl-whatsapp text-xl text-grey dark:hover:text-blue" />
        }
      />
      <IconButtonCustom
        size="small"
        ariaLabel="GitHub"
        icon={<i className="bx bxl-github text-xl text-grey dark:hover:text-blue" />}
      />
      <IconButtonCustom
        size="small"
        ariaLabel="Linkedin"
        icon={
          <i className="bx bxl-linkedin text-xl text-grey dark:hover:text-blue" />
        }
      />
      <IconButtonCustom
        size="small"
        ariaLabel="Behance"
        icon={
          <i className="bx bxl-behance text-xl text-grey dark:hover:text-blue" />
        }
      />
    </div>
  );
};

export default SocialMedia;
