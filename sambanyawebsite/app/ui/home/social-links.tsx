import { lusitana } from '../fonts';

export default async function SocialLinks() {
  const links = [
    { name: 'Sam Banya', href: 'https://sambanya.bandcamp.com' },
    { name: 'JeeveSobs', href: 'https://jeevesobs.bandcamp.com' },
    { name: 'Shibes', href: 'https://shibes.bandcamp.com' },
    { name: 'Dreamo', href: 'https://soundcloud.com/dreamoband' },
    {
      name: 'The Bedside Morale',
      href: 'https://soundcloud.com/the-bedside-morale',
    },
  ];
  return (
    <div className="w-full md:col-span-4">
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Sam Banya
      </h2>
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Artist, Musician
      </h2>
      {links.map((link) => {
        return (
          <>
            <button key={link.name} className="btn btn-warning">
              <a href={link.href}>{link.name}</a>
            </button>
            <br />
            <br />
          </>
        );
      })}
    </div>
  );
}
