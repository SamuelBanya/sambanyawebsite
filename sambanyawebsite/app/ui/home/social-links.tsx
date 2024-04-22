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
    <div className="w-full md:col-span-2">
      <div className="avatar">
        <div className="w-24 rounded-full">
          {/* <img src="https://github.com/SamuelBanya/sambanyawebsite/blob/main/sambanyawebsite/public/profile-pic.jpg" /> */}
          {/* <img src="/public/profile-pic.jpg" alt="profile pic" /> */}
          <img src="https://f4.bcbits.com/img/0035792289_20.jpg" />
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
