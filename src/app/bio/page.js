import React from "react";
import Image from "next/image";

const Bio = () => {
  return (
    <section id="bioSection">
      <article id="bioIntro">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
          perspiciatis autem delectus aliquam quia, nesciunt quod et, labore
          facere consequuntur voluptas mollitia possimus voluptatibus dolorem
          iste reprehenderit ipsum, quo enim vel ut! Perspiciatis libero nisi
          possimus illum necessitatibus commodi quibusdam accusantium,
          doloremque repellat iure minus explicabo facere iusto tempora
          deserunt!
        </p>
        <Image src="/bio_intro.png" alt="intro" width={800} height={300} />
      </article>
      <article id="bioEmile"></article>
      <article id="bioFifi"></article>
      <article id="bioRomain"></article>
      <article id="bioJP"></article>
    </section>
  );
};

export default Bio;
