import Image from "next/image";
export default function Home() {
  return (
    <main>
      <section id="accueil">
        <div>
          <Image
            src="/images/accueil.jpg"
            alt="New Life"
            width={900}
            height={600}
          />
        </div>
      </section>
    </main>
  );
}
