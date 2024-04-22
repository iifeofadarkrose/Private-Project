const AboutUs = () => {
  return (
    <div className="mx-8 my-8 md:flex justify-center md:max-w-[730px] md:mx-[10%] lg:mx-[18%]">
      <div className="flex ">
        <section className="w-[2px] md:w-[3px] bg-[#279CD5] h-[44px] color-[#279CD5] border-left border-[1px] border-[#279CD5]"></section>
        <h1 className="ml-4 md:text-normal">
          Qui м nous? <br /> Qu'est-ce que nous faisons?
        </h1>
      </div>

      <div className="md:ml-8">
      <h2 className="text-[10px] mt-[12px] md:mt-0 font-light max-w-[400px] md:text-[12px] md:max-w-[500px] lg:max-w-full">
      
        Au cours de plusieurs années de notre travail de nombreux clients
        d'Europe de l'Est ont commencé à nous faire confiance. Nous sommes
        devenus pour eux des fournisseurs et des partenaires fiables.
      </h2>
      <h2 className="text-[10px] mt-[12px] font-light max-w-[400px] md:text-[12px] md:max-w-[500px] lg:max-w-[600px]">
        La philosophie de notre équipe est de construire sur le long terme
        relations avec nos clients. Au fil des années, nous avons effectué des
        centaines de livraisons sur le chauffage industriel, dont des dizaines
        tâches de conception non standard.
      </h2>
      </div>
    </div>
  );
};

export default AboutUs;
